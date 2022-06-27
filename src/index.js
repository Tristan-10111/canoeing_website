import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'
import Shop from './pages/shop'
import Privacy from './pages/privacy'

ReactDOM.render(
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/privacy' element={<Privacy />}/>
      </Routes>
    </Router>, 
    document.getElementById('root')
);


