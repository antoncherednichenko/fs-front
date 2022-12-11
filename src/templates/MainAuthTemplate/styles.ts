import { Theme } from "@mui/material";

export const mainContainer = (theme: Theme) => ({
    background: theme.palette.cream,
})

export const sidebarContainer = (theme: Theme) => ({
    width: '100%',
    maxWidth: 250,
    height: '100vh',
    borderRight: `2px solid ${theme.palette.appBlack}`,
})

export const contentContainer = (theme: Theme) => ({
    flexGrow: 2,
    paddingTop: '95px',
    borderTop: `2px solid ${theme.palette.appBlack}`,
    maxHeight: '100vh',
    overflowY: 'auto',   
})