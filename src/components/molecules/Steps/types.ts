import { IButtonProps } from "components/atoms/Button/types"

export interface IStepButton extends IButtonProps {
    text: string
}
export interface IStep {
    label: string
    description: string
    stepsButtons: IStepButton[]
}
export interface IStepsProps {
    steps: IStep[]
    activeStep: number
}