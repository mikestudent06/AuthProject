import db from '../db.js';
import bcrypt from 'bcrypt';

const register = (req, res) => {
  const contentType = req.headers['content-type'];

  // Check if the Content-Type header is set to application/json
  if (contentType === 'application/json') {
    console.log('Received JSON data');
  } else {
    console.log('Received data with Content-Type: ' + contentType);
  }

  try {
    const { username, email, password, passwordConfirm } = req.body;
    console.log("Form data: ", req.body);

    // Check if passwords match
    if (password !== passwordConfirm) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
  
    // Check if a user with the same email or username already exists
    const checkUserSql = 'SELECT * FROM users WHERE email = ? OR username = ?';
    db.query(checkUserSql, [email, username], (err, rows) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Registration failed' });
      }
    
      if (rows.length > 0) {
        // User with the same email or username already exists
        return res.status(409).json({ message: 'User already exists' });
      }
      
      // Hash the password using bcrypt
      bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
        if (hashErr) {
          console.error('Password hashing error:', hashErr);
          return res.status(500).json({ message: 'Registration failed' });
        }
        
        // If no matching user found, passwords match, and password is hashed, proceed with registration
        const insertUserSql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(insertUserSql, [username, email, hashedPassword], (insertErr, result) => {
          if (insertErr) {
            console.error('Registration error:', insertErr);
            return res.status(500).json({ message: 'Registration failed' });
          }
        
          // Registration successful
          return res.status(201).json({ message: 'Registration successful' });
        });
      });
    });
  } catch (error) {
    console.error("Error parsing request body: ", error);
    return res.status(400).json({ message: 'Invalid request body' });
  }
};

export default { register };
