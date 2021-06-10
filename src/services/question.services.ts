import { db } from '../app/firebase';
import { questionType } from '../app/types';

const getAllQuestions = async () => {
  const questions: questionType[] = [];
  try {
    const questionsList = await db.collection('questions').get();
    questionsList.forEach((doc: any) => {
      questions.push({ id: doc.id, ...doc.data() });
    });
    return questions;
  } catch (error) {
    return error.code;
  }
};

const getOneQuestion = async (id: string) => {
  const query = await db.collection('questions').where('id', '==', id).get();
  if (!query.empty) {
    const snapshot = query.docs[0];
    const data = snapshot.data();
    return data;
  } else {
    return null;
  }
};

const addOneQuestion = async (data: questionType) => {
  const docRef = await db.collection('questions').add(data);
  return docRef.id;
};

const updateOneQuestion = async (data: questionType) => {
  const questionRef = db.collection('questions').doc(data.id);
  return questionRef
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

const updateReading = async (data: { id: string; reading: string[] }) => {
  const questionRef = db.collection('questions').doc(data.id);
  return questionRef
    .update({
      reading: data.reading,
    })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
      console.error('Error updating document: ', error);
    });
};

const updateLikes = async (data: { id: string; likes: string[] }) => {
  const questionRef = db.collection('questions').doc(data.id);
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

const deleteQuestion = async (id: string) => {
  db.collection('questions')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

const questionServices = {
  getAllQuestions,
  getOneQuestion,
  addOneQuestion,
  updateReading,
  updateLikes,
  deleteQuestion,
  updateOneQuestion,
};

export default questionServices;
