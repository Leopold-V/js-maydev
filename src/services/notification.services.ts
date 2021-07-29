import { db } from '../app/firebase';
import { notificationType } from '../app/types';

export const getNotificationsOfOneUser = async (userId: string): Promise<notificationType[]> => {
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

export const addOneNotification = async (data: notificationType): Promise<any> => {
  const docRef = await db.collection('notifications').add(data);
  return docRef.id;
};

const notificationServices = {
  getNotificationsOfOneUser,
  addOneNotification,
};

export default notificationServices;
