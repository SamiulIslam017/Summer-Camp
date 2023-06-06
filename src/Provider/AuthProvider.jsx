import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function createUser(email, password, name) {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    // update profile
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    const updateUser = auth.currentUser;
    setUser({
      ...updateUser,
    });
  }

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // if (currentUser && currentUser.email) {
      //   const loguser = {
      //     email: currentUser.email
      //   }
      //   fetch("https://kids-toy-vendor-server.vercel.app/jwt", {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(loguser),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       localStorage.setItem("toy-access-token", data.token);
      //     });
      // } else {
      //   localStorage.removeItem('toy-access-token')
      // }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    googleLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;