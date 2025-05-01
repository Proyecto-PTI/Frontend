import { useEffect, useState } from "react";
import styles from './UserHeader.module.css';  

function UserProfile({ user })  {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user?.name) {
      setUserName(user.name);
    }
  }, [user]);

  return (
    <>
      <div className={styles.div}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.userimg}>
          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
        </svg>
        <div  className={styles.usernameWrapper}>
          <input type="text" className={styles.username} value={userName} onChange={(e) => setUserName(e.target.value)} aria-label="User name"
          />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d60f8b3faacf05ba644f410ffece2f0e8e6dc912?placeholderIfAbsent=true&apiKey=61a77727fee44ba9b3bc5c61b3d4dc53" alt="Edit icon" className={styles.penimg} />
        </div>
      </div>
    </>
  );
}

function UserDetails({ user })  {
  const [userRole, setUserRole] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (user) {
      setUserRole(user.role || "");
      setEmail(user.email || "");
      setPhoneNumber(user.number || "");
    }
  }, [user]);

  return (
    <>
    <div className={styles.propierties}>

      <div className={styles.div2}>
          <label className={styles.userRole} htmlFor="userRole">
            User Role
          </label>
          <select
            id="userRole"
            className={styles.userrolebox}
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="System Administrator User">
              System Administrator User
            </option>
            <option value="System User">System User</option>
          </select>
        </div>
        <div className={styles.div3}>
          <label className={styles.email} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={styles.emailbox}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.div4}>
          <label className={styles.phoneNumber} htmlFor="phoneNumber">
            Phone Number
          </label> 
          <input
            id="phoneNumber"
            type="tel"
            className={styles.numberbox}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

    </div>
    </>
  );
}

function UserHeader({ user }) {
  return (
    <div className={styles.container}>
      <UserProfile user={user} />
      <UserDetails user={user} />
    </div>
  );
}

export default UserHeader;