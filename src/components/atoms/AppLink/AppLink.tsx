import { Link as MuiLink } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"
import { IAppLinkProps } from "./types"

const AppLink: FC<IAppLinkProps> = ({
    children,
    type = 'link',
    target = '_blank',
    href,
}) => {
    if (type === 'link') {
        return (
            <MuiLink 
                component="a"
                href={href}
                target={target}
            >
                {children}
            </MuiLink>
        )
    }
    return (
        <MuiLink>
            <Link to={href}>{children}</Link> 
        </MuiLink>
    ) 
    
    
}

export { AppLink }