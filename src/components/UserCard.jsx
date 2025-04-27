import React from "react";
import styles from "./ViewUsers.module.css";
import { Link } from "react-router-dom";

function UserCard({ name, email, role, profileImage }) {
    return (
      <article className={styles.user1Box}>
        <div className={styles.userCardContent}>
          
          <div className={styles.userInfoGroup}>
            <div className={styles.imageColumn}>
              <img
                src={profileImage}
                alt={`${name} profile picture`}
                className={styles.profileImage}
              />
            </div>
  
            <div className={styles.detailsColumn}>
              <div className={styles.userDetails}>
                <div className={styles.userTextInfo}>
                  <h2 className={styles.userName}>{name}</h2>
                  <p className={styles.userEmail}>{email}</p>
                </div>
                <div className={styles.roleBadge}>{role}</div>
              </div>
            </div>
          </div>
  
          <div className={styles.actionColumn}>
            <Link to="/user-profile">
            <button className={styles.viewProfileButton}>View profile</button>
            </Link>
          </div>
          
        </div>
      </article>
    );
  }
  

export default UserCard;
