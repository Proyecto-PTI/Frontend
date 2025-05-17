import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthProvider} from "./contexts/AuthContext.jsx";
import {UserProvider} from "./contexts/UserContext.jsx";
import {ChangePasswordProvider} from "./contexts/ChangePasswordContext.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <UserProvider>
                <ChangePasswordProvider>
                    <App />
                </ChangePasswordProvider>
            </UserProvider>
        </AuthProvider>
    </StrictMode>
)
