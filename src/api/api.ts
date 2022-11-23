import axios from "axios"
import { FormikValues } from "formik"
import { ApiRoutes } from "__data__/constants/routes"
import { IAuthData } from "./types"

export const BASE_HEADERS = {
    contentType: 'application/json'
}

const getHeaders = () => {
    const token = localStorage.getItem('accessToken')
    if (token) {
        return {
            ...BASE_HEADERS,
            Authorization: `Bearer ${token}`
        }
    }
}

const instance = axios.create({
    baseURL: ApiRoutes.baseUrl,
    headers: getHeaders(),
})

export const authApi = {
    login: (data: FormikValues) => 
        instance.post(ApiRoutes.auth.login, data),
    singup: (data: FormikValues) => 
        instance.post(ApiRoutes.auth.singup, data),
    getUser: () => instance.get(ApiRoutes.auth.getUser)
}