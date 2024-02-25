import React from 'react'
import StaffTable from '../../components/StaffTable'
import { FaPlus } from "react-icons/fa6";
import ProductTable from '../../components/ProductTable';
import { useNavigate } from 'react-router-dom';
import { TfiMenuAlt } from "react-icons/tfi";
import { PiCoatHangerThin } from "react-icons/pi";
import { BsTag } from "react-icons/bs";


const ProductList = () => {
  const nav =useNavigate()
  return (
    <div className='w-full px-4  md:w-[80%]  mb-4 flex flex-col rounded-md bg-[#f7f7f8]'>
    <div className=' flex  justify-center bg-white gap-4 w-64  border mx-auto'>
     <button className='px-4 py-3 ' onClick={()=>nav('/dashboard/brand-list')}>
     <BsTag className='text-gray-400' size="40px"/>
     </button>
     <button className='px-4 py-3 border ' onClick={()=>nav('/dashboard/category-list')}>
     <TfiMenuAlt size="40px" className='text-gray-400' />
     </button>
    <button className='px-4 py-3' onClick={()=>nav( '/dashboard/add-product')}>
    <FaPlus size="40px" className='text-gray-400'/>
    </button>
     </div>
   <div className='flex justify-center items-center bg-white gap-4 mt-10'>
   <h3 className="text-center pt-4 text-md w-4/5 text-2xl">Product</h3>
   </div>
      <div className='overflow-x-auto '>
      <ProductTable/>
      </div>
    </div>
  )
}

export default ProductList
