import axios from "axios";

const baseUrl ="http://184.94.212.5/"

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyODU0MzAxLCJpYXQiOjE3MDg1MzQzMDEsImp0aSI6ImMzYWRjMWFiMDE3MzQ2MzNhYzliYmFjMTMzY2YxZGFmIiwidXNlcl9pZCI6MSwiZnVsbF9uYW1lIjoiUGF0cmljayBmcmFuY2lzIiwidXNlcm5hbWUiOiJpcmVzIiwiZW1haWwiOiJmcmFuY2lzZGFuaWVsMTQwQGdtYWlsLmNvbSIsImJpbyI6ImFtIGEgZnVsbHN0YWNrIHNvZnR3YXJlIGVuZyIsImltYWdlIjoiZGVmYXVsdC5qcGciLCJ2ZXJpZmllZCI6ZmFsc2V9.OEZOjPbyYOvqmclsb4KYBYJAfs698JYDXc52VexuEL8"

const getAllActivities = async () => {
    console.log("getactivities" + "its working");
    const config = {
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
        credentials: "include",
        mode: "cors"
    };

    try {
        const response = await axios.get(`${baseUrl}api/Activities/`, config);
        console.log("staff-data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching staff data:", error);
        throw error; // Rethrow the error to handle it further up the call stack
    }
};







const activitiesServices ={
    getAllActivities,
   

}

export default activitiesServices