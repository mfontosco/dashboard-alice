
import { IoCloseCircleOutline } from "react-icons/io5";
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';


const AddCategory = () => {
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
        <div className='w-full h-full '>
            <form className='relative h-full ' onSubmit={handleSubmit(submitHandler)}>
                <div className='flex flex-col  w-full px-8 gap-4'>

                    <div className='w-full flex flex-col'>
                        <label>Category Name</label>
                        <input {...register("name")} type='text' placeholder='Type category name' className='bg-gray-300 py-2 px-2' />
                    </div>
                    <div className='w-full flex flex-col md:flex md:flex-row gap-4 items-center'>
                    <div className='w-full md:w-[50%] flex flex-col '>
                        <label>Sub-Category Name</label>
                        <input {...register("sub_category")} type='text' placeholder='Type sub-category name' className='px-2 w-full mt-2 bg-gray-300 py-2' />
                    </div>
                    <div className='md:w-[50%] md:gap-4 flex flex-col md:flex md:flex-row md:items-center justify-center mt-4 md:mt-8'>
                        <button  className='bg-[#6c6d70] py-2 px-2 rounded-sm text-white md:w-auto text-nowrap
                        '> + Add to Category</button>
                        <p className="md:w-[50%] text-xs">Please note: You must add a sub-category, the category will not be published</p>
                    </div>
                    </div>

                    <div className='flex  mt-8 md:w-[50%] gap-4'>
                        <button className='bg-[#ffbfd1]  py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline  />Tops</button>
                        <button className='bg-black py-1 px-4 rounded-sm text-white flex items-center gap-2'><IoCloseCircleOutline />Sale</button>
                    </div>
                </div>
                <div className="w-full absolute right-0 bottom-5 left- flex justify-center items-center flex-col">
                <button type='submit' className='bg-[#6ba466] flex justify-center py-2 px-2 rounded-sm text-white w-56'>{isSubmitting? "loading..":"Publish Category"}</button>
                {errors.root && <div className='flex justify-center w-full gap-2 text-red-500'>{errors.root.message}</div>}
                </div>
            </form>
        </div>
    );
}

export default AddCategory;
