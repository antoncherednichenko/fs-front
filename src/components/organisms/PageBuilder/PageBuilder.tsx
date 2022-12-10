import { Box } from "@mui/material"
import { CardsList, PageError } from "components/molecules"
import React, { FC } from "react"
import { FeaturesTypes, IFeature, IPageBuilderProps } from "./types"

const PageBuilder: FC<IPageBuilderProps> = ({ features, error }) => {
  const featureRender = (feature: IFeature): React.ReactElement => {
    switch(feature.type) {
      case FeaturesTypes.Cards:
        return (
          <Box key={feature.name} sx={feature.settings}>
            <CardsList 
              items={feature.items || []} 
              direction={feature.direction}
            />
          </Box>
        )
      default:
        return <PageError />
    }
  }

  return (
    <Box>
      {
        features 
        && features.length > 0 
        && features.map(featureRender)
      }
      {error && <PageError errorMessage={error} />}
    </Box>
  )
}

export { PageBuilder }
