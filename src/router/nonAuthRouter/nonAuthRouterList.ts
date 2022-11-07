import { AuthPage, MainLending } from "../../pages";
import { IRouter } from "../types";

export const nonAuthRouterList: IRouter[] = [
    { path: '/', component: MainLending },
    { path: '/auth', component: AuthPage }
]