import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
 import Stat from './components/Stat'
import Msec from './components/Msec'
import { Suspense, useState } from 'react'
import Starter from './components/Starter'
import Sample from './components/Sample'
const fetchCard = async() => {
  const res = await fetch("/data.json");
  return  res.json();
}

function App() {
  
  const cardPromise = fetchCard();
  const [carts  ,setCarts] = useState([]);
  const [total , setTotal]  =  useState(0)
  return (
    <>
      <Navbar carts= {carts}
        setCarts = {setCarts}
         total =  {total}
        setTotal  =   {setTotal}
      ></Navbar>
      <Banner></Banner>
      <Stat></Stat>
      <Suspense fallback={<span class="$$loading $$loading-spinner text-error"></span>}>
        <Msec cardPromise = {cardPromise}
        carts  = {carts}
        setCarts  = {setCarts}
        total =  {total}
        setTotal  =   {setTotal}
        
        ></Msec>
      </Suspense>
      <Starter></Starter>
      <Sample></Sample>
      <ToastContainer></ToastContainer>
        
    </>
  )
}

export default App
