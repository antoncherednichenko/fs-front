import { ThemeProvider, CssBaseline } from "@mui/material"
import { BrowserRouter as Router } from 'react-router-dom'
import { NonAuthTemplate, MainAuthTemplate } from "./templates"
import { theme as appTheme } from "theme/theme"
import './theme/reset.scss'


 
function App() {
  const isAuth: boolean = !!localStorage.getItem('accessToken')
  
  return (
    <>
      <Router>
        <ThemeProvider theme={appTheme}>
          <CssBaseline enableColorScheme />
          {isAuth && <MainAuthTemplate />}
          {!isAuth && <NonAuthTemplate />}
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
