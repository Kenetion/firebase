import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
import { Home } from './pages/home';
// import { Profile } from './pages/profile';
import { NotSpecified } from './pages/notspecified';
import { CreatePost } from './pages/create-post/create-post';
import { Login } from './pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/profile" element={<Profile />}/> */}
          <Route path="/login" element={<Login />}/>
          <Route path="/createpost" element={<CreatePost />}/>
          <Route path="*" element={<NotSpecified />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
