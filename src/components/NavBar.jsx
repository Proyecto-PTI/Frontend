import React from 'react';
import { Link } from 'react-router-dom';

//stateless component 
const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
    <ul
      style={{
        listStyle: 'none',
          paddingLeft: '0',
          margin: '0',
          display: 'flex',
          flexDirection: 'column',  // Cambia de 'row' a 'column' para hacer la nav vertical
          gap: '15px',  // Espacio entre los elementos
      }}
    >
      <li><Link style={{ color: 'white' }} to="/dashboard">Dashboard</Link></li>
      <li><Link style={{ color: 'white' }} to="/access-alerts">Access Alerts</Link></li>
      <li><Link style={{ color: 'white' }} to="/access-logs">Access Logs</Link></li>
      <li><Link style={{ color: 'white' }} to="/add-entry">Add Entry</Link></li>
      <li><Link style={{ color: 'white' }} to="/add-user">Add User</Link></li>
      <li><Link style={{ color: 'white' }} to="/alert-settings">Alert Settings</Link></li>
      <li><Link style={{ color: 'white' }} to="/edit-account">Edit Account</Link></li>
      <li><Link style={{ color: 'white' }} to="/entry-points">Entry Points</Link></li>
      <li><Link style={{ color: 'white' }} to="/login">Log In</Link></li>
      <li><Link style={{ color: 'white' }} to="/signup">Sign Up</Link></li>
      <li><Link style={{ color: 'white' }} to="/system-entry">System Entry</Link></li>
      <li><Link style={{ color: 'white' }} to="/system-settings">System Settings</Link></li>
      <li><Link style={{ color: 'white' }} to="/user-profile">User Profile</Link></li>
      <li><Link style={{ color: 'white' }} to="/users">Users</Link></li>
    </ul>
  </nav>
  );
};

export default NavBar;



