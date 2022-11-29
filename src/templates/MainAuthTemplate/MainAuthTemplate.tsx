import { Box, Container, Grid, useTheme } from "@mui/material"
import { contentContainer, mainContainer, sidebarContainer } from "./styles"
import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import { authRouterList } from "router/authRouter/authRouterList";
import { useAppDispatch, useGetPage } from "hooks";
import { useEffect } from "react";
import { getUser } from "store/actions";
import { Pages } from "__data__";
import { Sidebar } from "components/molecules";
import { ISidebarPage } from "./types";

const MainAuthTemplate = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isLoading, data, error } = useGetPage<ISidebarPage>(Pages.Sidebar)

  useEffect(() => {
    const getUserInfo = async () => {
      const user = await dispatch(getUser())
      if (!user) {
        localStorage.setItem('accesToken', '')
        navigate('/')
        location.reload()
      }
    }
    getUserInfo()
  }, [])
  console.log(data)

  return (
    <Grid 
      container 
      columns={2}
      sx={mainContainer(theme)}
    >
      <Grid item sx={sidebarContainer(theme)}>
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
