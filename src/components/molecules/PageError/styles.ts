import { Theme } from "@mui/material";

export const errorContainer = (theme: Theme) => ({
    width: '100%',
    height: '100vh',
    position: 'relative',
})

export const errorCard = (theme: Theme) => ({
    width: '100%',
    maxWidth: '450px',
    border: `2px solid ${theme.palette.appBlack}`,
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    top: '50%',
    left: '50%',
})