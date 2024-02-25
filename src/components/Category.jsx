import React from 'react';
import { IoMdFunnel } from 'react-icons/io';

const Category = () => {
  return (
    <div className=''>
      <table className="min-w-full bg-white">
        <thead className="text-black">
          <tr className='w-full'>
            <th className="text-left py-3 px-4 font-semibold text-sm mr-2 ">
              <div  className='flex justify-between items-center'><span>Category Name</span> <IoMdFunnel /></div>
            </th>
                <th className="text-left py-3 px-4 font-semibold text-sm mr-2 ">
              <div  className='flex justify-between items-center'>
              <span>Date Added</span><IoMdFunnel />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
        <tr className="bg-white">
            <td className="text-left py-3 px-4">Coco Clothes</td>
            <td className="text-left py-3 px-4">12/02/24</td>
          </tr>
          <tr className="bg-[#ffdeea]">
            <td className="text-left py-3 px-4">Alice and Tiwa</td>
            <td className="text-left py-3 px-4">12/02/24</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default Category;
