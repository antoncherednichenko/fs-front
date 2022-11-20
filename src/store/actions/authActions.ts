import { Dispatch } from "@reduxjs/toolkit";
import { authApi } from "api/api";
import { FormikValues } from "formik";
import { updateUserState } from "store/slices/userSlice";

export const authAction = (values: FormikValues, type: string) => 
    async (dispatch: Dispatch) => {
        const userData = await authApi[type as 'login' | 'singup'](values).then(resp => {
            if (resp.data.code === 0 && resp.data.data) {
                return resp.data.data
            }
            return null
        })
        if (userData) {
            dispatch(updateUserState(userData))
            return userData
        }
}