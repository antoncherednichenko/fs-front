export interface ICodeEditorProps {
    readOnly?: boolean
    tools?: boolean
    code?: string
    onChange?: (code: string) => void
    height?: string

}