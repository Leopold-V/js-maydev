import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../app/firebase';
import { MainLayout } from '../components/MainLayout';
import { QuestionsList } from '../components/QuestionsList';

export const ReadingList = () => {
  const user = auth.currentUser;
  const questions = useSelector((state: any) =>
    state.questions.questions.filter((ele: any) => ele.reading.includes(user?.uid))
  );

  return (
    <MainLayout>
      <div>
        <h1>Reading List</h1>
        <QuestionsList questions={questions} />
      </div>
    </MainLayout>
  );
};
