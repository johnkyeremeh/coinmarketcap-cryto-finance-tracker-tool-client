import './App.css';
import {useEffect, useState} from 'react'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CryptoList from './components/CryptoList';
import axios from 'axios'
import cryptodata from './data';

function App() {
  const [data, setData] = useState([])
  
  async function start(){
    try {
      const response = await axios.get(`http://localhost:4000/api`);
      console.log("response", response)
      const data = await response.data.data;
      console.log("data", data)
      setData(data)
      console.log("data", cryptodata)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    start()
  }, []);



  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <CryptoList records={cryptodata} />
    </div>
  );
}

export default App;
