import { Theme } from "@mui/material";

export const flexContainer = (
    theme: Theme, 
    gap?: number | string, 
    wrapReverse?: boolean,
    flexBetween?: boolean
) => ({
    display: 'flex',
    alignItems: 'center',
    gap: gap || '25px',
    justifyContent: flexBetween ? 'space-between' : 'unset',
    [theme.breakpoints.down('laptop')]: {
        flexDirection: wrapReverse ? 'column-reverse' : 'column',
        alignItems: 'unset',
    }
})