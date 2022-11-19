import { Theme } from "@mui/material";
import { IIllustrationSize } from "./types";

export const illustration = (
    theme: Theme, 
    size?: IIllustrationSize, 
    reflected?: boolean,
    centered?: boolean
) => ({
    width: size?.desctop || '100%',
    transform: reflected ? 'scale(-1, 1)' : 'none',
    margin: centered ? '0 auto' : 0,
    color: theme.palette.appBlack,
    [theme.breakpoints.down('desktop')]: {
        width: size?.laptop || size?.desctop || '100%'
    },
    [theme.breakpoints.down('laptop')]: {
        width: size?.tablet 
            || size?.laptop 
            || size?.desctop 
            || '100%'
    },
    [theme.breakpoints.down('tablet')]: {
        width: size?.mobile 
            || size?.tablet 
            || size?.laptop 
            || size?.desctop 
            || '100%'
    },
})