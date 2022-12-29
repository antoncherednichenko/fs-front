import { Theme } from "@mui/material";

export const tools = (theme: Theme) => ({
    border: `2px solid ${theme.palette.appBlack}`,
    background: theme.palette.appGreen,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})