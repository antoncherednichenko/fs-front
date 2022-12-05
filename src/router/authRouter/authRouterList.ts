import { IRouter } from "router/types";

import { Courses } from "pages"
import { PagesRoutes } from "__data__";

export const authRouterList: IRouter[] = [
    { path: PagesRoutes.Courses, component: Courses }
]