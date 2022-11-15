import { Typography, useTheme } from "@mui/material"
import { Container } from "@mui/system"
import classes from './styles.module.scss'
import { ReactComponent as Boy } from '../../../assets/illustrations/sitting-boy.svg'
import { Button } from "../../atoms"

const FirstSection = () => {
    const theme = useTheme()

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
                        <Button route to="/auth?type=registration">
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