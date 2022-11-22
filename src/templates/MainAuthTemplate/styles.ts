import { Theme } from "@mui/material";

export const mainContainer = (theme: Theme) => ({
    background: theme.palette.cream,
})

export const sidebarContainer = (theme: Theme) => ({
    width: '100%',
    maxWidth: 250,
    padding: '25px 15px',
    height: '100vh',
    borderRight: `2px solid ${theme.palette.appBlack}`,
})

export const contentContainer = (theme: Theme) => ({
    flexGrow: 2,
    padding: '25px 0',
    maxHeight: '100vh',
    overflowY: 'auto',   
})