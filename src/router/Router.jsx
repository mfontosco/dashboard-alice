
import {Routes,Route} from 'react-router-dom'
import Sidebar from '../screens/Side'
import Account from '../screens/Dashboard/Account';
import ActivitiesTable from "../components/ActivitiesTable";
import AccountEditScreen from "../screens/Dashboard/AccountEditScreen";
import ChooseColorScreen from "../screens/Dashboard/ChooseColourScreen";
import CutomersPage from "../screens/Dashboard/CustomersPage";
import SpecificCustomer from "../screens/Dashboard/SpecificCustomer";
import Staff from "../screens/Dashboard/Staff";
import SpecificStaff from "../screens/Dashboard/SpecificStaff";
import StaffList from "../screens/Dashboard/StaffListScreen";
import ProductList from "../screens/Dashboard/ProductList";
import AddBrandScreen from "../screens/Dashboard/AddBrandScreen";
import BrandsListScreen from "../screens/Dashboard/BrandsListScreen";
import AddCategoryScreen from "../screens/Dashboard/AddCategoryScreen";
import SpecificCategoryScreen from "../screens/Dashboard/SpecificCategoryScreen";
import AddNewProductScreen from "../screens/Dashboard/AddNewProductScreen";
import EditProductScreen from "../screens/Dashboard/EditProductScreen";
import EditSoldOut from "../screens/Dashboard/EditSoldOut";
import AddVoucherScreen from "../screens/Dashboard/AddVoucherScreen";
import AddNewGiftVoucherScreen from "../screens/Dashboard/AddNewGiftVoucherScreen"
import AddNewProductDiscountScreen from "../screens/Dashboard/AddNewProductDiscountScreen";
import AddNewSaleDiscountScreen from "../screens/Dashboard/AddNewSalesDiscountScreen";
import VoucherCreateScreen from "../screens/Dashboard/VoucherCreateScreen";
import CategoriesScreen from '../screens/Dashboard/CategoriesScreen';

const Router = () => {

  return (
    <Routes>
    <Route path="/dashboard/account" element={<Sidebar><Account/></Sidebar>} />
    <Route path="/dashboard/activities" element={<Sidebar><ActivitiesTable/></Sidebar>} />
    <Route path="/dashboard/account/edit" element={<Sidebar><AccountEditScreen/></Sidebar>}/>
        <Route path="/dashboard/account/choose-colors" element={<Sidebar><ChooseColorScreen/></Sidebar>}/>
        <Route path="/dashboard/customers" element={<Sidebar><CutomersPage/></Sidebar>}/>
        <Route path="/dashboard/customers/:id" element={<Sidebar><SpecificCustomer/></Sidebar>}/>
        <Route path="/dashboard/add-staff" element={<Sidebar><Staff/></Sidebar>}/>
        <Route path="/dashboard/staff-list" element={<Sidebar><StaffList/></Sidebar>}/>
        <Route path="/dashboard/product-list" element={<Sidebar><ProductList/></Sidebar>}/>
        <Route path="/dashboard/staff/:id" element={<Sidebar><SpecificStaff/></Sidebar>}/>
        <Route path="/dashboard/add-brand" element={<Sidebar><AddBrandScreen/></Sidebar>}/>
        <Route path="/dashboard/brand-list" element={<Sidebar><BrandsListScreen/></Sidebar>}/>
        <Route path="/dashboard/add-category" element={<Sidebar><AddCategoryScreen/></Sidebar>}/>
        <Route path="/dashboard/category/:id" element={<Sidebar><SpecificCategoryScreen/></Sidebar>}/>
        <Route path="/dashboard/category-list" element={<Sidebar><CategoriesScreen/></Sidebar>}/>
        <Route path="/dashboard/add-product" element={<Sidebar><AddNewProductScreen/></Sidebar>}/>
        <Route path="/dashboard/edit-product/:id" element={<Sidebar><EditProductScreen/></Sidebar>}/>
        <Route path="/dashboard/edit-draft/:id" element={<Sidebar><EditSoldOut/></Sidebar>}/>
        <Route path="/dashboard/add-voucher" element={<Sidebar><AddVoucherScreen/></Sidebar>}/>
        <Route path="/dashboard/gift-voucher" element={<Sidebar><AddNewGiftVoucherScreen/></Sidebar>}/>
        <Route path="/dashboard/product-discount" element={<Sidebar><AddNewProductDiscountScreen/></Sidebar>}/>
        <Route path="/dashboard/sale-discount" element={<Sidebar><AddNewSaleDiscountScreen/></Sidebar>}/>
        <Route path="/dashboard/voucher-create" element={<Sidebar><VoucherCreateScreen/></Sidebar>}/>
        <Route/>
    </Routes>
  );
}

export default Router;
