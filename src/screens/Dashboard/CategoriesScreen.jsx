
import { FaPlus } from "react-icons/fa6";

import { PiCoatHangerThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import Category from '../../components/Category';
import { BsTag } from "react-icons/bs";

const CategoriesScreen = () => {
  const nav =useNavigate()
  return (
    <div className='w-full '>
     <div className=' flex  justify-center bg-white mb-4 gap-4 w-64  border mx-auto'>
    
     <button className='px-4 py-3 border ' onClick={()=>nav('/dashboard/category-list')}>
     <BsTag size="40px" className='text-gray-400' />
     </button>
     <button className='px-4 py-3 ' onClick={()=>nav('/dashboard/product-list')}>
     <PiCoatHangerThin className='text-gray-400' size="40px"/>
     </button>
    <button className='px-4 py-3' onClick={()=>nav( '/dashboard/add-category')}>
    <FaPlus size="40px" className='text-gray-400'/>
    </button>
     </div>
     <div className='w-full mx-auto  md:w-[80%]  mb-4 flex flex-col rounded-md bg-white pt-6'>
     <h2 className='text-center  text-lg mb-4'>Categories</h2>
      <Category/>
     </div>
    </div>
  );
}

export default CategoriesScreen;
