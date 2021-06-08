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
}

const questionServices = {
  getAllQuestions,
  addOneQuestion
}

export default questionServices;