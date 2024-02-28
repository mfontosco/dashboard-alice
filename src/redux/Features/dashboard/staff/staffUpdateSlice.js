import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import staffService from "./staffService";

 console.log("-----------------")

const initialState ={
    staff:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
console.log("----------------->>>>>>.>>>>>>>>")


export const updateStaffAction = createAsyncThunk("api/Staff_list",async(staffData,thunkAPI)=>{
    console.log("--------********--------->>>>>>.>>>>>>>>")
    try {
        return await staffService.updateStaff(staffData)

    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(message)
    //   toast.warning(`${message}`);
      return thunkAPI.rejectWithValue(message);
    }
})

export const updateStaffSlice = createSlice({
    name:"staff",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError=false,
            state.isSuccess=false,
            state.isLoading=false,
            state.message=""
        }
    },
    extraReducers:(builder)=>{
    builder.addCase(updateStaffAction.pending,(state)=>{
    state.isLoading =true
})
builder.addCase(updateStaffAction.fulfilled,(state,action)=>{
    state.isLoading=false,
    state.isSuccess=true,
    state.staff=action.payload
})
builder.addCase(updateStaffAction.rejected,(state,action)=>{
    state.isLoading=false, 
    state.isSuccess=false,
    state.isError=true,
    state.message=action.payload

})
    }
})

export const {reset} = updateStaffSlice.actions;

export default updateStaffSlice.reducer