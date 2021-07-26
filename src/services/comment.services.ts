import { db } from "../app/firebase";
import { commentType } from "../app/types";

const addOneComment = async (data: commentType) => {
    const docRef = await db.collection('comments').add(data);
    return docRef.id;
};

const getCommentsByQuestion = async (questionId: string): Promise<commentType> => {
    const listComments: any = [];
    await db.collection('comments').where('questionId', '==', questionId).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          listComments.push({id: doc.id, ...doc.data(), date: new Date(doc.data().date.seconds * 1000).toDateString()});
        });
    })
    .catch((error: Error) => {
        console.log("Error getting documents: ", error);
    });
    return listComments;
};

const updateLikes = async (data: { id: string; likes: string[] }) => {
    const questionRef = db.collection('comments').doc(data.id);
    return questionRef
      .update({
        likes: data.likes,
      })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  };

const commentServices = {
    addOneComment,
    getCommentsByQuestion,
    updateLikes
}

export default commentServices;