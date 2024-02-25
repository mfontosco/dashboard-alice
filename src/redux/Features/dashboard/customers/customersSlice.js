import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerServices from "./customersService";


const initialState = {
    customers: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const getCustomerAction = createAsyncThunk(
    "api/Staff_list/",
    async (_, thunkAPI) => {
        try {
            // Corrected: Await the async function call
            return await customerServices.getAllCustomers();
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

export const getCustomerSlice = createSlice({
    name: "class",
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
        builder.addCase (getCustomerAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase (getCustomerAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            // Corrected: Set state.staffs instead of state.Staff
            state.customers = action.payload;
        });
        builder.addCase(getCustomerAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = getCustomerSlice.actions;

export default getCustomerSlice.reducer;
