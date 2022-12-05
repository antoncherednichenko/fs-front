import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { PagesRoutes } from "__data__"
import classes from './styles.module.scss'

const Logo = () => {
    return (
        <Link to={PagesRoutes.Main}>
            <Typography
                variant="h5"
                className={classes.logo}
            >
                <span className={classes.purple}>{'<'}</span>
                ez-front
                <span className={classes.purple}>{' />'}</span>
            </Typography>
        </Link>
        
    )
}

export { Logo }