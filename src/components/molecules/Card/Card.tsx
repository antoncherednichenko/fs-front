import { Card as MUICard, CardActions, CardContent, Typography } from "@mui/material"
import { Button } from "components/atoms"
import { FC } from "react"
import { card } from "./styles"
import { ICardProps } from "./types"

const Card: FC<ICardProps> = ({ 
  title,
  description, 
  buttons,
  width = '650px' 
}) => {
  return (
    <MUICard sx={card(width)} variant="outlined">
      <CardContent>
        {title && (
          <Typography variant="h4">
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body2">
            {description}
          </Typography>
        )}
      </CardContent>
      {buttons && buttons.length && (
        <CardActions>
          {
            buttons.map((button, i) => (
              <Button key={i} {...button}>
                {button.buttonText}
              </Button>
            ))
          }
        </CardActions>
      )}
    </MUICard>
  )
}

export { Card }
