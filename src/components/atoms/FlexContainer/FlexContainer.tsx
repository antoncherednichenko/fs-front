import { useTheme } from "@emotion/react"
import { Theme } from "@mui/material"
import { Box } from "@mui/system"
import { FC, PropsWithChildren } from "react"
import { flexContainer } from "./styles"

const FlexContainer: FC<PropsWithChildren> = ({children}) => {
    const theme = useTheme() as Theme
    return (
        <Box sx={flexContainer(theme)}>
            {children}
        </Box>
    )
}

export { FlexContainer }