import axios from "axios";

const baseUrl ="http://184.94.212.5/"

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMjY4Nzc5LCJpYXQiOjE3MDg5NDg3NzksImp0aSI6ImY1M2MwZTg3ZDA4NzRhZDg4MDhhNGMyZGRiNTNlMWNhIiwidXNlcl9pZCI6MSwiZnVsbF9uYW1lIjoiUGF0cmljayBmcmFuY2lzIiwidXNlcm5hbWUiOiJpcmVzIiwiZW1haWwiOiJmcmFuY2lzZGFuaWVsMTQwQGdtYWlsLmNvbSIsImJpbyI6ImFtIGEgZnVsbHN0YWNrIHNvZnR3YXJlIGVuZyIsImltYWdlIjoiZGVmYXVsdC5qcGciLCJ2ZXJpZmllZCI6ZmFsc2V9.GwgUzXcTybSKwcebUAE8aDfg_99xIUmDEwQBiUmktoE"

const createStaff = async(staffData)=>{
    console.log("staffData", staffData)
    console.log("it's working")
   try {
    const config = {
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
    credentials: "include",
        mode: "cors"
    };

    const {data} = await axios.post(`${baseUrl}api/Staff_list/`,staffData,config)
    console.log(data)
    return data
   } catch (error) {
    console.log(error)
   }
}
const getAllStaffs = async () => {
    console.log("getclasses" + "its working");
    const config = {
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
    credentials: "include",
        mode: "cors"
    };

    try {
        const response = await axios.get(`${baseUrl}api/Staff_list/`, config);
        console.log("staff-data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching staff data:", error);
        throw error; // Rethrow the error to handle it further up the call stack
    }
};





// const getClass = async(id)=>{
// console.log("serviceidclass",id)
//     const config = {
//         headers:{
//             "content-type":"application/json",
//             // authorization:`Bearer ${token}`
//         },
//         Credential:"include",
//         mode:"cors"
//     }
//     console.log("it is working")
//     const {data} = await axios.get(`${baseUrl}/classes/${id}`,config)
//     console.log(data)
//     return data
// }

const updateStaff = async(id,staffData)=>{

    const config = {
        headers:{
            "content-type":"application/json",
            // authorization:`Bearer ${token}`
        },
        Credential:"include",
        mode:"cors"
    }
    console.log("it is working")
    const {data} = await axios.put(`${baseUrl}/staff_Account/${id}`,staffData,config)
    console.log(data)
    return data
}
// const deleteClass = async(id)=>{

//     const config = {
//         headers:{
//             "content-type":"application/json",
//             // authorization:`Bearer ${token}`
//         },
//         Credential:"include",
//         mode:"cors"
//     }
//     console.log("it is working")
//     const {data} = await axios.delete(`${baseUrl}/classes/${id}`,config)
//     console.log(data)
//     return data
// }

const staffServices = {
    getAllStaffs,
    createStaff,
    updateStaff,

}

export default staffServices