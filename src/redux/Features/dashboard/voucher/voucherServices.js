import axios from "axios";

const baseUrl ="http://184.94.212.5/"

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMjY4Nzc5LCJpYXQiOjE3MDg5NDg3NzksImp0aSI6ImY1M2MwZTg3ZDA4NzRhZDg4MDhhNGMyZGRiNTNlMWNhIiwidXNlcl9pZCI6MSwiZnVsbF9uYW1lIjoiUGF0cmljayBmcmFuY2lzIiwidXNlcm5hbWUiOiJpcmVzIiwiZW1haWwiOiJmcmFuY2lzZGFuaWVsMTQwQGdtYWlsLmNvbSIsImJpbyI6ImFtIGEgZnVsbHN0YWNrIHNvZnR3YXJlIGVuZyIsImltYWdlIjoiZGVmYXVsdC5qcGciLCJ2ZXJpZmllZCI6ZmFsc2V9.GwgUzXcTybSKwcebUAE8aDfg_99xIUmDEwQBiUmktoE"

const addNewProductDiscount = async(productData)=>{
    console.log("productData", productData)
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

    const {data} = await axios.post(`${baseUrl}api/Staff_list/`,productData,config)
    console.log(data)
    return data
   } catch (error) {
    console.log(error)
   }
}
const addNewSaleVoucher = async(productData)=>{
    console.log("productData", productData)
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

    const {data} = await axios.post(`${baseUrl}api/Staff_list/`,productData,config)
    console.log(data)
    return data
   } catch (error) {
    console.log(error)
   }
}
const addNewGiftVoucher = async(productData)=>{
    console.log("productData", productData)
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

    const {data} = await axios.post(`${baseUrl}api/Staff_list/`,productData,config)
    console.log(data)
    return data
   } catch (error) {
    console.log(error)
   }
}
const addNewExchangeVoucher = async(productData)=>{
    console.log("productData", productData)
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

    const {data} = await axios.post(`${baseUrl}api/Staff_list/`,productData,config)
    console.log(data)
    return data
   } catch (error) {
    console.log(error)
   }
}



const voucherServices = {
    addNewExchangeVoucher,
    addNewGiftVoucher,
    addNewProductDiscount,
    addNewSaleVoucher

}

export default voucherServices