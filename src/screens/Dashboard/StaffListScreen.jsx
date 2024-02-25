import {useEffect} from 'react'
import StaffTable from '../../components/StaffTable'
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStaffAction } from '../../redux/Features/dashboard/staff/staffSlice';



const StaffList = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const {isLoading,isSuccess,isError,message,staffs}=useSelector((state)=>state.getStaffs)

  console.log("staffs",staffs)
  console.log("isError==========",message)
  useEffect(()=>{
   dispatch(getStaffAction())
  },[dispatch])
  return (
    <div className='w-full px-4  md:w-[80%]  mb-4 flex flex-col rounded-md bg-white'>
   <div className='flex justify-end items-center  gap-4 mt-10'>
   <h3 className="text-center pt-4 text-md w-4/5 text-2xl">Staff</h3>
   <button className='shadow-md rounded-md py-2 px-2'><FaPlus size={24} onClick={()=>nav('/dashboard/add-staff')} /></button>
   </div>
      <div className='overflow-x-auto mt-10'>
      <StaffTable staffs={staffs} isLoading={isLoading}/>
      </div>
    </div>
  )
}

export default StaffList
