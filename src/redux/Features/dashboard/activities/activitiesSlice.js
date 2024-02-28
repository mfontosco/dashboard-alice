import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import activitiesServices from "./activitiesServices";


const initialState = {
    activities: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const getActivitiesAction = createAsyncThunk(
    "api/activities/",
    async (_, thunkAPI) => {
        try {
            // Corrected: Await the async function call
            return await activitiesServices.getAllActivities();
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

export const getActivitiesSlice = createSlice({
    name: "activity",
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
        builder.addCase (getActivitiesAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase (getActivitiesAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            // Corrected: Set state.staffs instead of state.Staff
            state.activities = action.payload;
        });
        builder.addCase(getActivitiesAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = getActivitiesSlice.actions;

export default getActivitiesSlice.reducer;
