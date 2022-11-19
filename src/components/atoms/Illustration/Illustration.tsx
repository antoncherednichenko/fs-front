import { FC } from "react"
import { Box, useTheme } from "@mui/material"
import illustrations from "assets/illustrations"
import { IIllustrationProps } from "./types"
import { illustration } from "./styles"

const Illustration: FC<IIllustrationProps> = ({ name, size, reflected, centered }) => {
    const theme = useTheme()
    const CurrentIllustration = illustrations[name]
    return (
        <Box sx={illustration(theme, size, reflected, centered)}>
            <CurrentIllustration />
        </Box>
    )
}

export { Illustration }