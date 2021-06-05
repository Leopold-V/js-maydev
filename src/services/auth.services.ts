import { auth } from '../app/firebase';
import firebase from 'firebase/app';

const login = async (email: string, password: string): Promise<any> => {
    await auth.signInWithEmailAndPassword(email, password);
}

const register = async (email: string, password: string) => {
    await auth.createUserWithEmailAndPassword(email, password);
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