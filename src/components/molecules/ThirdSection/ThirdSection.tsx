import { Container, Typography } from '@mui/material'
import { ReactComponent as Girl } from '../../../assets/illustrations/girl-bike.svg'
import classes from './styles.module.scss'

const ThirdSection = () => {
    return (
        <section className={classes['third-section']}>
            <Container>
                <div className={classes['girl-container']}>
                    <Girl />
                </div>
            </Container>
        </section>
    )
}

export { ThirdSection }