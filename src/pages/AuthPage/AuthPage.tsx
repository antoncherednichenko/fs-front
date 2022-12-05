import { useMemo } from "react";
import { TextField, Typography } from "@mui/material";
import { FormikValues, useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { AppLink, Button } from "components/atoms";
import styles from "./style.module.scss";
import { validationSchema } from "./schema";
import { useAppDispatch } from "hooks";
import { authAction } from "store/actions";
import { PagesRoutes } from "__data__";

const AuthPage = () => {
  const params = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formType = useMemo(
    () => new URLSearchParams(params.search).get("type"),
    [params]
  );
  const title = useMemo(
    () => (formType === "login" ? "Войти" : "Регистрация"),
    [formType]
  );
  const formSubmit = async (values: FormikValues) => {
    const userData = await dispatch(
      authAction(values, formType as "login" | "singup")
    );
    if (userData) {
      localStorage.setItem("accessToken", userData.accessToken);
      navigate(PagesRoutes.Courses);
      location.reload();
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: formSubmit,
  });

  return (
    <div className={styles.auth}>
      <Typography variant="h3" sx={{ mb: "35px" }}>
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
      {formType === "login" && (
        <div>
          <Typography variant="body1" component="span" sx={{ mr: "5px" }}>
            Нет аккаунта?
          </Typography>
          <AppLink type="route" href="/auth?type=singup">
            Зарегистрироваться
          </AppLink>
        </div>
      )}
    </div>
  );
};

export { AuthPage };
