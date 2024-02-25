import React from 'react';
import AddProduct from '../../components/AddProduct';

const AddNewProductScreen = () => {
  return (
    <div className='w-full md:w-[80%]  rounded-md bg-white py-6'>
      
        <h2 className='text-center mt-4 text-xl mb-4 font-bold'>Add new product</h2>
      <div className='h-auto'>

      <AddProduct/>
      </div>
    </div>
  );
}

export default AddNewProductScreen;
