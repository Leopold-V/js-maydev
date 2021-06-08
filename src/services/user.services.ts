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

const updateReading = async (data: userType) => {
  const questionRef = db.collection("users").doc(data.userId);
  return questionRef.update({
      reading: data.reading,
  })
  .then(() => {
      console.log("Document successfully updated!");
  })
  .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });
}

// const removeReading = async (data: userType) => {
//   const questionRef = db.collection("users").doc(data.userId);
//   return questionRef.update({
//       reading: data.reading,
//   })
//   .then(() => {
//       console.log("Document successfully updated!");
//   })
//   .catch((error) => {
//       // The document probably doesn't exist.
//       console.error("Error updating document: ", error);
//   });
// }

const userServices = {
  getOneUser,
  updateReading,
}

export default userServices;