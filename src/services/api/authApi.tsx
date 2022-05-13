import React from 'react';
import { login, register } from '../../features/users/usersSlice/declareUser';
import axiosClient from './axiosClient'

const authApi = {
    async register(data: register) {
        const url = '/users'
        const response = await axiosClient.post(url, data)
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response
    },
    async login(data:login) {
        const url = '/users'
        const response = await axiosClient.post(url, data)
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response
    },
     logout() {
        localStorage.removeItem("users")
    }
}
export default authApi