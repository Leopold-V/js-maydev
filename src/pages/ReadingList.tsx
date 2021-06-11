import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../app/firebase';
import { MainLayout } from '../components/MainLayout';
import { QuestionsList } from '../components/Question';

export const ReadingList = () => {
  const user = auth.currentUser;
  const questions = useSelector((state: any) =>
    state.questions.questions.filter((ele: any) => ele.reading.includes(user?.uid))
  );

  return (
    <MainLayout>
      <div className="py-2 px-4 space-y-10">
        <h1 className="font-bold text-xl">Reading list</h1>
        <QuestionsList questions={questions} />
      </div>
    </MainLayout>
  );
};
