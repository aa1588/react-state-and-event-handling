import React from 'react'
import Nav from './components/Nav'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


import Form from './components/LoginForm';
import LoginForm from './components/LoginForm';
import Phone from './components/Phone';
import Counter from './components/Counter'
import MobileCart from './components/MobileCart';
import WatchCart from './components/WatchCart';

function App() {
  return (
    <div>
      <Nav />
      {/* <Phone /> */}
      {/* <LoginForm /> */}
      {/* <Counter /> */}
      {/* <MobileCart /> */}
      <WatchCart />
    </div>
  )
}

export default App