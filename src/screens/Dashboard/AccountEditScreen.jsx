
import MyApplication from '../../components/MyApplication'
import { useState } from 'react'

const AccountEditPage = () => {
const [name,setName] = useState()
const handleChange =(e)=>{

  const {name,value} = e.target
  setName((prevState)=>({...prevState,[name]:value}))
}
const handleSubmit =(e)=>{
  e.preventDefault()
alert("it's working")
}
  return (
    <div className='md:w-[80%] w-full px-4 flex flex-col items-center rounded md'>

    <div className='flex flex-col  bg-white w-full rounded-md py-4'>
        <div className='h-24 w-24 rounded-full mx-auto bg-[#ffcfeb] border border-[#ff70c4] flex items-center justify-center'>
            <h2 className='text-[#ff70c4] text-2xl'>D</h2>
        </div>
        <section className='w-full flex flex-col justify-center items-center'>
        <h2 className='mb-2'>Display Name</h2>
       <form onSubmit={handleSubmit}>
       <div>
      <input className="opacity-50 bg-gray-300 text-black " onChange={handleChange} value={name} type='text' />
       </div>
       <button className='mb-10 text-xs mt-2 bg-black text-white rounded-sm py-1 px-2'>Save Display Name</button>
       </form>
       <hr/>
       <div className='border py-2 w-full flex justify-center items-center '>
            <p className='text-sm flex justify-center items-center'><span className='text-lg'>Username:</span>ayeniisaac1on1@gmail.com</p>
            
        </div>
        <hr/>
        <div><p>Role:</p></div>
      </section>
            <p className='text-center'><span className='font-bold text-md mt-2 '>Username:</span> Director@aliceandtiwa.com</p>
            <p className='mt-2 text-center'><span className='font-bold text-md mt-2 text-center'>Role:</span> Administrator</p>
    </div>
    {/* <div className='flex flex-col  bg-white w-full rounded-md mt-4 py-4'>
        
        <h3 className='mb-4 text-xl text-center'>My Application</h3>
        <p className='text-center mb-2 border border-gray-100'>Team</p>
        <p className='text-center'> Outlook</p>
       
    </div> */}
    <MyApplication/>
    </div>
  )
}

export default AccountEditPage
