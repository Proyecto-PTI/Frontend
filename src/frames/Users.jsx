import React, { useEffect, useState } from 'react';
import styles from './Users.module.css';
import { useNavigate, Link } from 'react-router-dom';
import Background from "../components/Background.jsx"; 
import WebHeader from "../components/WebHeader.jsx"; 
import NavBar from "../components/NavBar.jsx"; 
import UserCard from '../components/UserCard';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users"); // o la URL correcta
        if (!res.ok) throw new Error("Error fetching users");
        const data = await res.json();
        setUsers(data);
        setFiltered(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
  
    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFiltered(users.filter(user => user.name.toLowerCase().includes(term)));
  };

  const handleAddUser = () => navigate('/add-user');










  return (
    <div className={styles.container}>
      <Background />
      <NavBar />
      <WebHeader subtitle="View Users"/>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <Link to="/add-user">
                <button className={styles.addUserButton}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/309563390de6fd40574f879507a46f21120cb614?placeholderIfAbsent=true&apiKey=61a77727fee44ba9b3bc5c61b3d4dc53"
                    alt="Add user icon"
                    className={styles.addUserIcon}
                  />
                  <span className={styles.addUserText}>Add a New User </span>
                </button>
            </Link>
            <p className={styles.userCount}>
              The total number of Users is{" "}
              <span className={styles.countHighlight}>{users.length}</span>{" "}
            </p>
        </div>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.searchIcon}>
                  <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clip-rule="evenodd" />
                </svg>
        </div>
        <div className={styles.userList}>
        {filtered.map(user => (
            <UserCard key={user.id} id={user.id} name={user.name} email={user.email} role={user.role} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Users;
