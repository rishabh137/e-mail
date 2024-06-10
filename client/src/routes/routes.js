import { lazy } from "react"

const Signup = lazy(() => import('../components/Signup'))
const Main = lazy(() => import('../pages/Main'))
const Emails = lazy(() => import('../components/Emails'))
const ViewEmail = lazy(() => import("../components/ViewEmail"))

const routes = {
    signup: {
        path: '/',
        element: Signup
    },
    main: {
        path: '/',
        element: Main
    },
    emails: {
        path: '/mail',
        element: Emails
    },
    invalid: {
        path: '*',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmail
    }
}

// export const routes
export { routes }