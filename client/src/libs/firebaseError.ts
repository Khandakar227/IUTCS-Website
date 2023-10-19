import { FirebaseError } from "firebase/app"

export function getMsgFromFirebaseErrorCode(error:FirebaseError) {
    const code = error.code;
    switch(code) {
        case "auth/invalid-login-credentials":
            return "Incorrect email or password.";
        case "auth/too-many-requests":
            return "Too many failed login attempts. Try again later.";
        case "auth/user-not-found":
            return "Incorrect email or password.";
        default:
            return error.message;
    }
}