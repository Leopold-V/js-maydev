import React from 'react'
import { useSelector } from 'react-redux'
import { questionType } from '../app/types'
import { MainLayout } from '../components/MainLayout'
import { QuestionsList } from '../components/QuestionsList'

export const ReadingList = () => {
    const readingList = useSelector((state: any) => state.user.user.reading);
    const questions = useSelector((state: any) => state.questions.questions.filter((ele: questionType) => readingList.includes(ele.id)))

    return (
        <MainLayout>
            <div>
                <h1>Reading List</h1>
                <QuestionsList questions={questions} />
            </div>
        </MainLayout>
    )
}
