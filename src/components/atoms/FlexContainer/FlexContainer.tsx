import { useTheme } from "@emotion/react"
import { Theme } from "@mui/material"
import { Box } from "@mui/system"
import { FC, PropsWithChildren } from "react"
import { flexContainer } from "./styles"
import { IFlexContainerProps } from "./types"

const FlexContainer: FC<PropsWithChildren<IFlexContainerProps>> = ({
    children, 
    gap, 
    wrapReverse, 
    flexBetween
}) => {
    const theme = useTheme() as Theme
    return (
        <Box 
            sx={flexContainer(theme, gap, wrapReverse, flexBetween)}
        >
            {children}
        </Box>
    )
}

export { FlexContainer }