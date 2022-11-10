import { FC } from 'react'
import { Button as MuiButton, Typography } from '@mui/material'
import { IButtonProps, TButtonvariant } from './types'
import { Link } from 'react-router-dom'

const Button: FC<IButtonProps> = ({ 
    children,
    variant = 'otlined',
    onClick = () => {},
    disabled = false,
    fullWidth = false,
    route = false,
    to = '/',
}) => {
    const clickHandler = () => {
        if(route) return
        onClick()
    }
    return (
        <MuiButton 
            onClick={clickHandler} 
            variant={variant as TButtonvariant}
            disabled={disabled}
            fullWidth={fullWidth}
        >
            {!route && (
                <Typography>
                    {children}
                </Typography>
            )}
            {route && (
                <Link to={to}>
                    <Typography>
                        {children}
                    </Typography>
                </Link>
            )}
        </MuiButton>
    )
}

export { Button }