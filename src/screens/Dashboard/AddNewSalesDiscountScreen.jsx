import React from 'react';
import AddNewSalesDiscount from '../../components/AddNewSale';


const AddNewSaleDiscountScreen = () => {
  return (
     <div className='w-full px-4  md:w-[80%]  py-6 mb-4 flex flex-col rounded-md bg-white'>
    <h1 className='text-center mb-4 mt-4 text-lg'>Add New Sale Discount</h1>
    <hr/>
    <div className='mt-4'>
   <AddNewSalesDiscount/>
    </div>
  </div>
  );
}

export default AddNewSaleDiscountScreen;
