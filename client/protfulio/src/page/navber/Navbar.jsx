import { Link } from 'react-router-dom';
import { Menu, GraduationCap, Folder, PenTool, PhoneCall, Info } from 'lucide-react';

function Navbar() {
  const nav = (
    <>
      <li>
        <Link to="/about" className="flex items-center gap-2 text-indigo-400 hover:text-blue-400">
          <Info size={18} /> About
        </Link>
      </li>
      <li>
        <Link to="/Resume" className="flex items-center gap-2 text-indigo-400 hover:text-blue-400">
          <GraduationCap size={18} /> Education
        </Link>
      </li>
      <li>
        <Link to="/Portfolio" className="flex items-center gap-2 text-indigo-400 hover:text-blue-400">
          <Folder size={18} /> Portfolio
        </Link>
      </li>
      <li>
        <Link to="/Blog" className="flex items-center gap-2 text-indigo-400 hover:text-blue-400">
          <PenTool size={18} /> Blog
        </Link>
      </li>
      <li>
        <Link to="/contact" className="flex items-center gap-2 text-indigo-400 hover:text-blue-400">
          <PhoneCall size={18} /> Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xlshadow-md px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-indigo-300 lg:hidden">
            <Menu size={24} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-[#2c2c3a] rounded-box z-[1]">
            {nav}
          </ul>
        </div>
        <Link to="/about" className="text-2xl font-bold text-blue-400 ml-2">ABDULLAH</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {nav}
        </ul>
      </div>

      
    </div>
    
  );
}

export default Navbar;
