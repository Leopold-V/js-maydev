import { db } from '../app/firebase';
import { notificationType } from '../app/types';

export const getUserNotifications = async (userId: string): Promise<notificationType[]> => {
  const listNotifications: any = [];
  await db
    .collection('notifications')
    .where('userId', '==', userId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        listNotifications.push({
          id: doc.id,
          ...doc.data(),
          date: new Date(doc.data().date.seconds * 1000).toDateString(),
        });
      });
    })
    .catch((error: Error) => {
      console.log('Error getting documents: ', error);
    });
  return listNotifications;
};

export const addOneNotification = async (data: any): Promise<any> => {
  const docRef = await db.collection('notifications').add(data);
  return docRef.id;
};

const updateOneNotification = async (id: string) => {
  const questionRef = db.collection('notifications').doc(id);
  return questionRef
    .update({
      isRead: true,
    })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
      console.error('Error updating document: ', error);
    });
};

const notificationServices = {
  getUserNotifications,
  addOneNotification,
  updateOneNotification,
};

export default notificationServices;
