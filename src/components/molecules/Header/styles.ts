import { Theme } from "@mui/material";

export const header = (theme: Theme) => ({
    background: theme.palette.cream,
    borderBottom: `2px solid ${theme.palette.appBlack}`,
    padding: '15px 10px',
})

export const flex = (theme: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    
})

export const buttons = (theme: Theme) => ({
    display: 'flex',
    gap: '10px',
    width: 'max-content',
})

export const menu = (theme: Theme) => ({
    background: theme.palette.appBlue,
    position: 'absolute',
    left: '-45px',
    bottom: '-50px',
    padding: '10px',
    border: `2px solid ${theme.palette.appBlack}`
})