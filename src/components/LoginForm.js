import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {

  let [email, setEmail] = useState ("");
  let [password, setPassword] = useState ("");

  const handleEmailChange = (e) => {
    console.log(e.target.value)
    setEmail(()=>{
      return e.target.value;
    })
  }
  
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(()=>{
      return e.target.value;
    })
  }

  return (

      <Container className='col-5 mt-5'>
        <pre>{email}</pre>
        <pre>{password}</pre>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => handleEmailChange(e)} type="email" placeholder="Enter email" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => handlePasswordChange(e)} type="password" placeholder="Password" />
          </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
   </Container>

   
  );
}

export default LoginForm;

/*
  State and Event handling for a login form - example
*/