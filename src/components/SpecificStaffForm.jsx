import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SpecificStaffForm = () => {
  const nav = useNavigate()
  const {state} = useLocation();
  const [payload,setPayload] =useState({
    email:state.email,
    password:state.password,
    display_name:state.display_name,
    username:state.display_name,
    staff_role:state.staff_role

  })
  
  const handleChange = (e) => {
    const { value, name } = e.target;
    setPayload((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const deleteHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      alert("staff deleted successfully")
      // await dispatch(createStaffAction(payload));
     nav("/dashboard/staff-list")
    } catch (error) {
      console.log(error);
    }
  };
  const saveChangesHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // await dispatch(createStaffAction(payload));
     nav("/dashboard/staff-list")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='w-full mt-8'>
      <form className='w-full'>
         <div className='flex flex-col md:flex md:flex-row w-full px-8 gap-4'>
          <div className='md:w-[50%]'>
            <div className='w-full flex flex-col'>
              <label>Display Name</label>
              <input type='text'
                id="display_name"
                value={payload.display_name}
                onChange={handleChange}
                name="display_name"
                placeholder='Type display name' className='bg-gray-300 py-2 px-2' />
            </div>
            <div className=' flex flex-col mt-8'>
              <label>Password</label>
              <input type='password'
                id="password"
                value={payload.password}
                onChange={handleChange}
                name="password"


                placeholder='Type password' className='bg-gray-300 py-2 px-2' />
            </div>
            <div className=' flex flex-col md:flex md:flex-row mt-8 gap-2'>
              <label className='text-nowrap'>Staff Role</label>
              <select
                id="staff_role"
                value={payload.staff_role}
                onChange={handleChange}
                name="staff_role"

                className='shadow bg-pink-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              >
                <option value=''>Select Staff Role</option>
                <option value='Director'>Director</option>
                <option value='Sales'>Sales Manager</option>
                <option value='Sales'>Sales Supervisor</option>
                <option value='Sales Advisor'>Sales Advisor</option>
              </select>
            </div>
          </div>
          <div className='md:w-[50%]'>
            <div className=' flex flex-col'>
              <label>Username</label>
              <input type='text'
                id="username"
                value={payload.username}
                onChange={handleChange}
                name="username" placeholder='Type Username' className='bg-gray-300 py-2 px-2' />
            </div>
            <div className=' flex flex-col mt-8'>
              <label>Re-type Password</label>
              <input type='password'
                id="retype_password"
                value={payload.retype_password}
                onChange={handleChange}
                name="retype_password"

                placeholder='Re-type password'
                className='bg-gray-300 py-2 px-2' />
            </div>
          </div>
          <div className='w-full flex flex-col'>
              <label>Email</label>
              <input onChange={handleChange} type='email'
                 value={payload.email}
                name="email"
                placeholder='Type email' className='bg-gray-300 py-2 px-2' />
            </div>
          </div>
        <div className='flex gap-4  md:gap-20 justify-center mt-8 px-10'>
        <button className='bg-[#dc6c6b]  py-2 px-3 rounded-sm text-white' type='button' onClick={deleteHandler}>Delete Account</button>
                <button className='bg-black  py-2 px-3 rounded-sm text-white' type='button' onClick={saveChangesHandler}>Save changes</button>
            </div>
      </form>
    </div>
  )
}

export default SpecificStaffForm
