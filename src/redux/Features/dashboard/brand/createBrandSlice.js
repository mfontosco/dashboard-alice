import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import brandServices from "./brandServices";

 console.log("-----------------")

const initialState ={
    brand:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
console.log("----------------->>>>>>.>>>>>>>>")


export const createBrandAction = createAsyncThunk("api/Staff_list",async(brandData,thunkAPI)=>{
    console.log("--------********--------->>>>>>.>>>>>>>>")
    try {
        return await brandServices.createBrand(brandData)
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

export const createBrandSlice = createSlice({
    name:"brand",
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
builder.addCase(createBrandAction.pending,(state)=>{
    state.isLoading =true
})
builder.addCase(createBrandAction.fulfilled,(state,action)=>{
    state.isLoading = false,
    state.isSuccess = true,
    state.brand = action.payload
})
builder.addCase(createBrandAction.rejected,(state,action)=>{
    state.isLoading = false, 
    state.isSuccess = false,
    state.isError = true,
    state.message = action.payload

})
    }
})

export const {reset}=createBrandSlice.actions;

export default createBrandSlice.reducer