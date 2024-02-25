import React from 'react';
import AddProductDiscount from '../../components/AddProductDiscount';

const AddNewProductDiscountScreen = () => {
  return (
     <div className='w-full px-4  md:w-[80%]  py-6 mb-4 flex flex-col rounded-md bg-white'>
    <h1 className='text-center mb-4 mt-4 text-lg'>Add New Product Discount</h1>
    <hr/>
    <div className='mt-4'>
    <AddProductDiscount/>
    </div>
  </div>
  );
}

export default AddNewProductDiscountScreen;
