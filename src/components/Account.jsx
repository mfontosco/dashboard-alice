import {useEffect} from 'react'
import MyApplication from './MyApplication'
import { MdOutlineEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getStaffAction } from '../redux/Features/dashboard/staff/staffSlice';

const Account = () => {

  const nav = useNavigate()
  const dispatch = useDispatch()
  const {isLoading,isSuccess,isError,message,staffs}= useSelector((state)=>state.getStaffs)
  const user = staffs?.staffs[0]
  
  // Get the Staff Information when the component is mounted
  useEffect(()=>{
    if(user===undefined){
      dispatch(getStaffAction())
        .then((res)=>{
          console.log('Getting User Info', res);
        })
        .catch((err)=>{
          console.error("Failed to fetch data", err)
        });
    }else{
      return;
    }
    
  },[dispatch])

  
  // console.log("staffs",staffs)
  // console.log("isError==========",message)
  // useEffect(()=>{
  //  dispatch(getStaffAction())
  // },[dispatch])
  return (
    <div className='w-[80%] flex flex-col items-center rounded md'>

    <div   className='flex flex-col  bg-white w-full rounded-md py-4'>
        <div onClick={()=>nav(`/dashboard/account/choose-colors`)} className='cursor-pointer h-24 w-24 rounded-full mx-auto bg-[#ffcfeb] border border-[#ff70c4] flex items-center justify-center'>
            <h2 className='text-[#ff70c4] text-2xl'>D</h2>
        </div>
        <p className='mb-2 text-center'>{user?.role}</p>
        <p className='flex justify-end items-center mb-2 text-gray-200 cursor-pointer' onClick={()=>nav("/dashboard/account/edit")}><MdOutlineEdit/> edit display name</p>
            <hr/>
            <p className='text-center'><span className='font-bold text-md mt-2 '>Username:</span> {user?.email}</p>
            <p className='mt-2 text-center'><span className='font-bold text-md mt-2 text-center'>Role:</span>{user?.role}</p>
    </div>
    <MyApplication/>
    </div>
  )
}

export default Account
