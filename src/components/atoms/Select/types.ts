export interface ISelectProps {
    values: string[]
    onChange: (newValue: string) => void
    placeholder?: string
    value?: string
}