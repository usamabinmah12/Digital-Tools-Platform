import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
 import Stat from './components/Stat'
import Msec from './components/Msec'
import { Suspense } from 'react'
const fetchCard = async() => {
  const res = await fetch("/data.json");
  return  res.json();
}

function App() {
  
  const cardPromise = fetchCard();
  console.log(cardPromise);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stat></Stat>
      <Suspense fallback={<span class="$$loading $$loading-spinner text-error"></span>}>
        <Msec cardPromise = {cardPromise}></Msec>
      </Suspense>
        
    </>
  )
}

export default App
