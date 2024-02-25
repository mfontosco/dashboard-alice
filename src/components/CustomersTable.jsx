import React from 'react'
import { IoMdFunnel } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
const CustomersTable = ({customers,isLoading}) => {
  const nav = useNavigate()
  console.log("customers",customers)
  const customerArray = customers?.customers
  return (
    <table className="min-w-full bg-white">
      <thead className=" text-black">
        
        <tr>
            <th className=" text-left py-3 px-4 font-semibold text-sm ">
              <div className='flex justify-between items-center'>
              <span>Name</span><IoMdFunnel />
              </div>
            </th>
               <th className=" text-left py-3 px-4 font-semibold text-sm ">
              <div className='flex justify-between items-center'>
              <span>Email</span><IoMdFunnel />
              </div>
            </th>
            <th className=" text-left py-3 px-4 font-semibold text-sm ">
              <div className='flex justify-between items-center'>
              <span>Tel</span><IoMdFunnel />
              </div>
            </th>
            <th className=" text-left py-3 px-4 font-semibold text-sm ">
              <div className='flex justify-between items-center'>
              <span>Status</span><IoMdFunnel />
              </div>
            </th>
            <th className=" text-left py-3 px-4 font-semibold text-sm ">
              <div className='flex justify-between items-center'>
              <span>Last Active</span><IoMdFunnel />
              </div>
            </th>
            </tr>
     
      </thead>
    <tbody className="text-gray-700">
        {/* Show a message or spinner when staffs data is loading or not available */}
        { isLoading && (
            <tr>
              <td colSpan="3" className="text-center py-3">Loading...</td>
            </tr>
          )}
          { customerArray?.map((customer) => (
            <tr key={customer.id}>
              <td className="text-left text-sm py-3 px-4">{`${customer?.first_name} ${customer?.last_name} `}</td>
              <td className="text-left text-sm py-3 px-4">{customer?.email}</td>
              <td className="text-left text-sm py-3 px-4">{customer?.phone}</td>
              <td className="text-left text-sm py-3 px-4">{customer?.status && "active"}</td>
              <td className="text-left text-sm py-3 px-4">{new Date(customer?.last_login).toDateString()}</td>
            </tr>
          ))}
     
      
    </tbody>
    </table>
  )
}

export default CustomersTable
