import { Typography, useTheme } from "@mui/material"
import { Container } from "@mui/system"
import { ReactComponent as Boy } from 'assets/illustrations/sitting-boy.svg'
import { Button } from "components/atoms"
import classes from './styles.module.scss'

const FirstSection = () => {

    return (
        <section className={classes['first-section']}>
            <Container>
                <div className={classes['flex-container']}>
                    <div className={classes.column}>
                        <div className={classes.title}>
                            <Typography variant="h1">
                                Изучай <br/>// крутой
                                JavaScript
                            </Typography>
                        </div>
                        <div className={classes.description}>
                            <Typography variant="body2">
                                ez-front считает, что программирование — это суперсила.<br /> 
                                Бесплатно прокачай свои навыки программирования,<br /> решай интресные задачи и кайфуй от своей крутости.
                            </Typography>
                        </div>
                        <Button route to="/auth?type=singup">
                            Стать круче
                        </Button>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.scale}>
                            <Boy />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export { FirstSection }