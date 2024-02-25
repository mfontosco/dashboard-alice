import React from 'react';
import SquareColor from './SquareColor';
import { FaRegEyeSlash } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import Switcher1 from './Switcher';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useForm } from 'react-hook-form';


const EditProduct = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState:{errors,isSubmitting}
    } =useForm({
        defaultValues:{

        }
    })
    
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
        <div className='py-6 w-full px-6'>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className='flex flex-col md:flex md:flex-row gap-4 mb-4'>
                    <div className='w-full md:w-[50%] flex flex-col '>
                        <label>Product Code</label>
                        <input type='number' {...register("product_code")} placeholder='Type product code' className='w-full bg-gray-300 py-2 px-2' />
                    </div>
                    <div className='w-full md:w-[50%] flex flex-col'>
                        <label>Product Name</label>
                        <input type='text' {...register("product_name")} placeholder='Type product name' className='bg-gray-300 py-2 px-2' />
                    </div>
                </div>
                <div>
                    <div className='w-full  flex flex-col mb-4'>
                        <label className='flex w-full justify-between'>Only visible to authorized personnel <FaRegEyeSlash /></label>
                        <input type='password' {...register("password")} placeholder='******' className='bg-gray-300 py-2 px-2 ' />
                    </div>
                    <div className='w-full  flex flex-col '>
                        <input type='file' placeholder='upload 2 to 4 images' className='bg-gray-200 mt-4 py-2 px-2 placeholder:text-center' />
                    </div>
                    <div className='mt-4  flex justify-center md:justify-start gap-4'>
                        <div className='w-36 h-48 bg-gray-200'>

                        </div>
                        <div className='w-36 h-48 bg-gray-200'>

                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex md:flex-row md:justify-end gap-4 mt-4'>
                    <select
                        {...register("brand_name")}
                        className='shadow bg-pink-200 appearance-none border h-12 rounded w-full md:w-[50%] py-2 px-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        required
                    >
                        <option value=''>Select Brand Name</option>
                        <option value=''>Alice and Tiwa Basics</option>
                    </select>
                    <div className='w-full md:w-[50%] flex items-center flex-col'>
                        <div className='flex gap-4 mb-4 justify-center '>
                            <SquareColor boxColor={"red"} />
                            <SquareColor boxColor={"black"} />
                            <SquareColor boxColor={"white"} />
                            <SquareColor boxColor={"Beige"} />
                        </div>
                        <div className='flex mb-4 gap-4 justify-center'>
                            <SquareColor boxColor={"Brown"} />
                            <SquareColor boxColor={"Teal"} />
                            <SquareColor boxColor={"Orange"} />
                            <SquareColor boxColor={"Yellow"} />
                        </div>
                        <div className='flex gap-4 mb-4 justify-center'>
                            <SquareColor boxColor={"Green"} />
                            <SquareColor boxColor={"Blue"} />
                            <SquareColor boxColor={"Purple"} />
                            <SquareColor boxColor={"Pink"} />
                        </div>
                        <div className='flex gap-4 mb-4 justify-center'>
                            <SquareColor boxColor={"Navy"} />
                            <SquareColor boxColor={"Gold"} />
                            <SquareColor boxColor={"Silver"} />
                            <SquareColor boxColor={"Bronze"} />
                        </div>
                        <div className='flex gap-4 mb-4 justify-center'>
                            <SquareColor boxColor={"Grey"} />
                            <SquareColor boxColor={"Multi"} />
                            <SquareColor boxColor={"Clear"} />
                            <SquareColor boxColor={"N/A"} />
                        </div>
                        <div className='flex justify-center'>
                        <p className='text-xs w-[80%] pl-4'>Please note:You can only select one color per product,if the product has multiple color,you need to Edit a new product with same product code</p>
                        </div>
                    </div>
                </div>
                <div className='w-full  flex flex-col'>
                    <label className='flex w-full justify-between'>Description</label>
                    <input type='text' {...register("product_description")} placeholder='Type product descritpion' className='bg-gray-300 py-2 px-2 ' />
                </div>
                <div className='w-full  flex flex-col'>
                    <label className='flex w-full justify-between'>Care</label>
                    <input type='text' {...register("care_description")} placeholder='Type care description' className='bg-gray-300 py-2 px-2 ' />
                </div>
                <div className='w-full  flex flex-col'>
                    <label className='flex w-full justify-between'>Composition</label>
                    <input type='text' {...register("composition_description")} placeholder='Type Composition description' className='bg-gray-300 py-2 px-2 ' />
                </div>
                <div className='w-full  flex flex-col'>
                    <label className='flex w-full justify-between'>Fit</label>
                    <input type='text' {...register("fit")} placeholder='******' className='bg-gray-300 py-2 px-2 ' />
                </div>
                <div className='w-full  flex flex-col md:flex md:items-start md:flex-row gap-4 mt-4 '>
                    <select
                        {...register("size")}
                        className='shadow mt-2 py-4 bg-pink-200 appearance-none border rounded w-full md:w-[50%]  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        required
                    >
                        <option value=''>Choose Size</option>
                        <option value=''>XL</option>
                    </select>
                    <div className='w-full  md:w-[50%] flex flex-col'>
                        <label>Number of items in this size</label>
                        <input type='number' {...register("item_number")} placeholder='Type item number' className='w-full bg-gray-300 py-2 px-2' />
                        <div className=' md:gap-4  flex flex-col mb-4 justify-center mt-8'>
                            <button className='bg-[#6c6d70] py-2 px-2 px-2 rounded-sm text-white md:w-'> + Add to Category</button>
                            <p className="mt-4 text-xs">Please note: if you type in "0",it will automatically show on the website as sold in that size,if all sizes are sold out,the entire items,will be displayed as sold out</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3  md:mt-8'>
                    <button className='bg-[#ffbfd1]  py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline />S-15</button>
                    <button className='bg-[#ffbfd1]  py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline />M-15</button>
                    <button className='bg-[#ffbfd1]  py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline />L-15</button>
                </div>

                <div className='md:w-full  flex flex-col md:flex md:items-start md:flex-row gap-4 mt-4 '>
                    <select
                            {...register("categories")}
                        className='shadow  py-3 bg-pink-200 appearance-none border rounded w-full md:w-[50%]  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        required
                    >
                        <option value=''> Select categories</option>
                        <option value=''>XS</option>
                        <option value=''>S</option>
                        <option value=''>M</option>
                    </select>
                    <button className='bg-[#6c6d70] py-2 px-2 px-2 rounded-sm text-white md:w-[50%]'> + Add to Category</button>
                </div>
                <div className='flex gap-3  mt-4 md:mt-8'>
                    <button className='bg-[#ffbfd1] text-xs py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline />Detty December(edit)</button>
                    <button className='bg-[#ffbfd1] text-xs  py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline />View All (Clothing)</button>
                    
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-4 mb-4 mt-4'>
                    <div className='w-full md:w-3/5 flex flex-col '>
                        <label>Pair with</label>
                        <input type='number' {...register("product_id")} placeholder='Type product ID' className='w-full bg-gray-300 py-2 px-2' />
                    </div>
                    <div className='w-full md:w-2/5 flex flex-col'>
                        <label></label>
                        <button className='bg-[#6c6d70] mt-6 py-2 px-2  rounded-sm text-white '> + Add item</button>
                    </div>
                </div>
                <div className='flex gap-3  md:mt-8'>
                    <button className='bg-[#ffbfd1] text-xs  py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline />ATH9091(Red)</button>
                    <button className='bg-[#ffbfd1] text-xs  py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline />ATH9061 (Bronze)</button>
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-4 mb-4 mt-4'>
                    <div className='w-full md:w-3/5 flex flex-col '>
                        <label>Keywords</label>
                        <input type='number' {...register("keyword")} placeholder='Type Keyword' className='w-full bg-gray-300 py-2 px-2' />
                    </div>
                    <div className='w-full md:w-2/5 flex flex-col'>
                        <label></label>
                        <button className='bg-[#6c6d70] mt-6 py-2 px-2 px-2 rounded-sm text-white '> + Add keyword</button>
                    </div>
                </div>
                <button className='bg-[#d1d5db] mb-4  py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline />Short sleeve</button>
                <div className='flex flex-col md:flex-row items-center gap-2 mt-4'>
                    <div className='flex gap-2 md:flex-col'>
                    <label>Show low stock message</label>
                       <Switcher1/>
                    </div>
                    <p className='text-xs'>Please note:sizes will be displayed as low stock when there are 2 or less items in that size</p>
                </div>
                <div className="w-full mt-4 flex-col  md:flex-row items-center mx-auto  md:w-full justify-center flex gap-4">
                <button className='bg-[#d77574] w-full  py-2 px-2 rounded-sm text-white '>Delete Product</button>
                <button className='bg-[#6c6d70] w-full  py-2 px-2  rounded-sm text-white '>Save Changes</button>
                <button type='submit' className='bg-[#6ba466] w-full py-2  px-2 rounded-sm text-white'>Publish Changes</button>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;
