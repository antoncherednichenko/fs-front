import { IButtonProps } from "components/atoms/Button/types"

export interface ICardButton extends IButtonProps {
    buttonText: string
}

export interface ICardProps {
    title: string
    description: string
    buttons?: ICardButton[]
    width?: string
}