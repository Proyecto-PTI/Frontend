import { useEffect, useState } from "react";
import styles from "./EditAccount.module.css";
import WebHeader from "../components/WebHeader.jsx"; 
import UserHeader from "../components/UserHeader.jsx";
import NavBar from "../components/NavBar.jsx"; 
import Background from "../components/Background.jsx";  


function EditAccount() {

  const [user, setUser] = useState(null); 
  
  
    // Función para obtener el usuario actual
    const fetchCurrentUser = async () => {
      const response = await fetch("http://localhost:5000/api/current-user");
      if (!response.ok) throw new Error("Failed to fetch current user");
      return await response.json();
    };
  
    // Cargar usuario cuando se monte el componente
    useEffect(() => {
      const fetchDashboardData = async () => {
        try {
          const currentUser = await fetchCurrentUser();
          setUser(currentUser); // Guarda el usuario en el estado
        } catch (error) {
          console.error("Error fetching current user:", error);
        }
      };
  
      fetchDashboardData();
    }, []);


  return (
    <section className={styles.editAccount}>
      <WebHeader subtitle="Account Settings" />
      <UserHeader user={user} />
      <PasswordChangeSection />
      <Background/>
    </section>
  ); 
}



function UserDetails() {
  const [userRole, setUserRole] = useState("System Administrator User");
  const [email, setEmail] = useState("pepe.admin@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+34 666 66 66 66");

  return (
    <>
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
    </>
  );
}
function PasswordChangeSection() {
  return (
    <>
    <div className={styles.frameContainer}>
    <NavBar />
      <div className={styles.div5}> 
        <h3 className={styles.changePassword}>Change Password</h3>
        <input
          type="password"
          placeholder="yourcurrentpassword..."
          className={styles.passwordbox}
        />
        <input
          type="password"
          placeholder="yournewpassword..."
          className={styles.newpasswordbox}
        />
        <input
          type="password"
          placeholder="confirmyournewpassword..."
          className={styles.confirmnewpasswordbox}
        />
        </div>
        <button className={styles.updatepasswordbutton}>Update Password</button>
     </div>
     </>
  );
}

export default EditAccount;
