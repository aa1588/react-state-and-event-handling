import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import '../index.css'

const Nav = () => {
  return (
    <div>
      <Navbar className='bg-success'>
        <Container className='ms-0'>
          <Navbar.Brand className='text-white'>State and Event Handling</Navbar.Brand>
        </Container>
    </Navbar>

    </div>
  )
}

export default Nav;