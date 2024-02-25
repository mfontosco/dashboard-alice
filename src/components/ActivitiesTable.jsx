import React from 'react';
import { IoMdFunnel } from 'react-icons/io';
const ActivitiesTable = () => {
  return (
    <div className="w-full  md:w-[80%]  mb-4 flex flex-col rounded-md bg-white pt-6 px-3">
      <h2 className='text-center text-xl py-2 mb-2'> Activities</h2>
      <div className="overflow-x-auto rounded border-b border-gray-200 max-w-full">
        <table className="min-w-full bg-white">
          <thead className=" text-black border">
            <tr>
            <th className=" text-left py-3 px-4 font-semibold text-sm ">
              <div className='flex justify-between items-center'>
              <span>Date</span><IoMdFunnel />
              </div>
            </th>
               <th className=" text-left py-3 px-4 font-semibold text-sm ">
              <div className='flex justify-between items-center'>
              <span>Time</span><IoMdFunnel />
              </div>
            </th>
            <th className=" text-left py-3 px-4 font-semibold text-sm ">
              <div className='flex justify-between items-center'>
              <span>Staff</span><IoMdFunnel />
              </div>
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              <div className='flex justify-between items-center'>
              <span>Action</span><IoMdFunnel />
              </div>
            </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className=" text-left py-3 px-4  text-sm">Lian</td>
              <td className="text-left py-3 px-4  text-sm">12:00</td>
              <td className="text-left py-3 px-4  text-sm"><a className="hover:text-blue-500 text-nowrap">John Patrick</a></td>
              <td className="text-left py-3 px-4  text-sm"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
            </tr>
            <tr>
              <td className=" text-left py-3 px-4  text-sm">Lian</td>
              <td className="text-left py-3 px-4  text-sm">12:00</td>
              <td className="text-left py-3 px-4  text-sm"><a className="hover:text-blue-500 text-nowrap">John Patrick</a></td>
              <td className="text-left py-3 px-4  text-sm"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
            </tr>
            {/* Add more table rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivitiesTable;
