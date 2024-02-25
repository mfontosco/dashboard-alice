import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";

const SpecificCategoryPage = () => {
    return (
        <div className='w-full h-full'>
            <form className='relative h-full '>
                <div className='flex flex-col  w-full px-8 gap-4'>
                    <div className='w-full flex flex-col md:flex md:flex-row gap-4 items-center'>
                        <div className='w-full md:w-[50%] justify--center flex flex-col '>
                            <label className='mb-2'>Sub-Category Name</label>
                            <input type='text' placeholder='Type sub-category name' className='w-full bg-gray-300 py-2' />
                        </div>
                        <div className='md:w-[50%] md:gap-4 flex flex-col md:flex md:flex-row md:items-center justify-center md:mt-8'>
                            <button className='bg-[#6c6d70] py-2 px-2 rounded-sm text-white md:w-'> + Add to Category</button>
                            <p className="md:w-[50%] text-xs mt-3">Please note: You must add a sub-category, the category will not be published</p>
                        </div>
                    </div>

                    <div className='flex  md:mt-8 md:w-[50%]'>
                        <button className='bg-[#ffbfd1]  py-1 px-4 rounded-sm text-black flex items-center gap-2'><IoCloseCircleOutline />Tops</button>

                    </div>
                </div>
                <div className='w-full flex justify-center'>

                    <div className="w-full flex flex-col md:flex-row  md:w-[60%] gap-3 absolute mx-auto  bottom-0   justify-between">
                        <button className='bg-[#dc6c6b] py-1 px-4 rounded-sm text-white flex items-center gap-2'>Delete Category</button>
                        <button className='bg-[#6ba466] py-2 px-2 rounded-sm text-white'>Publish Category</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SpecificCategoryPage;
