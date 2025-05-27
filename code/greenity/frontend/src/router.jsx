import Admin from './Admin.jsx'
import App from './App.jsx'
import GardenItem from './pages/GardenPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './login'
import SignUp from './SignUp'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/item/:id',
        element: <GardenItem />
    },
    {
        path: '/dashboard',
        element: (
            <Admin>
                <Dashboard />
            </Admin>
        )
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
])

export default router;