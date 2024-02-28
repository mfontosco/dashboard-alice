import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandServices from './brandServices';

console.log("=========>",brandServices);

const initialState = {
    staffs: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const getBrandAction = createAsyncThunk(
    "api/Staff_list/",
    async (_, thunkAPI) => {
        try {
            // Corrected: Await the async function call
            return await brandServices.getAllBrands();
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

export const getBrandSlice = createSlice({
    name: "staffs",
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
        builder.addCase(getBrandAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getBrandAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            // Corrected: Set state.staffs instead of state.Staff
            state.brand = action.payload;
        });
        builder.addCase(getBrandAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = getBrandSlice.actions;

export default getBrandSlice.reducer;
