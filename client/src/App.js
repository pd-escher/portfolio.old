import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import ContentView from './ContentView';
import { BrowserRouter } from 'react-router-dom';
import './style.css'

function PrimaryLayout() {
  return (
    <div class='containerr'>
      <Navbar />
      <Header />
      <ContentView />
      <Footer />
    </div>
  );
}

// const App = () => <PrimaryLayout/>
const App = () => (<BrowserRouter><PrimaryLayout /></BrowserRouter>)

export default App