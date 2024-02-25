import {useSelector,useDispatch} from "react-redux"
import createStaffAction from "../redux/Features/dashboard/staff/staffCreateSlice"
import {addStaffSchema} from "./schemas/createStaffSchema"
import { useFormik } from 'formik'


const CreateStaffForm = () => {

  const {staff,isLoading,isError} = useSelector((state)=>state.createStaff)

  const dispatch = useDispatch();

console.log("isError",isError)
console.log("staff-created",staff)
console.log("isLoading",isLoading)
  const {errors,values,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
        display_name:"",
        password:"",
        username:"",
        retype_password:"",
        email:"mfo@gmail.com"
    },
    validationSchema:addStaffSchema,
    onSubmit:(values,actions)=>{
        console.log("created-staff",values)
        dispatch(createStaffAction(values))
        console.log("=================>")
        actions.resetForm()
       
        console.log("submitted")
    },
})

console.log("values====",values)
console.log("error",errors)
  return (
    <div className='w-full mt-8'>
      <form className='w-full' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex md:flex-row w-full px-8 gap-4'>
            <div className='md:w-[50%]'>
            <div className='w-full flex flex-col'>
                <label>Display Name</label>
                <input type='text'
                 id="display_name"
                                    value={values.display_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="display_name"
                                       placeholder='Type display name' className='bg-gray-300 py-2 px-2'/>
            </div>
            <div className=' flex flex-col mt-8'>
                <label>Password</label>
                <input type='password'
                 id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="password"
                                    
                                  
                 placeholder='Type password' className='bg-gray-300 py-2 px-2'/>
            </div>
            <div className=' flex flex-col md:flex md:flex-row mt-8 gap-2'>
                <label className='text-nowrap'>Staff Role</label>
                <select
               value={values.staff_role}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
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
                value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="username" placeholder='Type Username' className='bg-gray-300 py-2 px-2'/>
            </div>
            <div className=' flex flex-col mt-8'>
                <label>Re-type Password</label>
                <input type='password'
                id="retype_password"
                value={values.retype_password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="retype_password"
                 
                placeholder='Re-type password' 
                className='bg-gray-300 py-2 px-2'/>
            </div>
            </div>
           
        </div>
        <div className='flex justify-center mt-8'>
                <button type='submit'  className='bg-black py-2 px-2 cursor-pointer rounded-sm text-white'>Create new staff account</button>
            </div>
            
      </form>
    </div>
  )
}

export default CreateStaffForm
