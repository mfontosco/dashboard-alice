import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import voucherServices from "./voucherServices";

 console.log("-----------------")

const initialState ={
    voucher:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
console.log("----------------->>>>>>.>>>>>>>>")


export const addNewExchangeVoucherAction = createAsyncThunk("api/Staff_list",async(staffData,thunkAPI)=>{
    console.log("--------********--------->>>>>>.>>>>>>>>")
    try {
        return await voucherServices.addNewExchangeVoucher(staffData)
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

export const addNewExchangeVoucherSlice = createSlice({
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
builder.addCase(addNewExchangeVoucherAction.pending,(state)=>{
    state.isLoading =true
})
builder.addCase(addNewExchangeVoucherAction.fulfilled,(state,action)=>{
    state.isLoading=false,
    state.isSuccess=true,
    state.staff=action.payload
})
builder.addCase(addNewExchangeVoucherAction.rejected,(state,action)=>{
    state.isLoading=false, 
    state.isSuccess=false,
    state.isError=true,
    state.message=action.payload

})
    }
})

export const {reset}= addNewExchangeVoucherSlice.actions;

export default addNewExchangeVoucherSlice.reducer