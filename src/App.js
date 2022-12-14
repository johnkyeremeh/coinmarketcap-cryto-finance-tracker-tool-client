import './App.css';
import {useEffect, useState} from 'react'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CryptoList from './components/CryptoList';
import axios from 'axios'
// import cryptodata from './data';

function App() {
  const [data, setData] = useState([])
  
  async function start(){
    try {
      const response = await axios.get(`https://whispering-cliffs-89323.herokuapp.com/api`);
      console.log("response", response)
      const data = await response.data.data;
      console.log("data", data)
      setData(data)

      // console.log("data", cryptodata) 
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    start()
    const id = setInterval(() => {
      start();
    }, 300000);
    return () => clearInterval(id);
  }, []);



  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <CryptoList records={data} />
    </div>
  );
}

export default App;
