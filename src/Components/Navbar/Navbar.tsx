import { RxHamburgerMenu } from 'react-icons/rx';
import navLogo from '../../assets/logo-text.png'
import { useState } from 'react';
import { DiVim } from 'react-icons/di';
import { TbXboxXFilled } from 'react-icons/tb';

const Navbar =()=>{

    const [toggle, setToggle] = useState(false)

const handleToggle = ()=>{
    setToggle(!toggle);
}

    return (
        <div className=''>

<div className='container mx-auto flex sm:justify-between justify-around  gap-4 mt-4 items-center'>


    <div className='hidden md:block cursor-pointer col-span-3'>
    <img src={navLogo} width={'137px'} height={'32px'} alt="" />
</div>


  <button onClick={()=>handleToggle()} className='md:hidden'>
    {toggle? <TbXboxXFilled className='font-bold text-2xl cursor-pointer' />
 :  <RxHamburgerMenu className='font-bold text-2xl cursor-pointer'/>}   

    </button>

       
{toggle && 

(
    <div className='-mb-50 md:hidden absolute'>
        <ul className={`flex-col   gap-3 secondary-color font-medium `}>
        <li className='primary-color font-semibold cursor-pointer'>Home</li>
        
        
       <li className='cursor-pointer'> Technologies</li>
       <li className='cursor-pointer'>Projects</li>
       <li className='cursor-pointer'>About</li>
       <li className='cursor-pointer'>Contact</li>
    </ul>

    

    </div>
)
    
    }

     <div className='block md:hidden cursor-pointer col-span-3'>
    <img src={navLogo} width={'137px'} height={'32px'} alt="" />
</div>
<div className=''>

 

    <ul className={`hidden flex-col md:flex md:flex-row  gap-3 secondary-color font-medium`}>
        <li className='primary-color font-semibold cursor-pointer'>Home</li>
        
        
       <li className='cursor-pointer'> Technologies</li>
       <li className='cursor-pointer'>Projects</li>
       <li className='cursor-pointer'>About</li>
       <li className='cursor-pointer'>Contact</li>
    </ul>

  
</div>

<div className='order-3 space-x-2 flex justify-end'>
    <button className='btn rounded-full'>Sign In</button>
    <button className='btn bg-[#DB2777] text-white rounded-full'>Sign Up</button>
</div>


</div>
<div className='divider mt-0'></div>

        </div>
    )
}

export default Navbar;