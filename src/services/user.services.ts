import { db } from '../app/firebase';

export const getCurrentUser = async (id: string) => {
  const query = await db.collection('users').where('userId', '==', id).get();
  if (!query.empty) {
    const snapshot = query.docs[0];
    const data = snapshot.data();
    return data;
  } else {
    console.log('User not found');
  }
};
