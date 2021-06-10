import React from 'react'
import { useSelector } from 'react-redux';
import { questionType, userType } from '../app/types';
import { DashboardQuestionsItem } from './DashboardQuestionItem';

export const DashboardPosts = () => {
    const user: userType = useSelector((state: any) => state.user.user);
    const questions: questionType[] = useSelector((state: any) =>
        state.questions.questions.filter((question: questionType) => question.authorId === user.userId)
    );

    return (
        <div>
            <h2 className="font-bold md:text-2xl text-center md:text-left text-xl mb-4">Posts</h2>
            <div className="rounded border-gray-200 bg-gray lg:w-10/12">
                {questions.map((question) => (
                    <DashboardQuestionsItem key={question.id} question={question} />
                ))}
            </div>
        </div>
    )
}
