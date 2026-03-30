import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
 import Stat from './components/Stat'
import Msec from './components/Msec'
import { Suspense, useState } from 'react'
const fetchCard = async() => {
  const res = await fetch("/data.json");
  return  res.json();
}

function App() {
  
  const cardPromise = fetchCard();
  const [carts  ,setCarts] = useState([]);

  return (
    <>
      <Navbar carts= {carts}
        setCarts = {setCarts}
      ></Navbar>
      <Banner></Banner>
      <Stat></Stat>
      <Suspense fallback={<span class="$$loading $$loading-spinner text-error"></span>}>
        <Msec cardPromise = {cardPromise}
        carts  = {carts}
        setCarts  = {setCarts}
        
        
        ></Msec>
      </Suspense>
        
    </>
  )
}

export default App
