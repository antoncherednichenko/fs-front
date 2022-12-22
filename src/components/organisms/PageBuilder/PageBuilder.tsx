import { Box } from "@mui/material"
import { GoBackBtn } from "components/atoms"
import { CardsList, PageError, Steps } from "components/molecules"
import React, { FC } from "react"
import { Trainer } from "../Trainer"
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
      case FeaturesTypes.GoBack:
        return (
          <GoBackBtn key={feature.name} />
        )
      case FeaturesTypes.Lessons:
        return (
          <Steps 
            key={feature.name}
            activeStep={feature.activeStep || 0} 
            steps={feature.items || []} 
          />
        )
      case FeaturesTypes.Trainer:
        return <Trainer key={feature.name} />
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
