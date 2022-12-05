import { Container, Grid, useTheme } from "@mui/material"
import { contentContainer, mainContainer, sidebarContainer } from "./styles"
import {
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";
import { authRouterList } from "router/authRouter/authRouterList";
import { useAppDispatch, useAppSelector, useGetPage } from "hooks";
import { useEffect } from "react";
import { getUser } from "store/actions";
import { Pages, PagesRoutes } from "__data__";
import { Sidebar, UserInfo } from "components/molecules";
import { ISidebarPage } from "./types";

const MainAuthTemplate = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { data } = useGetPage<ISidebarPage>(Pages.Sidebar)
  const { email, role } = useAppSelector(state => state.user)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUser())
    if(location.pathname === PagesRoutes.Main) {
      navigate(PagesRoutes.Courses)
    }
  }, [])

  return (
    <Grid 
      container 
      columns={2}
      sx={mainContainer(theme)}
    >
      <Grid item sx={sidebarContainer(theme)}>
        <UserInfo
          email={email || ""}
          role={role || ""} 
        />
        <Sidebar items={data?.features?.at(0)?.items || []} />
      </Grid>
      <Grid item sx={contentContainer(theme)}>
        <Container>
          <Routes>
            {authRouterList.map(route => (
              <Route 
                path={route.path}
                element={<route.component />}
                key={route.path} 
              />
            ))}
          </Routes>
        </Container>
      </Grid>
    </Grid>
    
  );
};

export { MainAuthTemplate };
