import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "components/molecules";
import { nonAuthRouterList } from "router/nonAuthRouter/nonAuthRouterList";
import classes from "./styles.module.scss";

const NonAuthTemplate = () => {
  return (
    <>
      <Header />
      <div className={classes.wrapper}>
        <Routes>
          {nonAuthRouterList.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </>
  );
};

export { NonAuthTemplate };
