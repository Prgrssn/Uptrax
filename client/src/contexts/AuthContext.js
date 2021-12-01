import React, { useContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setCurrentUser(response.user);
        return response.user;
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password).then((response) => {
      setCurrentUser(response.user);
      return response.user;
    });
  }

  function logout() {
    return auth.signOut();
  }

  function passRecover(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, signup, login, logout, passRecover };

  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
}
