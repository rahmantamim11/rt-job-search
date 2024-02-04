import React from "react";

const NavBar = () => {
  return (
    <div className="navBar md:flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">RT
          <strong>Job</strong>Search
        </h1>
      </div>
      <div className="menu md:flex sm:mt-2 gap-8">
        <li className="menuList sm: mt-2 text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menuList sm: mt-2 text-[#6f6f6f] hover:text-blueColor">Companies</li>
        <li className="menuList sm: mt-2 text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menuList sm: mt-2 text-[#6f6f6f] hover:text-blueColor">Contact</li>
        <li className="menuList sm: mt-2 text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList sm: mt-2 text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList sm: mt-2 text-[#6f6f6f] hover:text-blueColor">Register</li>
      </div>
    </div>
  );
};

export default NavBar;
