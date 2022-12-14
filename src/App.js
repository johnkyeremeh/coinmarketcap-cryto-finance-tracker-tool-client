import './App.css';
import {useEffect, useState} from 'react'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CryptoList from './components/CryptoList';
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <CryptoList />
    </div>
  );
}

export default App;
