import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
 import Stat from './components/Stat'
import Msec from './components/Msec'


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stat></Stat>
      <Msec></Msec>  
    </>
  )
}

export default App
