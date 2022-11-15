import * as yup from 'yup'

export const validationSchema = yup.object({
    email: yup
        .string()
        .email('Email должен быть похож на awesome_name@mail.ru')
        .required('Это обязательное поле'),
    password: yup
        .string()
        .min(8, 'Пароль должен состоять минимум из 8 символов')
        .required('Это обязательное поле')
})
