import React, { useEffect } from 'react'
import CustomersTable from '../../components/CustomersTable'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomerAction } from '../../redux/Features/dashboard/customers/customersSlice'

const CustomersPage = () => {
  const dispatch = useDispatch()
  const {isError,isSuccess,message,isLoading,customers} = useSelector((state)=>state.getCustomers)
  console.log("customers",customers)
  useEffect(()=>{
      dispatch(getCustomerAction())
  },[dispatch])
  return (
    <div className='w-full  md:w-[80%]  mb-4 flex flex-col rounded-md bg-white'>
    <h3 className="text-center pt-4 text-md">Customers</h3>
      <div className='overflow-x-auto'>
      <CustomersTable customers={customers} isLoading={isLoading}/>
      </div>
    </div>
  )
}

export default CustomersPage
