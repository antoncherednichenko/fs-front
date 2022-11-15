export interface IAppLinkProps {
    children: React.ReactNode
    type?: 'route' | 'link'
    target?: '_blank' | '_self' | '_parent' | '_top'
    href: string
}