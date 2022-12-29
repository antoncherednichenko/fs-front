import { Theme } from "@mui/material";

export const iconButton = (theme: Theme) => ({
    '&:hover': {
        color: theme.palette.primaryPurple,
        background: 'none',
    },
})

export const settingsModal = (theme: Theme) => ({
    background: theme.palette.lightBlue,
    height: '100vh',
    width: 'max-content',
    position: 'absolute',
    right: 0,
    border: `2px solid ${theme.palette.appBlack}`
})