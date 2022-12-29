import { FC, useState } from "react";
import { Box } from "@mui/material";
import { CodeEditorTools } from "components/molecules";
import { CodeEditor } from "components/organisms/CodeEditor";
import { View } from "components/organisms/View";
import { ECodeEditorThems } from "components/organisms/CodeEditor/types";
import { ITrainerContentProps } from "./types";


const TrainerContent: FC<ITrainerContentProps> = ({ tabs }) => {
    const [theme, setTheme] = useState<ECodeEditorThems>(ECodeEditorThems.Twilight)
    const [fontSize, setFontSize] = useState(16);
    const [currentTabValue, setCurrentTabValue] = useState('html')

    const tabChangeHandler = (newTabValue: string) => {
        setCurrentTabValue(newTabValue)
    }
    const themeChangeHandler = (newTheme: ECodeEditorThems) => {
        setTheme(newTheme)
    }
    const fontSizeChangeHandler = (fz: string) => {
        setFontSize(Number(fz))
    }
    return (
        <Box>
            <Box>
                <CodeEditorTools
                    tabs={tabs}
                    onTabChange={tabChangeHandler}
                    tabValue={currentTabValue}
                    themeValue={theme}
                    onThemeChange={themeChangeHandler} 
                    onFontSizeChange={fontSizeChangeHandler}
                    fz={String(fontSize)}
                />
                <CodeEditor
                    tools
                    theme={theme}
                    fontSize={fontSize} 
                />
            </Box>
            <View />
        </Box>
    )
}

export { TrainerContent }