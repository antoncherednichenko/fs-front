export interface IRouter {
    path: string
    component: React.FC,
    routeId?: string
}