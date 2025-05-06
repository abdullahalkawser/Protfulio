import React from 'react'
import Navbar from '../navber/Navbar'
import { Outlet } from 'react-router-dom'
import Hero from '../Hero/Hero'




const Home = () => {
    return (
   <div>

   
<Navbar /> {/* Global Navbar */}
      <div className="flex flex-col md:flex-row gap-6 p-6 sm:p-10 lg:p-16">
        
        {/* Sidebar with Hero Section */}
        <div className="w-full md:w-1/3 lg:max-w-sm bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 h-[884px] overflow-y-auto">
          <Hero />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[884px]">
          <Outlet /> {/* Child routes rendered here */}
      
        </div>
      </div>





   

 
   </div>
    )
}

export default Home