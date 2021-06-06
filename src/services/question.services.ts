import { db } from '../app/firebase';
import { questionType } from '../app/types';

export const getAllQuestions = async () => {
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
}