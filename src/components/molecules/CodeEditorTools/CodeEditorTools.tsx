import { FC } from "react"
import { Box, useTheme } from "@mui/material"
import { ICodeEditorToolsProps } from "./types"
import { Select, Tabs } from "components/atoms"
import { themeList, fontSizeList } from "./constants"
import { ECodeEditorThems } from "components/organisms/CodeEditor/types"
import { tools } from "./styles"
import { CodeEditorSettings } from "components/organisms"


const CodeEditorTools: FC<ICodeEditorToolsProps> = ({
    tabs,
    onTabChange,
    tabValue, 
    onThemeChange, 
    themeValue, 
    onFontSizeChange, 
    fz 
}) => {
    const theme = useTheme()
   
    return (
        <Box sx={tools(theme)}>
            <Tabs
                items={tabs}
                currentValue={tabValue}
                onChange={(tab) => onTabChange(tab as string)}
            />
            <CodeEditorSettings>
                <Box>
                    <Select
                        values={themeList}
                        value={themeValue}
                        onChange={(theme) => onThemeChange(theme as ECodeEditorThems)}
                    />
                    <Select
                        values={fontSizeList}
                        value={fz}
                        onChange={(fz) => onFontSizeChange(fz)}
                    />
                </Box>
            </CodeEditorSettings>
        </Box>
    )
}

export { CodeEditorTools }