import { Theme } from "@mui/material";

export const sidebarItem = (theme: Theme, isActive: boolean) => ({
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    width: '100%',
    padding: '15px',
    letterSpacing: '2px',
    fontSize: 16,
    fontWeight: 500,
    background: isActive ? theme.palette.lightPurple : 'none',
    '&:hover': {
        color: isActive ? theme.palette.appBlack : theme.palette.primaryPurple,
        textDecoration: 'none',
    },
})

export const divider = (theme: Theme) => ({
    borderColor: theme.palette.appBlack,
})

export const stack = (theme: Theme) => ({
    borderTop: `2px solid ${theme.palette.appBlack}`,
    borderBottom: `2px solid ${theme.palette.appBlack}`,
})