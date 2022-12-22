import { ECodeEditorThems } from "components/organisms/CodeEditor/types";

export interface ICodeEditorToolsProps {
    onThemeChange: (newTheme: ECodeEditorThems) => void
    themeValue?: ECodeEditorThems
}