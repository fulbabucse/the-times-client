import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updatesUserProfile = (updatesInfo) => {
    return updateProfile(auth.currentUser, updatesInfo);
  };

  const emailVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const changedPassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      if (currUser === null || currUser.emailVerified) {
        setUser(currUser);
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const userSignOut = () => {
    return signOut(auth);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const deleteUserProfile = () => {
    return deleteUser(auth.currentUser);
  };

  const authInfo = {
    user,
    googleSignIn,
    userSignOut,
    createUser,
    signInUser,
    loading,
    updatesUserProfile,
    emailVerify,
    setLoading,
    changedPassword,
    deleteUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
