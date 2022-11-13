import { Container, Typography } from '@mui/material'
import { ReactComponent as Man } from '../../../assets/illustrations/man.svg'
import { Button } from '../../atoms'
import classes from './styles.module.scss'

const ThirdSection = () => {
    return (
        <section className={classes['third-section']}>
            <Container>
                <div className={classes.flex}>
                    <div className={classes.column}>
                        <Typography variant="h3" sx={{marginBottom: '25px'}}>
                            Не {'/* торопись */'}!
                        </Typography>
                        <Typography variant="body2" sx={{marginBottom: '10px'}}>
                            Изучение программирования - это долгий и сложный путь.
                            Не спеши тратить деньги на дорогостоящие курсы - попробуй 
                            себя в роли разработчика бесплатно.
                        </Typography>
                        <Typography variant="body2" sx={{marginBottom: '25px'}}>
                            Попробовать свои силы в программировании 
                            тебе поможет наш интерактивный тренажер!
                            Пиши код прямо в браузере и кайфуй от результата.
                        </Typography>
                        <Button route to="/auth?type=registration">Попробовать</Button>
                    </div>
                    <div className={classes.column}>
                        <div className={classes['img-holder']}>
                            <Man />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export { ThirdSection }