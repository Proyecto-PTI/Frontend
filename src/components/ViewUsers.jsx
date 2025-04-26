import React, { useState, useMemo } from "react";
import styles from "./ViewUsers.module.css";
import UserCard from "./UserCard";
import SearchBox from "./SearchBox";
import AddUserButton from "./AddUserButton";

// vector con datos de ejemplo 
const mockUsers = [
  {
    id: 1,
    name: "Pepe Admin.",
    email: "pepe.admin.@gmail.com",
    role: "System Administrator User",
    profileImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/77f4bdf909909b824ae549b22a37d02cf6df7f31?placeholderIfAbsent=true&apiKey=61a77727fee44ba9b3bc5c61b3d4dc53",
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria.garcia@gmail.com",
    role: "Content Manager",
    profileImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/77f4bdf909909b824ae549b22a37d02cf6df7f31?placeholderIfAbsent=true&apiKey=61a77727fee44ba9b3bc5c61b3d4dc53",
  },
  {
    id: 3,
    name: "Juan Lopez",
    email: "juan.lopez@gmail.com",
    role: "Support User",
    profileImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/77f4bdf909909b824ae549b22a37d02cf6df7f31?placeholderIfAbsent=true&apiKey=61a77727fee44ba9b3bc5c61b3d4dc53",
  },
];





function ViewUsers({ users = mockUsers }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter users based on search term
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [users, searchTerm]);

  return (
    <main className={styles.viewUsers}>
      <div className={styles.container}>
        <header className={styles.header}>
          <AddUserButton />
          <p className={styles.userCount}>
            The total number of Users is{" "}
            <span className={styles.countHighlight}>{users.length}</span>{" "}
          </p>
        </header>

        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />



        <section className={styles.usersList}>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
                role={user.role}
                profileImage={user.profileImage}
              />
            ))
          ) : (
            <p className={styles.noResults}>
              No users found matching your search criteria
            </p>
          )}
        </section>


      </div>
    </main>
  );
}

export default ViewUsers;
