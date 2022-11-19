import { useRef, useState } from "react"
import { Box, Menu, MenuItem, MenuList, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Container } from "@mui/system"
import { Button, Logo, IconButton } from "components/atoms"
import { Link } from "react-router-dom"
import { header, buttons, flex } from "./styles"

const Header = () => {
    const theme = useTheme()
    const isMatchTablet = useMediaQuery('(max-width:645px)')

    const [isOpen, setIsopen] = useState(false)
    const anchorEl = useRef<HTMLElement>(null)

    const openMenu = () => {
        setIsopen(true)
    }
    const closeMenu = () => {
        setIsopen(false)
    }
    return (
        <Box 
            component="header"
            sx={header(theme)}
        >
            <Container>
                <Box sx={flex(theme)}>
                    <Logo />
                    {!isMatchTablet && (
                        <Box sx={buttons(theme)}>
                            <Button route to="/auth?type=login" variant="text">
                                Войти
                            </Button>
                            <Button route to="/auth?type=singup">
                                Зарегистрироваться
                            </Button>
                        </Box>
                    )}
                    {isMatchTablet && (
                        <Box ref={anchorEl} sx={{ position: 'relative' }}>
                            <IconButton onClick={openMenu} />
                            <Menu
                                open={isOpen}
                                anchorEl={anchorEl.current}
                                onClose={closeMenu}
                            >
                                <MenuList>
                                    <MenuItem onClick={closeMenu}>
                                        <Link to="/auth?type=singup">
                                            <Typography component="span" variant="body2">
                                                Зарегистрироваться
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={closeMenu}>
                                        <Link to="/auth?type=login">
                                            <Typography component="span" variant="body2">
                                                Войти
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    )}
                </Box>
            </Container>

        </Box>
    )
}

export { Header }