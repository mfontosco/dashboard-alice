import React from 'react'
import SpecificStaffForm from '../../components/SpecificStaffForm'

const SpecificStaff = () => {
  return (
     <div className='w-full  md:w-[80%]  mb-4 flex flex-col rounded-md bg-white pt-6'>
       <h2 className='text-center mt-4 text-lg mb-4'>jonsmith@mail.com</h2>
       <hr/>
    <SpecificStaffForm/>
    </div>
  )
}

export default SpecificStaff
