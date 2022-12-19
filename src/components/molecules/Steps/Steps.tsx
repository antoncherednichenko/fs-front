import { FC } from "react"
import { 
	Step, 
	StepContent, 
	StepLabel, 
	Stepper, 
	Typography, 
	useTheme
} from "@mui/material"
import { Box } from "@mui/system"
import { Button } from "components/atoms"
import { IStepsProps } from "./types"
import { buttonContainer, stepDescription, stepTitle } from './styles'

const Steps:FC<IStepsProps> = ({ steps, activeStep }) => {
	const theme = useTheme()

	return (
		<Stepper activeStep={activeStep} orientation="vertical">
			{steps.map((step, i) => (
				<Step key={i}>
					<StepLabel>
						<Typography variant="h4" sx={stepTitle(theme)}>
							{step.label}
						</Typography>
					</StepLabel>
					<StepContent>
						<Typography sx={stepDescription(theme)} variant="body2">
							{step.description}
						</Typography>
						<Box sx={buttonContainer()}>
							{step.stepsButtons.map(({ text, ...buttonProps }, i) => (
								<Button key={i} {...buttonProps}>
									<Typography>{text}</Typography>
								</Button>
							))}
						</Box>
					</StepContent>
				</Step>
			))}
		</Stepper>
	)
}

export { Steps }