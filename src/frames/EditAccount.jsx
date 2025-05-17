import React, { useEffect, useState } from "react";
import styles from "./EditAccount.module.css";
import WebHeader from "../components/WebHeader.jsx"; 
import UserHeader from "../components/UserHeader.jsx";
import NavBar from "../components/NavBar.jsx"; 
import Background from "../components/Background.jsx";
import {Link} from "react-router-dom";

function EditAccount() {

  const [user, setUser] = useState(null); 

  const fetchCurrentUser = async () => {
    const response = await fetch("http://localhost:5000/api/current-user");
    if (!response.ok) throw new Error("Failed to fetch current user");
    return await response.json();
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const currentUser = await fetchCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchDashboardData();
  }, []);

  const saveChanges = async () => {
    const response = await fetch("http://localhost:5000/api/update-user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      console.error("Error saving changes");
    } else {
      console.log("Changes saved!");
    }
  };

  return (
    <section className={styles.editAccount}>
      <WebHeader subtitle="Edit Account" />


      <Background />
      <NavBar />
      <UserProfile />

      {user && <UserDetails user={user} setUser={setUser} />}
      <PasswordChangeSection />
      <button className={styles.updatepasswordbutton} onClick={saveChanges}>
        Save Changes
      </button>
      <Link to="/sign-up">
        <button className={styles.updatepasswordbutton}>
          Add New Account
        </button>
      </Link>


    </section>
  );
}

function Header() {
  return (
    <>
      <h1 className={styles.facepass}>FACEPASS</h1>
      <h2 className={styles.editAccount2}>Edit Account</h2>
      <h2 className={styles.editAccount2}>Add new Account</h2>

    </>
  );
}

function UserProfile() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.userimg}>
        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
      </svg>
    </>
  );
}

function UserDetails({ user, setUser }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [userRole, setUserRole] = useState(user?.role || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");

  useEffect(() => {
    if (user) {
      setUserName(user.name || "");
      setUserRole(user.role || "");
      setEmail(user.email || "");
      setPhoneNumber(user.phoneNumber || "");
    }
  }, [user]);

  const handleChange = (field, value) => {
    const updatedUser = { ...user, [field]: value };
    setUser(updatedUser);
  };

  return (
    <>
      <form className={styles.form}>
        <div className={styles.div2}>
          <label className={styles.userName}>User Name</label>
          <input
            id="name"
            type="text"
            className={styles.namebox}
            value={userName}
            placeholder="Enter the user name..."
            onChange={(e) => {
              setUserName(e.target.value);
              handleChange("name", e.target.value);
            }}
          />
        </div>
        <div className={styles.div3}>
          <label className={styles.userRole}>System Role</label>
          <select
            className={styles.roleSelect}
            value={userRole}
            onChange={(e) => {
              setUserRole(e.target.value);
              handleChange("role", e.target.value);
            }}
          >
            <option value="">Select Role</option>
            <option value="admin">Administrator</option>
            <option value="user">Standard User</option>
          </select>
        </div>
        <div className={styles.div4}>
          <label className={styles.userEmail}>Email</label>
          <input
            id="email"
            type="text"
            className={styles.emailbox}
            value={email}
            placeholder="Enter the user email..."
            onChange={(e) => {
              setEmail(e.target.value);
              handleChange("email", e.target.value);
            }}
          />
        </div>
        <div className={styles.div5}>
          <label className={styles.userPhoneNumber}>Phone Number</label>
          <input
            id="number"
            type="text"
            className={styles.numberbox}
            value={phoneNumber}
            placeholder="Enter the user phone number..."
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              handleChange("phoneNumber", e.target.value);
            }}
          />
        </div>
      </form>
    </>
  );
}

function PasswordChangeSection() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handlePasswordChange = (e, setter) => setter(e.target.value);

  return (
    <>
      <div className={styles.div6}>
        <h3 className={styles.changePassword}>Change Password</h3>
        <input
          type="password"
          placeholder="yourcurrentpassword..."
          className={styles.passwordbox}
          value={currentPassword}
          onChange={(e) => handlePasswordChange(e, setCurrentPassword)}
        />
        <input
          type="password"
          placeholder="yournewpassword..."
          className={styles.newpasswordbox}
          value={newPassword}
          onChange={(e) => handlePasswordChange(e, setNewPassword)}
        />
        <input
          type="password"
          placeholder="confirmyournewpassword..."
          className={styles.confirmnewpasswordbox}
          value={confirmNewPassword}
          onChange={(e) => handlePasswordChange(e, setConfirmNewPassword)}
        />
      </div>
    </>
  );
}

export default EditAccount;
