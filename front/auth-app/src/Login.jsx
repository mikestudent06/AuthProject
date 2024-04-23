import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";

const LoginContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333; /* Darken the text color */
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555; /* Darken the label color */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px; /* Increase font size for better readability */
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  font-size: 16px; /* Increase font size for better visibility */
  text-align: center;
  transition: background-color 0.2s; /* Smooth button hover effect */

  &:hover {
    background-color: #0056b3;
  }
`;

function Login() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User data ", username, email, password);
    // Create an object with user input data
    const userData = {
      username,
      email,
      password,
    };
    try {
      const response = await axios.post("http://localhost:8000/auth/login", userData);
      console.log("Data from form: ", response.data); // Use response.data to access the response body
    } catch (error) {
      console.log("Error caught: ", error);
    }
  
  };
  
  return (
    <LoginContainer>
      <Heading>Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="username"
            placeholder="Enter your name"
            value={username}
            onChange={handleNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </form>
      <p>
        Don't have an account? <Link to="/auth/register">Register</Link>
      </p>
      <p>
        Go back to <Link to="/">Home</Link>
      </p>
    </LoginContainer>
  );
}

export default Login;
