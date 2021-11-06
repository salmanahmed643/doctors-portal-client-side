import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword    } from "firebase/auth";

import { useEffect, useState } from "react";
import initializeFirebase from "../components/LogIn/Firebase/firebase.init"

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();



    // register user 
    const registerUser = (email, password) => {
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('')
          })
          .catch((error) => {
            setAuthError(error.message);
          }).finally(() => setIsLoading(false));
    }



    // login
    const loginUser =(email, password, location, history) => {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.form || '/'
          history.replace(destination)
          setAuthError('')
        })
        .catch((error) => {
          setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }




    //  manage currently login user
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false)
          });
          return () => unSubscribe;
    }, []);




    // logOut 
    const logOut = () => {
      setIsLoading(true)
        signOut(auth).then(() => {
          }).catch((error) => {
        }).finally(() => setIsLoading(false));
    }


    
    return {
        user,
        authError,
        isLoading,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;