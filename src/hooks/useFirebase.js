import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../firebase/firebase.init";

initialization()
const useFirebase =()=>{
    const [user , setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }
   

    const logout =()=>{
        signOut(auth).then(() => {
            setUser('');
          }).catch(error => {
          });
          
    }


    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if (user) {
             setUser(user)
            } else {
              
            }
          });
        
    },[])
    return {user , signInGoogle , logout}
}
export default useFirebase;