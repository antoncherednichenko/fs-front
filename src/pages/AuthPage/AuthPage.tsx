import { TextField, Typography } from '@mui/material'
import { FormikValues, useFormik } from 'formik'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { AppLink, Button } from '../../components/atoms'
import { validationSchema } from './schema'
import styles from './style.module.scss'

const AuthPage = () => {
    const params = useLocation()
    const formType = useMemo(
        () => new URLSearchParams(params.search).get('type'), 
        [params]
    )
    const title = useMemo(
        () => formType === 'login' ? 'Войти' : 'Зарегистрироваться', 
        [formType]
    )
    const formSubmit = (values: FormikValues) => {
        console.log(values)
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: formSubmit,
    })

    return (
        <div className={styles.auth}>
            <Typography variant="h3" sx={{mb: '35px',}}>
                {title}
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email" 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Пароль"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button type="submit">{title}</Button>
            </form>
            {formType === 'login' && (
                <div>
                    <Typography 
                        variant="body1" 
                        component="span" 
                        sx={{mr: '5px'}}
                    >
                        Нет аккаунта?
                    </Typography>
                    <AppLink
                        type='route'
                        href="/auth?type=registration"
                    >
                        Зарегистрироваться
                    </AppLink>
                </div>
            )}
        </div>
    )
}

export { AuthPage }