import { ISidebarItem } from "components/molecules/Sidebar/types"

export interface ISidebarFeature {
    name: string
    type: string
    items: ISidebarItem[]
}
export interface ISidebarPage {
    id: number
    pageName: string
    features: ISidebarFeature[]
}