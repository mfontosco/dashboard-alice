import React from 'react';
import { FaBars } from 'react-icons/fa6';
const NavBar = ({onClick}) => {
  return (
    <div className='h-12 w-full flex justify-end items-center  bg-gray-200 shadow-md'>
      <FaBars className='mr-3' onClick={onClick}/>
    </div>
  );
}

export default NavBar;
