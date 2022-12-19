import { CoursesSkeleton, LessonsSkeleton } from "components/molecules";
import { IRouter } from "router/types";

import { PagesRoutes } from "__data__";

export const authRouterList: IRouter[] = [
    { 
        path: PagesRoutes.Courses, 
        component: CoursesSkeleton 
    },
    { 
        path: PagesRoutes.Lessons, 
        component: LessonsSkeleton, 
        routeId: 'lesson' 
    },
]