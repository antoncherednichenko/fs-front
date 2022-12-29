
export type TTabValue = string | number

export interface ITabItem {
    value: TTabValue
    label: string
}

export interface ITabsProps {
    items: ITabItem[]
    onChange: (value: TTabValue) => void
    currentValue: TTabValue
}