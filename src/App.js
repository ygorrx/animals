import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import { UserStorage } from './UserContext';

const App = () => {
  return <div>
    <BrowserRouter>
    <UserStorage>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login/*' element={<Login/>} />
        <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/conta/*' element={<User/>}/>
          </Route>
      </Routes>
      <Footer/>
    </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;
