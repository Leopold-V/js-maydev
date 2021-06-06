import React from 'react'
import { useSelector } from 'react-redux'
import { questionType } from '../app/types';
import { QuestionsItem } from './QuestionsItem'

export const QuestionsList = () => {
    const questions: questionType[] = useSelector((state: any) => state.questions.questions);

    return (
        <div className="space-y-3">
            {questions.map((question) =>
                <QuestionsItem content={question.content} authorId={question.authorId} />
            )}
        </div>
    )
}
