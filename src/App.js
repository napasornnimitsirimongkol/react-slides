import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Home from  './componets/Home';
import Contact from './componets/Contact';
import Product from './componets/Product';
import Profile from './componets/Profile';
import About from './componets/About';
import Header from './componets/Header';
import Footer from './componets/Footer';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header/>
       <Route path="/" exact={true} component={Home}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/products" component={Product}/>
       <Route path="/about" component={About}/>
       <Route path="/profile" component={Profile}/>
      <Footer/>
    </div>
  );
}

export default App;
