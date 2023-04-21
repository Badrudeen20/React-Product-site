import axios from "axios"
export default axios.create({
    baseURL:"https://octalogic-test-frontend.vercel.app/api/v1/vehicleTypes",
    headers:{
        "Content-Type":"application/json"
    }
})