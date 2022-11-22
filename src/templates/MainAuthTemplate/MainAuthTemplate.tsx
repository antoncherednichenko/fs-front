import { Box, Container, Grid, useTheme } from "@mui/material"
import { contentContainer, mainContainer, sidebarContainer } from "./styles"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { authRouterList } from "router/authRouter/authRouterList";

const MainAuthTemplate = () => {
  const theme = useTheme()

  return (
    <Router>
      <Grid 
        container 
        columns={2}
        sx={mainContainer(theme)}
      >
        <Grid item sx={sidebarContainer(theme)}>
        sidebar
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
    </Router>
    
  );
};

export { MainAuthTemplate };
