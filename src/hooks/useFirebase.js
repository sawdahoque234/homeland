import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
// initialize firebase app

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        hanldeUserInfo(result.user.email, name);
        setAuthError("");

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        hanldeUserInfo(result.user.email);

        const destination = location?.state?.from || "/";
        navigate(destination, { replace: true });
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        hanldeUserInfo(result.user.email);
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination, { replace: true });
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const hanldeUserInfo = (email, displayName) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, displayName }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  // user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  //logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
  };
};

export default useFirebase;
