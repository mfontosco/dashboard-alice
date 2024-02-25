import React from 'react';
import AddCategory from '../../components/AddCategroy';

const AddCategoryScreen = () => {
  return (
    <div className='w-full px-4 py-4 md:w-[80%]  mb-4 flex flex-col rounded-md bg-white'>
       <h2 className="text-center text-2xl mb-4">Add new Category</h2> 
      <AddCategory/>
    </div>
  );
}

export default AddCategoryScreen;
