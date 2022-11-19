import { Theme } from "@mui/material";

export const bordered = (theme: Theme, backgroundColor?: string) => ({
    background: backgroundColor || 'none',
    border: `2px solid ${theme.palette.appBlack}`,
    borderTop: 'none',  
    py: '50px',
    [theme.breakpoints.down('laptop')]: {
        py: '25px',
    },
})

export const column = (theme: Theme) => ({
    width: '50%',
    [theme.breakpoints.down('laptop')]: {
        width: '100%',
    }
})