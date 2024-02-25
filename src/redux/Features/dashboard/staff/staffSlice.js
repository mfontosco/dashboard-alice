import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import staffServices from "./staffService";

console.log(staffServices);

const initialState = {
    staffs: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const getStaffAction = createAsyncThunk(
    "api/Staff_list/",
    async (_, thunkAPI) => {
        try {
            // Corrected: Await the async function call
            return await staffServices.getAllStaffs();
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

export const getStaffSlice = createSlice({
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
        builder.addCase(getStaffAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStaffAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            // Corrected: Set state.staffs instead of state.Staff
            state.staffs = action.payload;
        });
        builder.addCase(getStaffAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = getStaffSlice.actions;

export default getStaffSlice.reducer;
