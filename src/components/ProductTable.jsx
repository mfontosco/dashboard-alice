import React from 'react';
import { IoMdFunnel } from 'react-icons/io';

const ProductTable= () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="text-black">
          <tr className='w-full'>
            <th className=" text-left py-3 px-4 font-semibold text-sm ">
              <div className='flex justify-between items-center'>
              <span>Product Code </span><IoMdFunnel />
              </div>
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm mr-2 ">
              <div  className='flex justify-between items-center'><span>Product Name</span> <IoMdFunnel /></div>
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm mr-2 ">
              <div  className='flex justify-between items-center'>
              <span>Brands</span> <IoMdFunnel />
              </div>
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm mr-2 ">
              <div  className='flex justify-between items-center'>
              <span>Colour</span><IoMdFunnel />
              </div>
            </th> 
                <th className="text-left py-3 px-4 font-semibold text-sm mr-2 ">
              <div  className='flex justify-between items-center'>
              <span>Status</span><IoMdFunnel />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="text-left text-sm py-3 px-4">Lian</td>
            <td className="text-left text-sm py-3 px-4">12:00</td>
            <td className="text-left text-sm py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
            <td className="text-left text-sm py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
            <td className="text-left text-sm py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
            
          </tr>
          <tr className="bg-[#ffdeea]">
            <td className="text-left text-sm py-3 px-4">Emma</td>
            <td className="text-left text-sm py-3 px-4">12:00</td>
            <td className="text-left text-sm py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
            <td className="text-left text-sm py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
            <td className="text-left text-sm py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
            
          </tr>
      
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
