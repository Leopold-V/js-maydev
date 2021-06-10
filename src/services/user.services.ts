import { db } from '../app/firebase';
import { userType } from '../app/types';

const getOneUser = async (id: string) => {
  const query = await db.collection('users').where('userId', '==', id).get();
  if (!query.empty) {
    const snapshot = query.docs[0];
    const data = snapshot.data();
    return data;
  } else {
    return null;
  }
};

const updateOneUser = async (data: userType) => {
  const userRef = db.collection('users').doc(data.userId);
  return userRef
    .update({
      ...data,
    })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
      console.error('Error updating document: ', error);
    });
};

const userServices = {
  getOneUser,
  updateOneUser,
};

export default userServices;
