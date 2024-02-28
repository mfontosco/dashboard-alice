import {useState} from "react"

const AddBrand = () => {
  const [payload,setPayload] = useState({
    name:""
  })
  const changeHandler =(e)=>{
    const {name,value} = e.target
    setPayload({...payload, [name]: value})
  } 
  const submitHandler = async () => {
    try {
     alert("====>")
    } catch (error) {
     console.log("error", error)
    }
  };

  return (
    <div className=''>
      <form className='w-full' onSubmit={submitHandler}>
        <div className='flex flex-col  w-full px-8 gap-4'>
          <div className='w-full flex flex-col'>
            <label>Brand Name</label>
            <input
              
              id='name'
              type='text'
              onChange={changeHandler}
              placeholder='Type category name'
              className='bg-gray-300 py-2 px-2'
            />
          </div>
          {errors.name && <div className='flex justify-center w-full gap-2'>{errors.name.message}</div>}

          <div className='flex justify-center mt-8'>
            <button type='submit' disabled={isSubmitting} className='bg-black py-2 px-2 rounded-sm text-white'>
              {isSubmitting ? 'loading...' : 'Add new brand'}
            </button>
          </div>
          {errors.root && <div className='flex justify-center w-full gap-2 text-red-500'>{errors.root.message}</div>}
        </div>
      </form>
    </div>
  );
};

export default AddBrand;
