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

const getAllUsers = async (): Promise<userType[]> => {
  const users: userType[] = [];
  try {
    const usersList = await db.collection('users').get();
    usersList.forEach((doc: any) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    return error.code;
  }
};

const updateOneUser = async (data: userType): Promise<void> => {
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
  getAllUsers
};

export default userServices;
