
import Colors from '../../components/Colors'
import MyApplication from '../../components/MyApplication'

const ChooseColorScreen = () => {
  return (
   <div className='w-full mx-4 md:w-[80%] '>
    <div className='w-full  pb-4  mb-4 flex flex-col rounded-md bg-white'>
      <div className='flex justify-center mt-4  items-center mb-2'>
      <div className='h-24 w-24 rounded-full mx-auto bg-[#ffcfeb] border-2 border-[#ff70c4] flex items-center justify-center'>
            <h2 className='text-[#ff70c4] text-5xl'>D</h2>
        </div>
      {/* <Colors size={"100px"} bgColor={"#ffcfeb"} borderColor={"#ff7ec9"}/> */}
    </div>
     <div className="flex flex-col  ">
     <h2 className='mb-2 text-center'>Task Assignment Colour</h2>
     <section className='flex flex-wrap justify-center gap-4 w-full  mt-4'>
      <div className='flex justify-center  items-center flex-col'>
      <Colors size={"60px"} bgColor={"#ffcfeb"} borderColor={"#e8e9ea"}/>
      <p className='text-xs'>Pink (Default)</p>
      </div>
      <div className='flex justify-center items-center flex-col'>
      <Colors size={"60px"} bgColor={"#aae0f9"} borderColor={"#62cdf5"}/>
      <p className='text-xs'>Blue </p>
      </div>
      <div className='flex justify-center items-center flex-col'>
      <Colors size={"60px"} bgColor={"#c7e0bf"} borderColor={"#65bd6b"}/>
      <p className='text-xs'>Green</p>
      </div>
      <div className='flex justify-center items-center flex-col'>
      <Colors size={"60px"} bgColor={"#f0baa6"} borderColor={"#e27377"}/>
      <p className='text-xs'>Red</p>
      </div>
      <div className='flex justify-center items-center flex-col'>
      <Colors size={"60px"} bgColor={"#fcdcb4"} borderColor={"#f6c076"}/>
      <p className='text-xs'>Yellow</p>
      </div>
     
     </section>
     <button className='mb-2 mx-auto text-xs w-64 mt-4 bg-black text-white rounded-sm py-2 px-3'>
     Save Colour
     </button>
     <p className='text-center mt-4'><span className='font-bold text-md mt-2 '>Username:</span> Director@aliceandtiwa.com</p>
            <p className='mt-2 text-center'><span className='font-bold text-md mt-2 text-center py-4'>Role:</span> Administrator</p>
     </div>
     </div>
        <MyApplication/>
    </div>
  )
}

export default ChooseColorScreen
