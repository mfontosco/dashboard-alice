import React from 'react';
import EditProduct from '../../components/EditProduct';

const EditProductScreen = () => {
  return (
    <div className='w-full md:w-[80%]  rounded-md bg-white py-6'>
      
        <h2 className='text-center mt-4 text-xl mb-4 font-bold'>Edit product</h2>
      <div className='h-auto'>

      <EditProduct/>
      </div>
    </div>
  );
}

export default EditProductScreen;
