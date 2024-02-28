import * as yup from "yup"



// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

 export const addStaffSchema = yup.object().shape({
    display_name:yup.string().required("Required"),
    username:yup.string().required("Required"),
    password:yup.string().min(5).required("Required"),
    email:yup.string().email("Please enter a valid email").required("Required"),
    retype_password:yup.string().required("Required"),
})