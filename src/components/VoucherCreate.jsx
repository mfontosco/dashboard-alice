import React from 'react';
import { useNavigate } from 'react-router-dom';

const VoucherCreate = () => {
    const nav =useNavigate()
  return (
    <div className=''>
      <div>
        <h3 className='text-center text-xl font-medium'>What type of Voucher/Discount do You want to create?</h3>
        <div className='mt-4 flex flex-col md:flex-row gap-4'>
            <button  onClick={()=>nav('/dashboard/product-discount')} className='rounded-md  py-1 px-3 text-white bg-[#939598]'>Product Discount</button>
            <button onClick={()=>nav("/dashboard/sale-discount")} className='rounded-md  py-1 px-3 text-white bg-[#d8585f]'>Sale Discount</button>
            <button onClick={()=>nav('/dashboard/gift-voucher')} className='rounded-md  py-1 px-3 text-white bg-[#231f20]'>Gift Voucher</button>
            <button onClick={()=>nav('/dashboard/add-voucher')} className='rounded-md  py-1 px-3 text-white bg-[#ff95bd]'>Exchange Voucher</button>
        </div>
      </div>
    </div>
  );
}

export default VoucherCreate;
