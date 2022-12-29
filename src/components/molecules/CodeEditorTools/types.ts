import { ECodeEditorThems } from "components/organisms/CodeEditor/types";

export interface ITab {
    label: string
    value: string
}

export interface ICodeEditorToolsProps {
    tabs: ITab[]
    onTabChange: (tab: string) => void
    tabValue: string
    onThemeChange: (newTheme: ECodeEditorThems) => void
    themeValue?: ECodeEditorThems
    onFontSizeChange: (fz: string) => void
    fz: string
}