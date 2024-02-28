import getStaffsReducer from "./Features/dashboard/staff/staffSlice";
import getCustomerReducer  from "./Features/dashboard/customers/customersSlice";
import createStaffReducer from "./Features/dashboard/staff/staffCreateSlice"
import updateAccountReducer from "./Features/dashboard/account/updateAccountDisplayName"
import getActivitiesReducer from "./Features/dashboard/activities/activitiesSlice"
import addNewExchangeVoucherReducer from "./Features/dashboard/voucher/addNewExchangeVoucher";
import addNewGiftVoucherSliceReducer from "./Features/dashboard/voucher/addNewGiftVoucherSlice";
import addNewSaleDiscountSliceReducer from "./Features/dashboard/voucher/addNewSaleDiscountSlice";
import addNewProductDiscountSliceReducer from "./Features/dashboard/voucher/addNewProductDiscountSlice";
import createBrandReducer from "./Features/dashboard/brand/createBrandSlice"
import getBrandReducer from "./Features/dashboard/brand/getBrandSlice"
export {
        getStaffsReducer,
        getCustomerReducer,
        createStaffReducer,
        getActivitiesReducer,
        updateAccountReducer,
        addNewExchangeVoucherReducer,
        addNewSaleDiscountSliceReducer,
        addNewGiftVoucherSliceReducer,
        addNewProductDiscountSliceReducer,
        createBrandReducer,
        getBrandReducer
    }
    