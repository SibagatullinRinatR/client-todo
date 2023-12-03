import axios from 'axios'

export const register = async (username, email, password) =>{
    try {
        const response = await axios.post('http://localhost:5000/register', {username, email, password})
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const login = async (email, password) =>{
    try {
        const response = await axios.post('http://localhost:5000/login', {email, password})
    } catch (error) {
        alert(error.response.data.message)
    }
}