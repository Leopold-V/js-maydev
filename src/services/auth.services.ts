import { auth } from '../app/firebase';

const login = (email: string, password: string) => {
    auth.signInWithEmailAndPassword(email, password);
}

const register = (email: string, password: string) => {
    auth.createUserWithEmailAndPassword(email, password);
}

const logout = () => {
    auth.signOut();
}

const authServices = {
    login,
    register,
    logout
}

export default authServices;