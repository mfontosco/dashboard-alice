import React from 'react';
import SpecificCategoryPage from '../../components/SpecificCategoryPage';

const SpecificCategoryScreen = () => {
  return (
    <div className='w-full px-4 py-4 md:w-[80%]  mb-4 flex flex-col rounded-md bg-white'>
    <h2 className="text-center text-2xl mb-4">Clothing</h2> 
   <SpecificCategoryPage/>
 </div>
  );
}

export default SpecificCategoryScreen;
