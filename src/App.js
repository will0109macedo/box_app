import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

var number = 5;

function Home() {
  return <div>
  <h3>Welcome Home</h3>
  </div>
}

function Help() {
  return <div>
  <h3>Help is here</h3>
  </div>
}

function Contact() {
  return <div>
  <h3>Forget about it</h3>
  </div>
}

function Complains() {
  return <div>
  <h3>LMAO</h3>
  </div>
}

function App(props) {
  
  const [name, setName] = useState('')

  function handleChange(e) {
    setName(e.target.value);
  }
  
  return (
    <div className="pages">
    <Router>
    <nav>
    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/help">Help</Link>
    <Link className="link" to="/contact">Contact</Link>
    <Link className="link" to="/complains">Complains</Link>
    </nav>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='help' element={<Help />} />
    <Route path='contact' element={<Contact />} />
    <Route path='complains' element={<Complains />} />
    </Routes>
    </Router>
    <div className="div">
    <br />
    <h3>Link to Google</h3>
    <a href="https://www.google.com">Google</a>
    <p>I need a full parragraph here</p>
    <button>Press Me</button>
    <input
    type="text"
    name="Will" 
    onChange={ handleChange }
    value={name}/>
    <br />
    {number}
    </div>
    </div>
  );
}

export default App;
