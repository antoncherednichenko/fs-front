import { IRouter } from "router/types";

import { Courses } from "pages"

export const authRouterList: IRouter[] = [
    { path: '/courses', component: Courses }
]