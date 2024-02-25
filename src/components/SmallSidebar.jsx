import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const SmallSideBar = () => {
  return (
    <div className='bg-[#ffbdd6]'>
      <h1 className='text-2xl p-6 font-bold'>*Staff Area</h1>
      <ul className='flex flex-col mt-10 gap-2 text-xl w-full'>
        <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/account'>My Accounts</Link>
        </li>
        <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/activities'>Activities</Link>
        </li>
        <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/orders'>Orders</Link>
        </li>
        <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/customers'>Customers</Link>
        </li>
        <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/analytics'>Analytics</Link>
        </li>
        <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/finances'>Finances</Link>
        </li>
        <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/product-list'>Products</Link>
        </li>
        <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/voucher-create'>Vouchers and Discount</Link>
        </li>
        {/* <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/discounts'>Discounts</Link>
        </li> */}
        <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/banners-automations'>Banners and Automations</Link>
        </li>
        <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/live-chat'>Live Chat</Link>
        </li>
        <li className='text-sm hover:bg-black pl-6 py-4 hover:text-white'>
          <Link to='/staff-list'>Staff</Link>
        </li>
      </ul>
    </div>
  );
}

export default SmallSideBar;
