import { ICardProps } from "components/molecules/Card/types"
import { TDirections } from "components/molecules/CardsList/types"
import { ISidebarItem } from "components/molecules/Sidebar/types"

export enum FeaturesTypes {
    Cards = 'cards',
    Lessons = 'lessons',
    GoBack = 'goBack',
}

export interface IFeatureItem 
    extends ICardProps, 
    ISidebarItem 
    {}

export interface IFeatureSettings {
    margin?: string
    marginTop?: string
    marginRight?: string
    marginBottom?: string
    marginLeft?: string

    padding?: string
    paddingTop?: string
    paddingRight?: string
    paddingBottom?: string
    paddingLeft?: string

    width?: string
    maxWidth?: string
}

export interface IFeature {
    name: string
    type: FeaturesTypes
    items?: IFeatureItem[]
    settings?: IFeatureSettings
    direction?: TDirections
}

export interface IPageBuilderProps {
    features: IFeature[] | null,
    error: string | null
}