export const ApiRoutes = {
    baseUrl: 'http://localhost:5000/api',
    auth: {
        login: '/auth/login',
        singup: '/auth/singup',
        getUser: '/auth/get-user'
    },
    pages: {
        getPage: (page: string) => `/pages/get-page?page=${page}`
    }
}

export enum Pages {
    Courses = 'courses',
    Progress = 'progress',
    Sandbox = 'sanbox',
    Textbook = 'textbook',
    Sidebar = 'sidebar'
}

export enum PagesRoutes {
    Courses = '/courses',
    Progress = '/progress',
    Sandbox = '/sanbox',
    Textbook = '/textbook',
    Main = '/',
}