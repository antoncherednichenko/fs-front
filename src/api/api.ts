import axios from "axios"
import { FormikValues } from "formik"
import { ApiRoutes } from "__data__/constants/routes"
import { IAuthData } from "./types"

export const BASE_HEADERS = {
    contentType: 'application/json',
}

const instance = axios.create({
    baseURL: ApiRoutes.baseUrl,
    headers: BASE_HEADERS,
})

export const authApi = {
    login: (data: FormikValues) => 
        instance.post(ApiRoutes.auth.login, data),
    singup: (data: FormikValues) => 
        instance.post(ApiRoutes.auth.singup, data)
}