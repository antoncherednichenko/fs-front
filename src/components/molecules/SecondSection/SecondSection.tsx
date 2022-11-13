import { Typography } from '@mui/material'
import classes from './styles.module.scss'
import { Button } from '../../atoms'
import { CodeEditor, View } from '../../organisms'
import { exampleHtml, exampleCss, exampleJavaScript } from '../../../__data__'
import { useState } from 'react'

const SecondSection = () => {
    const [javaScript, setJavaScript] = useState(exampleJavaScript)
    const codeChangeHandler = (code: string) => {
        setJavaScript(code || '')
    }
    return (
        <section className={classes['second-section']}>
            <div className={classes.column}>
                <Typography variant='body2' sx={{ color: '#fff' }}>
                    <CodeEditor
                        onChange={codeChangeHandler}
                        code={javaScript}
                        height="385px" 
                    />
                </Typography>
            </div>
            <div className={classes.devider} />
            <div className={classes.column}>
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
                <Button route to="/auth?type=registration" variant="contained">
                    Начать практику
                </Button>
            </div>
        </section>
    )
}

export { SecondSection }