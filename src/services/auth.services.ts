import { auth, db } from '../app/firebase';
import firebase from 'firebase/app';

const login = async (email: string, password: string): Promise<any> => {
    await auth.signInWithEmailAndPassword(email, password);
}

const register = async (email: string, password: string) => {
    await auth.createUserWithEmailAndPassword(email, password).then((userCredential: any) => {
        const newUser = {
            userId: userCredential.user.uid,
            username: '',
            email: userCredential.user.email,
            avatar: ''
        }
        db.collection("users").doc(userCredential.user.uid).set(newUser)
        .then(() => {
            console.log("User successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });  
      })
    ;
}

const logout = () => {
    auth.signOut();
}

const loginWithGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

const authServices = {
    login,
    loginWithGithub,
    register,
    logout
}

export default authServices;