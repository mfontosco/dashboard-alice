import React from 'react';
import AddNewGiftVoucher from  '../../components/AddNewGiftVoucher'

const AddNewGiftVoucherScreen = () => {
  return (
    <div className='w-full px-4  md:w-[80%]  py-6 mb-4 flex flex-col rounded-md bg-white'>
      <h1 className='text-center mb-4 mt-4 text-lg'>Add New Gift Voucher</h1>
      <hr/>
      <div className='mt-4'>
      <AddNewGiftVoucher/>
      </div>
    </div>
  );
}

export default AddNewGiftVoucherScreen;
