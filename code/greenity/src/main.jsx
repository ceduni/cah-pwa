import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import GardenItem from './components/GardenPage.jsx'

function registerSW() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then((registration) => {
                    console.log('Service worker ready! Scope: ', registration.scope);
                    registration.update();
                })
                .catch((error) => {
                    console.log('Service Worker registration failed: ', error);
                });
        });
    }
}

registerSW();

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/item/:id',
        element: <GardenItem />
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
