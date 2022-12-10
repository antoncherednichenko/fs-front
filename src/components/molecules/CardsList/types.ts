import { IFeatureItem } from "components/organisms/PageBuilder/types";

export type TDirections = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export interface ICardsListProps {
    items: IFeatureItem[]
    direction?: TDirections
}