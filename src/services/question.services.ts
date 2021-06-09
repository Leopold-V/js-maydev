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

const addOneQuestion = async (data: questionType) => {
  const docRef = await db.collection('questions').add(data);
  return docRef.id;
};

const updateReading = async (data: questionType) => {
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

const updateLikes = async (data: questionType) => {
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

const questionServices = {
  getAllQuestions,
  addOneQuestion,
  updateReading,
  updateLikes,
};

export default questionServices;
