
import Timeline from './ho';
import Hero from './page/Hero/Hero';
import Home from './page/Home/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    


      <div className='flex gap-10 flex-col md:flex-row px-4 sm:px-10 lg:px-40 p-28'>
        <div className='w-full md:w-1/3 lg:w-96 bg-blue-900 shadow-xl rounded-lg h-[884px] '>
          <Hero />
         
        </div>

        <div className='flex-1  bg-blue-900 rounded-lg'>
          <Home />
          <Outlet />

  
        </div>
      </div>
    </>
  );
}

export default App;
