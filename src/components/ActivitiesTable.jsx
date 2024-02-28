import React, { useEffect } from 'react';
import { IoMdFunnel } from 'react-icons/io';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getActivitiesAction } from '../redux/Features/dashboard/activities/activitiesSlice';

const ActivitiesTable = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const {isLoading,isError,activities,isSuccess} =useSelector((state)=>state.getActivities)
  console.log("activities",activities)
  const activitiesArray = activities?.activities
  console.log("activitiesArray",activitiesArray)
  useEffect(()=>{
    dispatch(getActivitiesAction())
  },[dispatch])
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
              <div className='flex justify-between gap-4 items-center'>
              <span>Time</span><IoMdFunnel />
              </div>
            </th>
            <th className=" text-left py-3 px-4 font-semibold text-sm ">
              <div className='flex justify-between gap-4 items-center'>
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
          {
            activitiesArray?.slice(0,20).map((activity)=>{
            return(
               <tr key={activity.id}>
              <td className=" text-left py-3 px-4  text-sm text-nowrap">{new Date(activity.timestamp).toDateString()}</td>
              <td className="text-left py-3 px-4  text-sm">12:00</td>
              <td className="text-left py-3 px-4  text-sm">{activity.user}</td>
              <td className="text-left py-3 px-4  text-sm">{activity.activity}</td>
            </tr>)
            })
          }
          
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivitiesTable;
