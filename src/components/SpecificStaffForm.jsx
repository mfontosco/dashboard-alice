import React from 'react'

const SpecificStaffForm = () => {
  return (
    <div className='w-full mt-8'>
      <form className='w-full'>
        <div className='flex flex-col w-full px-8 md:gap-4'>
            <div className=''>
            <div className='w-full flex flex-col'>
                <label>Display Name</label>
                <input type='text' placeholder='Type display name' className='bg-gray-300 py-2'/>
            </div>
           
            </div>
            <div className=''>
            <div className=' flex flex-col mt-4 md:mt-8'>
                <label>Password</label>
                <input type='password' placeholder='Type password' className='bg-gray-300 py-2'/>
            </div>
            <div className=' flex flex-col mt-4 md:mt-8'>
                <label>Re-type Password</label>
                <input type='text' placeholder='Re-type password' className='bg-gray-300 py-2'/>
            </div>
            </div>
           <div>
           <div className=' flex flex-col mt-2 md:mt-8 gap-2'>
                <label className='text-nowrap'>Staff Role</label>
                <select
                className='shadow bg-pink-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              >
                <option value=''>Select Staff Role</option>
                <option value=''>Director</option>
                <option value=''>Sales Manager</option>
                <option value=''>Sales Supervisor</option>
                <option value=''>Sales Advisor</option>
              </select>
            </div>
           </div>
        </div>
        <div className='flex gap-4  md:gap-20 justify-center mt-8 px-10'>
        <button className='bg-[#dc6c6b]  py-2 px-3 rounded-sm text-white'>Delete Account</button>
                <button className='bg-black  py-2 px-3 rounded-sm text-white'>Save changes</button>
            </div>
      </form>
    </div>
  )
}

export default SpecificStaffForm
