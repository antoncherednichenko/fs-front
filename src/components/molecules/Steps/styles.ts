import { Theme } from "@mui/material";

export const stepTitle = (theme: Theme) => ({
    color: theme.palette.primaryPurple,
    fontWeight: 500,
})

export const stepDescription = (theme: Theme) => ({
    mb: '15px',
    width: '100%',
    maxWidth: '550px',
})

export const buttonContainer = () => ({
    display: 'flex',
    gap: '15px'
})