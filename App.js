import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/register/Register';
import Home from './Components/Home/Home';
import Footer from './Components/footer/Footer';


import GetApp from './Components/getApp/GetApp';
import ButtonBases from './Components/sendReceive/sendReceive';
import Movies from './Components/Movies/Movies';
import TitlebarBelowImageList from './Components/Food/Food';
import Payment from './Components/Payment/Payment';
import ImgMediaCard from './Components/sendReceive/sendReceive';





class App extends React.Component {
  render() {

    return <div>
      <Header /><br /><br />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        
        <Route path='/getApp' element={<GetApp />} />
        <Route path='/send' element={<ImgMediaCard />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/food' element={<TitlebarBelowImageList />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>

      <Footer />
    </div>
  }
}
export default App;
