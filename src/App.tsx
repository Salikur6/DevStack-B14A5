import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'

function App() {

  return (
   <div className=''>
  <Navbar></Navbar>
  <Banner></Banner>

            <ToastContainer />

   </div>
  )
}

export default App
