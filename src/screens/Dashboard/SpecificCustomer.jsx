import React from 'react'
import CustomersTable from '../../components/CustomersTable'
import SpecificCustomersTable from '../../components/SpecificCustomersTable'

const SpecificCustomer = () => {
  return (
    <div className='w-full  md:w-[80%]  mb-4 flex flex-col rounded-md bg-white'>
    <h3 className="text-center pt-4 text-lg">jonsmith@mail.com</h3>
      <div className='overflow-x-auto'>
      <SpecificCustomersTable/>
      </div>
    </div>
  )
}

export default SpecificCustomer
