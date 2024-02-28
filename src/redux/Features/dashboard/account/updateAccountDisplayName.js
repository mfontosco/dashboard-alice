import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  accountServices from "./accountServices";


const initialState = {
    account: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const updateAccountAction = createAsyncThunk(
    "api/account/",
    async (_, thunkAPI) => {
        try {
            // Corrected: Await the async function call
            return await  accountServices.updateAccount();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            // toast.warning(`${message}`);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const updateAccountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateAccountAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateAccountAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            // Corrected: Set state.staffs instead of state.Staff
            state.account = action.payload;
        });
        builder.addCase(updateAccountAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = updateAccountSlice.actions;

export default updateAccountSlice.reducer;
