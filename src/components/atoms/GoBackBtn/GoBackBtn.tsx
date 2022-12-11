import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { renderIcon } from "utils"
import { IconsNames } from "__data__"
import { Button } from "../Button"
import { goBackContainer, flexContainer } from "./styles"

const GoBackBtn = () => {
  const navigate = useNavigate()
  return (
    <Box sx={goBackContainer()}>
      <Button 
        variant="contained"
        onClick={() => navigate(-1)}
      >
        <Box sx={flexContainer()}>
          {renderIcon(IconsNames.ArrowLeft)}
          <Typography sx={{ p: 0 }} component="span">
            Назад
          </Typography>
        </Box>
      </Button>
    </Box>
  )
}

export { GoBackBtn }