import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar.jsx'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importar Router, Routes y Route

//website frames imports 
import AccessAlerts from './frames/AccessAlerts';
import AccessLogs from './frames/AccessLogs';
import AddEntry from './frames/AddEntryPoint';
import AddUser from './frames/AddUser';
import AlertSettings from './frames/AlertSettings';
import Dashboard from './frames/Dashboard';
import EditAccount from './frames/EditAccount';
import EntryPoints from './frames/EntryPoints';
import LogIn from './frames/LogIn';
import SignUp from './frames/SignUp';
import SystemEntry from './frames/SystemEntry';
import SystemSettings from './frames/SystemSettings';
import UserProfile from './frames/UserProfile';
import Users from './frames/Users';




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div >
        {/* Barra de navegación */}
        {/* <NavBar /> */}



        {/* Rutas */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/access-alerts" element={<AccessAlerts />} />
          <Route path="/access-logs" element={<AccessLogs />} />
          <Route path="/add-entry" element={<AddEntry />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/alert-settings" element={<AlertSettings />} />
          <Route path="/edit-account" element={<EditAccount />} />
          <Route path="/entry-points" element={<EntryPoints />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/system-entry/:aula" element={<SystemEntry />} />
          <Route path="/system-settings" element={<SystemSettings />} />
          <Route path="/users/:userId" element={<UserProfile />} />
          <Route path="/users" element={<Users />} />

          {/* Ruta predeterminada (página no encontrada) */}
          <Route path="/" element={<h1>Bienvenido a nuestra web de pti</h1>} />
        </Routes>
      </div>
    </Router>
  ); 
}

export default App
