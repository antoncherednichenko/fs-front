import { Typography } from '@mui/material'
import classes from './styles.module.scss'
import clsx from 'clsx'
import { Button } from '../../atoms'

const SecondSection = () => {
    return (
        <section className={classes['second-section']}>
            <div className={classes.column}>
                <Typography variant='body2' sx={{ color: '#fff' }}>
                    Screenshot
                </Typography>
            </div>
            <div className={classes.devider} />
            <div className={classes.column}>
                <div className={classes['column-title']}>
                    <Typography 
                        sx={{ color: '#fff' }}
                        variant="h3"
                    >
                        {'{ Практикуйся } в песочнице'}
                    </Typography>
                </div>
                <Typography
                    variant="body2"
                    sx={{ color: '#fff', marginBottom: '25px', }}
                >
                    В песочнице ты получишь пркатические навыки программирования,
                    научишься основным языковым конструкциям (функции, массивы, циклы, объекты и т.д.).
                </Typography>
                <Button route to="/auth?type=registration" variant="contained">
                    Начать практику
                </Button>
            </div>
        </section>
    )
}

export { SecondSection }