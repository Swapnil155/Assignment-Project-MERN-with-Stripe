import axios from "axios"

const instance = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        // "Content-Type": "application/json",
        'Content-Type': 'multipart/form-data'
    }
})

export default instance
