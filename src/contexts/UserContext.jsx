import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setUsers(usersData);
    };

    const addUser = async (user) => {
        const docRef = await addDoc(collection(db, "users"), user);
        setUsers(prev => [...prev, { id: docRef.id, ...user }]);
    };

    const deleteUser = async (userId) => {
        await deleteDoc(doc(db, "users", userId));
        setUsers(prev => prev.filter(user => user.id !== userId));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <UserContext.Provider value={{ users, addUser, deleteUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsers = () => useContext(UserContext);
