import { Box, useTheme } from "@mui/material"
import { FirstSection, SecondSection, ThirdSection } from "components/molecules"
import { wrapper } from "./styles"

const MainLending = () => {
    const theme = useTheme()
    return (
        <Box
            sx={wrapper(theme)}
        >
            <FirstSection />
            {/* <SecondSection />
            <ThirdSection /> */}
        </Box>
    )
}

export { MainLending }