import { ThemeProvider } from "@emotion/react"
import { NonAuthTemplate, MainAuthTemplate } from "./templates"
import { theme } from "./theme/theme"
import './theme/reset.scss'


 
function App() {
  const isAuth: boolean = !!localStorage.getItem('accessToken')
  
  return (
    <>
      <ThemeProvider theme={theme}>
        {isAuth && <MainAuthTemplate />}
        {!isAuth && <NonAuthTemplate />}
      </ThemeProvider>
    </>
  )
}

export default App
