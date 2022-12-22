export interface ICodeEditorProps {
    readOnly?: boolean
    tools?: boolean
    code?: string
    onChange?: (code: string) => void
    height?: string
}

export enum ECodeEditorThems {
    Github = 'github',
    Monokai = 'monokai',
    Tomorrow = 'tomorrow',
    Kuroir = 'kuroir',
    Twilight = 'twilight',
    Xcode = 'xcode',
    Textmate = 'textmate',
    SolarizedDark = 'solarized_dark',
    SolarizedLight = 'solarized_light',
    Terminal = 'Terminal',
}