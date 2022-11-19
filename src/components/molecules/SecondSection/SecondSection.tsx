import { useState } from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import classes from './styles.module.scss'
import { Button, FlexContainer } from 'components/atoms'
import { CodeEditor, View } from 'components/organisms'
import { exampleHtml, exampleCss, exampleJavaScript } from '__data__'
import { bordered, column } from 'theme/shared'

const SecondSection = () => {
    const theme = useTheme()
    const [javaScript, setJavaScript] = useState(exampleJavaScript)
    const codeChangeHandler = (code: string) => {
        setJavaScript(code || '')
    }
    return (
        <section>
            <Container sx={bordered(theme, theme.palette.appBlack)}>
                <FlexContainer>
                    <Box sx={column(theme)}>
                        <Typography variant='body2' sx={{ color: '#fff' }}>
                            <CodeEditor
                                onChange={codeChangeHandler}
                                code={javaScript}
                                height="385px" 
                            />
                        </Typography>
                    </Box>
                    <div className={classes.devider} />
                    <Box sx={column(theme)}>
                        <View
                            html={exampleHtml}
                            css={exampleCss}
                            js={javaScript}
                            minHeigth="200px"
                        />
                        <Typography
                            variant="body2"
                            sx={{ color: '#fff', marginBottom: '25px', }}
                        >
                            В песочнице ты получишь пркатические навыки программирования,
                            научишься основным языковым конструкциям (функции, массивы, циклы, объекты и т.д.).
                        </Typography>
                        <Button route to="/auth?type=singup" variant="contained">
                            Начать практику
                        </Button>
                    </Box>
                </FlexContainer>
            </Container>
        </section>
    )
}

export { SecondSection }