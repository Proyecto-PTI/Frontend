import React, { useEffect, useState } from 'react';
import styles from './EntryPoints.module.css';
import { Link } from 'react-router-dom';
import Background from "../components/Background.jsx"; 
import WebHeader from "../components/WebHeader.jsx"; 
import NavBar from "../components/NavBar.jsx"; 
import EntryCard from '../components/EntryCard';

const EntryPoints = () => {
  const [entries, setEntries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
  const fetchEntries = async () => {
    try {
      const response = await fetch('http://localhost:8000/entries');
      if (!response.ok) throw new Error("Failed to fetch entries");
      const data = await response.json();

      // Transformar el objeto en un array de entradas
      const parsedEntries = Object.values(data).map(entry => ({
        id: entry.id,
        aula: entry.code,
        entryLocation: entry.location,
      }));

      setEntries(parsedEntries);
      setFiltered(parsedEntries);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  fetchEntries(); 
}, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFiltered(
      entries.filter(entry => 
        entry.aula.toLowerCase().includes(term) ||
        entry.entryLocation.toLowerCase().includes(term)
      )
    );
  };

  return (
    <div className={styles.container}>
      <Background />
      <NavBar />
      <WebHeader subtitle="View Entry Points" />
      <div className={styles.content}>
        <div className={styles.topBar}>
          <Link to="/add-entry">
            <button className={styles.addUserButton}>
              <span className={styles.addUserText}>+ Add a New Entry</span>
            </button>
          </Link>
          <p className={styles.userCount}>
            The total number of Entries is{" "}
            <span className={styles.countHighlight}>{entries.length}</span>
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
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
          </svg>
        </div>
        <div className={styles.userList}>
          {filtered.map(entry => (
            <EntryCard key={entry.id} id={entry.id} aula={entry.aula} entryLocation={entry.entryLocation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntryPoints;
