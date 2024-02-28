import { combineReducers } from "redux";
import { getStaffsReducer,
    getCustomerReducer,
    createStaffReducer,
    updateAccountReducer, 
    getActivitiesReducer,
    addNewProductDiscountSliceReducer,
    addNewGiftVoucherSliceReducer,
    addNewSaleDiscountSliceReducer,
    addNewExchangeVoucherReducer,
    getBrandReducer,
    createBrandReducer
} from "./CombineImports";




const reducers = combineReducers({
    getStaffs: getStaffsReducer,
    getCustomers: getCustomerReducer,
    createStaff: createStaffReducer,
    updateAccount: updateAccountReducer,
    getActivities :getActivitiesReducer,
    addNewProductDiscount :addNewProductDiscountSliceReducer,
    addNewGiftVoucher : addNewGiftVoucherSliceReducer,
    addNewSaleVoucher : addNewSaleDiscountSliceReducer,
    addNewExchangeVoucher : addNewExchangeVoucherReducer,
    createBrand :createBrandReducer,
    getBrand : getBrandReducer,
})

export {reducers}