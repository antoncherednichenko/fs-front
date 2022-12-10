import { Box, Typography, useTheme } from "@mui/material"
import { Button } from "components/atoms"
import { FC } from "react"
import { errorCard, errorContainer } from "./styles"
import { IPageErrorProps } from "./types"

const PageError: FC<IPageErrorProps> = ({ errorMessage }) => {
  const theme = useTheme()
  const reload = () => {
    location.reload()
  }
  return (
    <Box sx={errorContainer(theme)}>
      <Box sx={errorCard(theme)}>
        <Typography variant="h3">
          Упс! Что-то пошло не так
        </Typography>
        {errorMessage && (
          <Typography width="100%" textAlign="left" variant="body2">
            {errorMessage}
          </Typography>
        )}
        <Box alignSelf="flex-start">
          <Button onClick={reload} variant="outlined">
            Обновить страницу
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export { PageError }