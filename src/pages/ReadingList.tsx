import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../app/firebase'
import { questionType } from '../app/types'
import { MainLayout } from '../components/MainLayout'
import { QuestionsList } from '../components/QuestionsList'

export const ReadingList = () => {
    //@ts-ignore
    const questions = useSelector((state: any) => state.questions.questions.filter((ele: any) => ele.reading.includes(auth.currentUser.uid)));
    //const questions = useSelector((state: any) => state.questions.questions.filter((ele: questionType) => readingList.includes(ele.id)))

    return (
        <MainLayout>
            <div>
                <h1>Reading List</h1>
                <QuestionsList questions={questions} />
            </div>
        </MainLayout>
    )
}
