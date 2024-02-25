import React from 'react'
import CreateStaffForm from '../../components/CreateStaffForm'

const Staff = () => {
  return (
    <div className='w-full  md:w-[80%]  mb-4 flex flex-col rounded-md bg-white pt-6'>
       <h2 className='text-center mt-4 text-lg mb-4'>Add new staff member</h2>
       <hr/>
       <CreateStaffForm/>
    </div>
  )
}

export default Staff
