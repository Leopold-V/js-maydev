import { auth } from '../app/firebase';

const getUser = () => {
    auth.onAuthStateChanged((userResult: any) => {
        if (userResult) {
          return {user: userResult, isAuthenticated: true};
        } else {
          return {user: null, isAuthenticated: false};
        }
    });
}


const userServices = {
    getUser
}

export default userServices;