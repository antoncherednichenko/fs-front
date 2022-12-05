import { Theme } from "@mui/material";

export const userInfo = (theme: Theme) => ({
    padding: '15px',
    background: theme.palette.appGreen,
    borderTop: `2px solid ${theme.palette.appBlack}`,
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
})

export const avatar = (theme: Theme, size: number) => ({
    width: size,
    height: size,
    padding: '10px',
    background: theme.palette.appBlack,
})