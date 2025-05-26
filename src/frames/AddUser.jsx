import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddUser.module.css";
import stylesAdmin from "./SignUp.module.css";

import WebHeader from "../components/WebHeader.jsx";
import LabelComponent from "../components/LabelComponent.jsx";
import NavBar from "../components/NavBar.jsx";
import Background from "../components/Background.jsx";
import { useUsers } from "../../../../Frontend/src/contexts/UserContext.jsx";
import AddImages from "../components/AddImages.jsx";
import { useAuth } from "../../../../Frontend/src/contexts/AuthContext.jsx";



function AddUser() {
    const { addUser } = useUsers();
    const navigate = useNavigate();
    const { signUp, signIn } = useAuth();
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const [labels, setLabels] = useState([]);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");


    const [selectedImages, setSelectedImages] = useState([]);


    const handleCreateUser = async () => {
        if (!userName || !userEmail || selectedImages.length === 0) {
            setMessage("Please fill all fields and upload at least one image.");
            setMessageType("error");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("userName", userName);
            formData.append("userRole", userRole);
            formData.append("userEmail", userEmail);
            formData.append("userPhoneNumber", userPhoneNumber);

            labels.forEach((label, index) => {
                formData.append(`labels[${index}]`, label.text);
            });

            selectedImages.forEach((image, index) => {
                const extension = image.name.split('.').pop();
                const customFileName = `${userName}_${index + 1}.${extension}`;
                const renamedFile = new File([image], customFileName, {
                    type: image.type,
                });

                formData.append("images", renamedFile);
            });

            const response = await fetch("http://nattech.fib.upc.edu:40407/new-user", {
                //const response = await fetch("http://localhost:8000/new-user", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setMessage("User created successfully!");
                setMessageType("success");
                setTimeout(() => navigate("/users"), 1000);
            } else {
                setMessage("Failed to create user. Please try again.");
                setMessageType("error");
            }
        } catch (error) {
            console.error(error);
            setMessage("An error occurred. Please try again.");
            setMessageType("error");
        }
        if (!userName || !userEmail) {
            setMessage("Please fill in at least name and email.");
            setMessageType("error");
            return;
        }

        try {
            await addUser({
                userName,
                userRole,
                userEmail,
                userPhoneNumber,
                labels,
                createdAt: new Date(),
            });

            setMessage("User created successfully!");
            setMessageType("success");

            setTimeout(() => {
                navigate("/users");
            }, 1000);
        } catch (error) {
            console.error(error);
            setMessage("Failed to create user. Please try again.");
            setMessageType("error");
        }
    };
    const handleAuth = async () => {

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
                const user = await signUp(userEmail, password);

                navigate("/edit-account");

        } catch (err) {
            setError(err.message || "Authentication failed");
        }
    };
    const handleAddLabel = (newLabel) => {
        setLabels((prev) => [...prev, newLabel]);
    };

    const handleRemoveLabel = (labelToRemove) => {
        setLabels((prev) => prev.filter((label) => label !== labelToRemove));
    };

    return (
        <div className={styles.frameContainer}>
            <NavBar />
            <Background />
            <section className={styles.addUser}>
                <WebHeader subtitle="Add System User" />

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
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className={styles.div3}>
                        <label className={styles.userRole} >
                            System Role
                        </label>
                        <select
                            className={styles.roleSelect}
                            onChange={(e) => {
                                setUserRole(e.target.value)
                                console.log(userRole);
                            }
                            }
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
                            placeholder={userRole !== 'admin' ? "Enter the user email..." : "Enter the administrator email..."}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </div>
                    {userRole !== 'admin' ?
                        <div className={styles.div5}>
                            <label className={styles.userPhoneNumber} >
                                Phone Number
                            </label>
                            <input
                                id="number"
                                type="text"
                                className={styles.numberbox}
                                placeholder="Enter the user phone number..."
                                onChange={(e) => setUserPhoneNumber(e.target.value)}
                            />
                        </div>
                        :
                        <div>
                        <div className={stylesAdmin.FormInput}>
                            <label className={stylesAdmin.password}>Password</label>
                            <div className={stylesAdmin.passwordbox}>
                                <input
                                    type="password"
                                    placeholder="yourpassword..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={stylesAdmin.inputField}
                                />
                            </div>
                        </div>

                        <div className={stylesAdmin.FormInput}>
                            <label className={stylesAdmin.confirmPassword}>Confirm Password</label>
                            <div className={stylesAdmin.passwordbox2}>
                                <input
                                type="password"
                                placeholder="yourpassword..."
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={stylesAdmin.inputField}
                                />
                            </div>
                        </div>
                        </div>
                    }

                </form>
                {userRole !== 'admin' &&
                    <div>
                    <AddImages onImagesSelected={setSelectedImages}/>
                    <LabelComponent
                    subtitle="Access Permissions"
                    initialLabels={labels || []}
                    onAddLabel={handleAddLabel}
                    onRemoveLabel={handleRemoveLabel}
                    />


                    <div className={styles.buttonmessage}>
                {/* Mostrar mensaje de éxito o error */}
                {message && (
                    <div className={`${styles.message} ${styles[messageType]}`}>
                {message}
                    </div>
                    )}

                    </div>
                    </div>
                }
                {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

                {userRole !== 'admin' ?
                    <button
                        className={styles.createUser}
                        onClick={handleCreateUser}
                        type="button"
                    >
                        Create User
                    </button>
                    :
                    <button
                        className={styles.createUser}
                        onClick={handleAuth}
                        type="button"
                    >
                        Add System Administrator
                    </button>
                }

            </section>
        </div>
    );
}

export default AddUser;
