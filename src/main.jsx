import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthProvider} from "../../../Frontend/src/contexts/AuthContext.jsx";
import {UserProvider} from "../../../Frontend/src/contexts/UserContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
          <UserProvider>
            <App />
          </UserProvider>
      </AuthProvider>
  </StrictMode>
)
