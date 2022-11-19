import { ThemeProvider, CssBaseline } from "@mui/material"
import { NonAuthTemplate, MainAuthTemplate } from "./templates"
import { theme as appTheme } from "theme/theme"
import './theme/reset.scss'


 
function App() {
  const isAuth: boolean = !!localStorage.getItem('accessToken')
  
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />
        {isAuth && <MainAuthTemplate />}
        {!isAuth && <NonAuthTemplate />}
      </ThemeProvider>
    </>
  )
}

export default App
