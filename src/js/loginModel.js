import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


function LoginUser (email, password)
{
    const auth = getAuth();
    const emailErrorMessage = document.getElementById("error-message-email");
    const passwordErrorMessage = document.getElementById("error-message-password");
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { const user = userCredential.user; })
        .catch((error) => { const errorCode = error.code; const errorMessage = error.message; });

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { const user = userCredential.user; })
        .catch((error) => { const errorCode = error.code; const errorMessage = error.message; });

    signOut(auth).then(() => { // Sign-out Succes
    }).catch((error) => { // Error occured
    });
}

export default LoginUser;