import { Box, Container, Typography, useTheme } from "@mui/material"
import { Button, FlexContainer, Illustration } from "components/atoms"
import { bordered } from "theme/shared"
import { title } from "./styles"
import { column } from "theme/shared"

const FirstSection = () => {
    const theme = useTheme()
    return (
        <Box component="section">
            <Container sx={bordered(theme, theme.palette.appGreen)}>
                <FlexContainer>
                    <Box sx={column(theme)}>
                        <Typography sx={title()} variant="h1">
                            Изучай <br/>// крутой
                            JavaScript
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '25px' }}>
                            ez-front считает, что программирование — это суперсила.<br /> 
                            Бесплатно прокачай свои навыки программирования,<br /> решай интресные задачи и кайфуй от своей крутости.
                        </Typography>
                        <Button route to="/auth?type=singup">
                            Стать круче
                        </Button>
                    </Box>
                    <Box sx={column(theme)}>
                        <Illustration 
                            name="Boy" 
                            reflected
                            centered
                            size={{
                                desctop: 350,
                                tablet: 280
                            }} 
                        />
                    </Box>
                </FlexContainer>
            </Container>
        </Box>
    )
}

export { FirstSection }