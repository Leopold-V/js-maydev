import React from 'react'
import { useSelector } from 'react-redux'
import { questionType } from '../app/types'

import { MainLayout } from '../components/MainLayout'

export const QuestionPage = (props: any) => {
    const authorId = props.match.params.id;
    const question = useSelector((state: any) => state.questions.questions.find((ele: questionType) => ele.authorId === authorId));
    const loading = useSelector((state: any) => state.questions.loading);

    if (loading) return null;
    if (!question) return <MainLayout><h1>Post not found</h1></MainLayout>
    return (
        <MainLayout>
            <h1 className="text-white text-3xl font-extrabold py-3">{question.title}</h1>
            <div>{question.date}</div>
            <p>{question.content}</p>
        </MainLayout>
    )
}
