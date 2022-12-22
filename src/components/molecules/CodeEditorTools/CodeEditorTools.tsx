import { FC } from "react"
import { Box, useTheme } from "@mui/material"
import { ICodeEditorToolsProps } from "./types"
import { Select } from "components/atoms"
import { themeList } from "./constants"
import { ECodeEditorThems } from "components/organisms/CodeEditor/types"
import { tools } from "./styles"


const CodeEditorTools: FC<ICodeEditorToolsProps> = ({ onThemeChange, themeValue }) => {
    const theme = useTheme()
    const changeHandler = (newTheme: string) => {
        onThemeChange(newTheme as ECodeEditorThems)
    }
    return (
        <Box sx={tools(theme)}>
            <Select
                value={themeValue}
                placeholder="Выбери тему"
                values={themeList}
                onChange={changeHandler} 
            />
        </Box>
    )
}

export { CodeEditorTools }