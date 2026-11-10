import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Technologies from './Components/Technologies/Technologies'
import Footer from './Components/Footer/Footer'

function App() {

  return (
   <div className=''>
  <Navbar></Navbar>
  <Banner></Banner>
  <Technologies></Technologies>
  <Footer></Footer>

            <ToastContainer />

   </div>
  )
}

export default App
