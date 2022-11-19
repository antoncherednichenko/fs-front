import illustrations from "assets/illustrations"

export type TIllustrationKeys = keyof typeof illustrations

export interface IIllustrationSize {
    desctop: number
    laptop?: number
    tablet?: number
    mobile?: number
}

export interface IIllustrationProps {
    name: TIllustrationKeys
    size?: IIllustrationSize
    reflected?: boolean
    centered?: boolean
}