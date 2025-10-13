import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header px-[30rem] py-[1rem]'>
      <NavLink to='/' >
        <img src={logo} alt='logo' width='48' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"} 
        
        // Delete the line below to make the link visible
        style={{display: "none"}}>
          
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
