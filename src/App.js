import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import Photo from './Components/Photo/Photo';
import { UserStorage } from './UserContext';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

const App = () => {
  return <div className='App'>
    <HashRouter>
    <UserStorage>
      <Header/>
      <main className='Appbody'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login/*' element={<Login/>} />
        <Route path='foto/:id' element={<Photo/>} />
        <Route path='perfil/:user' element={<UserProfile/>} />
        <Route path='*' element={<NotFound/>} />
        <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/conta/*' element={<User/>}/>
          </Route>
      </Routes>
      </main>
      <Footer/>
    </UserStorage>
    </HashRouter>
  </div>;
};

export default App;
