export type TButtonvariant = "text" | "outlined" | "contained"
export interface IButtonProps {
    children: React.ReactNode
    variant?: TButtonvariant
    onClick?: () => void
    disabled?: boolean
    fullWidth?: boolean
    href?: string
    route?: boolean
    to?: string
}