import React from 'react';
import AddBrand from '../../components/AddBrand';

const AddBrandScreen = () => {
  return (
    <div className='w-full px-4  md:w-[80%]  mb-4 flex flex-col rounded-md bg-white'>
      <h2 className='mt-10 text-lg font-bold text-center'>Add new Brand</h2>
      <AddBrand/>
    </div>
  );
}

export default AddBrandScreen;
