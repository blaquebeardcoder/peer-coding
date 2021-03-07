import './App.css';
import axios from 'axios';
import CatData from './Screens/CatData';
import DogData from './Screens/DogData';
import {useState, useEffect} from 'react';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav';
import Home from './Screens/Home';
import Footer from './Screens/Footer';

function App() {


   return (

    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cats" component={CatData} />
        <Route exact path="/dogs" component={DogData} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;