// loginController.js
import db from '../db.js';

const login = (req, res) => {
    const contentType = req.headers['content-type'];
    
    // Check if the Content-Type header is set to application/json
    if (contentType === 'application/json') {
      console.log('Received JSON data');
    } else {
      console.log('Received data with Content-Type: ' + contentType);
    }
    
    try {
        const { username, email, password } = req.body;
        console.log("Form data: ", req.body);
        res.json(req.body);
        // Rest of your code
      } catch (error) {
        console.error("Error parsing request body: ", error);
        res.status(400).json({ message: 'Invalid request body' });
      }
  
//   const sql = 'SELECT * FROM login WHERE username = ? AND email = ? AND password = ?';
//   db.query(sql, [username, email, password], (err, rows) => {
//     if (err) {
//       return res.status(500).json({ message: 'Server side error' });
//     }
//     if (rows.length > 0) {
//       // User found, you can generate and send a JWT token here
//       // const token = generateToken(rows[0]);
//       // return res.status(200).json({ token });
//     } else {
//       return res.status(404).json({ message: 'No records existed' });
//     }
//   });
};

export default { login };
