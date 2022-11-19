import { Theme } from "@mui/material";

export const flexContainer = (theme: Theme, gap?: number) => ({
    display: 'flex',
    alignItems: 'center',
    gap: gap || '25px',
    [theme.breakpoints.down('laptop')]: {
        flexDirection: 'column',
        alignItems: 'unset',
    }
})