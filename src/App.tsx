import { NonAuthTemplate, MainAuthTemplate } from "./templates"

 
function App() {
  const isAuth: boolean = !!localStorage.getItem('accessToken')
  
  return (
    <>
      {isAuth && <MainAuthTemplate />}
      {!isAuth && <NonAuthTemplate />}
    </>
  )
}

export default App
