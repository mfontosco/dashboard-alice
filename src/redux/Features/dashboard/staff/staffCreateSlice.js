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


export const createStaffAction = createAsyncThunk("api/Staff_list",async(staffData,thunkAPI)=>{
    console.log("--------********--------->>>>>>.>>>>>>>>")
    try {
        return await staffService.createStaff(staffData)
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

export const createStaffSlice = createSlice({
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
builder.addCase(createStaffAction.pending,(state)=>{
    state.isLoading =true
})
builder.addCase(createStaffAction.fulfilled,(state,action)=>{
    state.isLoading=false,
    state.isSuccess=true,
    state.staff=action.payload
})
builder.addCase(createStaffAction.rejected,(state,action)=>{
    state.isLoading=false, 
    state.isSuccess=false,
    state.isError=true,
    state.message=action.payload

})
    }
})

export const {reset}=createStaffSlice.actions;

export default createStaffSlice.reducer