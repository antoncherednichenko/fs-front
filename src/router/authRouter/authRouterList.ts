import { IRouter } from "router/types";

import { PagesRoutes } from "__data__";
import { Courses, Lessons } from "pages"

export const authRouterList: IRouter[] = [
    { path: PagesRoutes.Courses, component: Courses },
    { path: PagesRoutes.Lessons, component: Lessons },
]