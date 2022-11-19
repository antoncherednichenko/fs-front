import { Box, Container, Typography, useTheme } from '@mui/material'
import { Button, FlexContainer } from 'components/atoms'
import classes from './styles.module.scss'
import { column, bordered } from 'theme/shared'

const ThirdSection = () => {
    const theme = useTheme()
    return (
        <Box component="section">
            <Container sx={bordered(theme, theme.palette.cream)}>
                <FlexContainer>
                    <Box sx={column(theme)}>
                        <Typography variant="h3" sx={{mb: '25px'}}>
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
                        <Button route to="/auth?type=singup">Попробовать</Button>
                    </Box>
                    <Box sx={column(theme)}>
                        
                    </Box>
                </FlexContainer>
            </Container>
        </Box>
    )
}

export { ThirdSection }