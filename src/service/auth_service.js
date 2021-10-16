import { firebaseApp } from "./firebase";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

class AuthService {
  auth = getAuth(firebaseApp);
  login() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }
  logout() {
    signOut(this.auth);
  }
  onAuthChange(onUserChanged) {
    onAuthStateChanged(this.auth, (user) => onUserChanged(user));
  }
}

export default AuthService;
