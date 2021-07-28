import { auth, db } from '../app/firebase';
import firebase from 'firebase/app';
import { userType } from '../app/types';

const login = async (email: string, password: string): Promise<any> => {
  await auth.signInWithEmailAndPassword(email, password);
};

const register = async (email: string, password: string, username: string) => {
  await auth.createUserWithEmailAndPassword(email, password).then((userCredential: any) => {
    const newUser: userType = {
      userId: userCredential.user.uid,
      username: username,
      email: userCredential.user.email,
      avatar: '',
      bio: '',
      location: '',
      website_url: '',
      dev_profile: '',
      score: 0,
      tags: [],
    };
    db.collection('users')
      .doc(userCredential.user.uid)
      .set(newUser)
      .then(() => {
        console.log('User successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  });
};

const loginWithGithub = async () => {
  const provider = new firebase.auth.GithubAuthProvider();
  await auth.signInWithPopup(provider).then((userCredential: any) => {
    if (userCredential.additionalUserInfo.isNewUser) {
      const profile = userCredential.additionalUserInfo.profile;
      const newUser: userType = {
        userId: userCredential.user.uid,
        username: profile.name,
        email: profile.email,
        avatar: profile.avatar_url,
        bio: '',
        location: '',
        website_url: '',
        dev_profile: '',
        score: 0,
        tags: [],
      };
      db.collection('users')
        .doc(userCredential.user.uid)
        .set(newUser)
        .then(() => {
          console.log('User successfully written!');
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
    } else {
      console.log('User exists... Login...');
    }
  });
};

const logout = () => {
  auth.signOut();
};

const authServices = {
  login,
  loginWithGithub,
  register,
  logout,
};

export default authServices;
