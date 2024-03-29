
import { IoMdFunnel } from 'react-icons/io';
import { Navigate, useNavigate } from 'react-router-dom';

const StaffTable = ({ staffs ,isLoading,isError,message,isSuccess}) => {
  const nav = useNavigate()
  console.log("staffs============>",staffs)
  const staffsArray = staffs?.staffs;
  const navigate  =(data)=>{
    return nav("/dashboard/staff",{state:data})
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="text-black">
          <tr className='w-full'>
            <th className=" text-left py-3 px-4 font-semibold text-sm">
              <div className='flex justify-between items-center'>
                <span>Display Name</span> <IoMdFunnel />
              </div>
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm mr-2 ">
              <div className='flex justify-between items-center'><span>UserName</span> <IoMdFunnel /></div>
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm mr-2 ">
              <div className='flex justify-between items-center'>
                <span>Role</span> <IoMdFunnel />
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
          { staffsArray?.map((staff) => (
            <tr className='cursor-pointer' key={staff.id} onClick={()=>navigate(staff)}>
              <td className="text-left text-sm py-3 px-4">{staff?.display_name}</td>
              <td className="text-left text-sm py-3 px-4">{staff?.username}</td>
              <td className="text-left text-sm py-3 px-4">{staff?.role}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
