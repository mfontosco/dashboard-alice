import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import Switcher1 from './Switcher';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useForm } from 'react-hook-form';

const AddNewSalesDiscount = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState:{errors,isSubmitting}
    } =useForm()
    
    const submitHandler=async(data)=>{
       
        try {
            await new Promise((resolve)=>setTimeout(resolve,1000))
            console.log(data)
            throw new Error()
        } catch (error) {
            setError(
                "root",{
                    message:"an unexpected error occurred"
                }
            )
        }
    }
  return (
    <div>
      <form className='' onSubmit={handleSubmit(submitHandler)}>
      <div className='flex flex-col md:flex md:flex-row gap-4 mb-4'>
                    <div className='w-full md:w-[50%] flex flex-col '>
                        <label>Sale Name</label>
                        <input type='text' placeholder='Type sale name' {...register("sale_name")} className='w-full bg-gray-300 py-2 px-2' />
                    </div>
                    <div className='w-full md:w-[50%] flex flex-col'>
                        <label>Discount</label>
                        <input type='text' {...register("discount")} placeholder='Type discount percentage' className='bg-gray-300 py-2 px-2' />
                    </div>
                </div>
                <div className='flex gap-4 md:flex-row flex-col'>
                    <div className='w-full  md:w-1/2   flex flex-col md:mb-4'>
                        <label className='flex w-full justify-between'>Apply Discount to the following</label>
                        <input type='text' placeholder='Type product ID' {...register("product_id")} className='bg-gray-300 py-2 px-2' />
                    </div>
                    <div className='w-full  md:w-1/2   flex flex-col '>
                        <p className='text-xs md:mt-5 mb-2'>Please note:if you type in 'ALL',this code will be apply to all products in our website</p>
                    </div>
                </div>
                <div className='flex gap-3  md:mt-3'>
                    <button className='bg-[#ffbfd1] text-xs  py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline />ATH9091(Red)</button>
                    <button className='bg-[#ffbfd1] text-xs  py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline />ATH9061 (Bronze)</button>
                </div>
                <div className='mt-4 flex md:items-center flex-col md:gap-8 md:flex-row '>
                    <div className=''>
                    <h3 className='mb-2 font-bold'>Exchange Voucher Status</h3>
                    <Switcher1 switchLeftLabel={"INACTIVE"} switchRightLabel={"ACTIVE"} />
                    </div>
                    <p className='text-xs md:mt-6'>only active  vouchers can be used by customers.</p>
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-4 mb-4 mt-4'>
                    <div className='w-full md:w-[50%] flex flex-col '>
                        <label>Start Date</label>
                        <input type='date' {...register("start_date")} className='w-full bg-gray-300 py-2 px-2' />
                    </div>
                    <div className='w-full md:w-[50%] flex flex-col'>
                        <label>Start Time</label>
                        <input type='time' value='00:00' {...register("start_time")} className='bg-gray-300 py-2 w-36 px-2' />
                    </div>
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-4 mb-4 mt-4'>
                    <div className='w-full md:w-[50%] flex flex-col '>
                        <label>End Date</label>
                        <input type='date' {...register("end_date")} className='w-full bg-gray-300 py-2 px-2' />
                    </div>
                    <div className='w-full md:w-[50%] flex flex-col'>
                        <label>End Time</label>
                        <input type='time' value='00:00' {...register("end_time")} className='bg-gray-300 py-2 w-36 px-2' />
                    </div>
                </div>
                <div className=' flex justify-center mt-4'>
                <button type='submit' className='bg-[#6ba466] text-sm py-2 px-4 rounded-sm text-white'>Run at Start Time</button>
                </div>
      </form>
    </div>
  );
}

export default AddNewSalesDiscount;
