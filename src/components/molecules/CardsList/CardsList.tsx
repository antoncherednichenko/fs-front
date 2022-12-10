import { Grid } from "@mui/material"
import { FC } from "react"
import { Card } from "components/molecules/Card"
import { ICardsListProps } from "./types"

const CardsList: FC<ICardsListProps> = 
  ({ items, direction }) => {
    return (
      <Grid container direction={direction} spacing={2}>
        {items.length > 0 && (
          items.map((item, i) => (
            <Grid key={i} item>
              <Card {...item} />
            </Grid>
          ))
        )}
      </Grid>
    )
  }

export { CardsList }