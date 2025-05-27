import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './providers/AuthContext'
import router from './router.jsx'


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

// registerSW();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
)
