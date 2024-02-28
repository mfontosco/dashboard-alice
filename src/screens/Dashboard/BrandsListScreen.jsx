import  {useEffect} from 'react';
import BrandTable from '../../components/BrandTable';
import { FaPlus } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiCoatHangerThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from  "react-redux"
import {getBrandAction} from  "../../redux/Features/dashboard/brand/getBrandSlice"

const BrandsListScreen = () => {
  const nav =useNavigate()
  const dispatch = useDispatch()
  const {isLoading,brand,isError} = useSelector((state)=>state.getBrand)

  const brandArray = brand?.brands

  useEffect(()=>{
    dispatch(getBrandAction())
  },[dispatch])
  return (
    <div className='w-full '>
     <div className=' flex  justify-center bg-white mb-4 gap-4 w-64  border mx-auto'>
     <button className='px-4 py-3 ' onClick={()=>nav('/dashboard/product-list')}>
     <PiCoatHangerThin className='text-gray-400' size="40px"/>
     </button>
     <button className='px-4 py-3 border ' onClick={()=>nav('/dashboard/category-list')}>
     <TfiMenuAlt size="40px" className='text-gray-400' />
     </button>
    <button className='px-4 py-3' onClick={()=>nav( '/dashboard/add-brand')}>
    <FaPlus size="40px" className='text-gray-400'/>
    </button>
     </div>
     <div className='w-full mx-auto  md:w-[80%]  mb-4 flex flex-col rounded-md bg-white pt-6'>
     <h2 className='text-center  text-lg mb-4'>Brands</h2>
      <BrandTable brand={brandArray} isError={isError} isLoading={isLoading}/>
     </div>
    </div>
  );
}

export default BrandsListScreen;
