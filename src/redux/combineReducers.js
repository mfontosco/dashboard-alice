import { combineReducers } from "redux";
import { getStaffsReducer,getCustomerReducer,createStaffReducer } from "./CombineImports";




const reducers = combineReducers({
    getStaffs: getStaffsReducer,
    getCustomers: getCustomerReducer,
    createStaff: createStaffReducer
})

export {reducers}