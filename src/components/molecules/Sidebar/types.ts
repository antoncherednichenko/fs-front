export interface ISidebarItem {
    title: string
    url: string
    icon: string
}
export interface ISidebarProps {
    items: ISidebarItem[]
}