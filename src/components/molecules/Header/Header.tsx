import { Container } from "@mui/system"
import { Button, Logo } from "../../atoms"
import classes from './styles.module.scss'

const Header = () => {
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes['flex-container']}>
                    <Logo />
                    <div className={classes['buttons-container']}>
                        <Button route to="/auth" variant="text">Войти</Button>
                        <Button route to="/auth">Зарегистрироваться</Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export { Header }