import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./UserProfile.module.css";
import WebHeader from "../components/WebHeader.jsx";
import LabelComponent from "../components/LabelComponent.jsx";
import AddImages from "../components/AddImages.jsx";
import NavBar from "../components/NavBar.jsx";
import Background from "../components/Background.jsx"; 
import Access from "../components/Access.jsx";

function UserProfile() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [labels, setLabels] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  
useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/${userId}`);
      if (!res.ok) throw new Error("Failed to fetch user data");
      const data = await res.json();

      setUserName(data.name || '');
      setUserRole(data.role || '');
      setUserEmail(data.email || '');
      setUserPhoneNumber(data.phoneNumber || '');
      setLabels(data.labels || []);
      
    } catch (error) {
      console.error(error);
      setMessage("Error fetching user data");
      setMessageType("error");
    }
  };

  fetchUser();
}, [userId]);

  // Estados para manejar los mensajes de éxito o error
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' o 'error'

  const handleUpdateUser = async () => {
    if (!userName || !userEmail) {
      setMessage("Please fill in required fields.");
      setMessageType("error");
      return;
    }
  
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("userRole", userRole);
    formData.append("userEmail", userEmail);
    formData.append("userPhoneNumber", userPhoneNumber);
    labels.forEach((label, index) => {
      formData.append(`labels[${index}]`, label.text);
    });
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });
  
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`,  {
        method: "PUT", // o PATCH
        body: formData,
      });
  
      if (response.ok) {
        setMessage("User updated successfully!");
        setMessageType("success");
      } else {
        setMessage("Failed to update user.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Update error", error);
      setMessage("Error updating user.");
      setMessageType("error");
    }
  };

  return (
    <div className={styles.frameContainer}>
      <NavBar />
      <Background />
      <section className={styles.addUser}>
        <WebHeader subtitle="View User Profile" />

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.userimg}>
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
          </svg>
        </div>

        <form className={styles.form}>
          <div className={styles.div2}>
            <label className={styles.userName} >
              User Name
            </label>
            <input
              id="name"
              type="text"
              className={styles.namebox}
              placeholder="Enter the user name..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={styles.div3}>
            <label className={styles.userRole} >
              System Role 
            </label>
            <select
              className={styles.roleSelect}
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="admin">Administrator</option>
              <option value="user">Standard User</option>
            </select>
          </div>
          <div className={styles.div4}>
            <label className={styles.userEmail} >
              Email
            </label>
            <input
              id="email"
              type="text"
              className={styles.emailbox}
              placeholder="Enter the user email..."
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className={styles.div5}>
            <label className={styles.userPhoneNumber} >
              Phone Number
            </label>
            <input
              id="number"
              type="text"
              className={styles.numberbox}
              placeholder="Enter the user phone number..."
              value={userPhoneNumber}
              onChange={(e) => setUserPhoneNumber(e.target.value)}
            />
          </div>
        </form>

        <LabelComponent subtitle="Entry Labels" initialLabels={labels} onLabelsChange={setLabels} />
        <AddImages onImagesSelected={setSelectedImages} />


          <div className={styles.buttonmessage}>
          {/* Mostrar mensaje de éxito o error */}
          {message && (
            <div className={`${styles.message} ${styles[messageType]}`}>
              {message}
            </div>
          )}
            <button
              className={styles.createUser}
              onClick={handleUpdateUser}
              type="button"
            >
              Save Changes
            </button>

          <div className={styles.records}>
            <h4>Latest Access logs</h4>
            <Access statusFilter="" usernameFilter={userName} codeFilter="" dateFilter="" groupByDate={false} limit=""/>
          </div>

          </div>

      </section>
    </div>
  );
}

export default UserProfile;
