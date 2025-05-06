import Timeline from './ho';
import Hero from './page/Hero/Hero';
import Home from './page/Home/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white font-sans">
      <div className="flex flex-col md:flex-row gap-6 p-6 sm:p-10 lg:p-16">
        
        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:max-w-sm bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 h-[884px] overflow-y-auto">
          <Hero />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[884px]">
          <Home />
          <div className="mt-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
