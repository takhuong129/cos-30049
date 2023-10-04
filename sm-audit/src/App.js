import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Home} from './components/Home.js'
import {Login} from './components/Login.js'
import {Signup} from './components/Signup.js'
import {Navbar2} from './components/Navbar2.js';
import {Audit} from './components/Audit.js'
import {Report} from './components/Report.js'
import { Footer } from './components/footer.js';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
        
          <Router>
            <Navbar2 isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn}/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/audit-system' element={<Audit/>}></Route>
              <Route path='/report-history' element={<Report/>}></Route>
              <Route path='/login' element={<Login setLoggedIn={setIsLoggedIn}/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
            </Routes>
          </Router>
        <Footer/>
    </div>
  );
}

export default App;
