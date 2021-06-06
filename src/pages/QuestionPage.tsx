import React from 'react'
import { useSelector } from 'react-redux'
import { questionType } from '../app/types'
import { InfosBar } from '../components/InfosBar'
import { SideBar } from '../components/SideBar'

export const QuestionPage = (props: any) => {
    const authorId = props.match.params.id
    const question = useSelector((state: any) => state.questions.questions.find((ele: questionType) => ele.authorId === authorId));
    const dateQuestion = new Date(question.date.seconds * 1000);

    return (
        <div className="grid sm:grid-cols-8 lg:grid-cols-10 gap-x-4">
            <div className="hidden sm:block col-span-2">
                <SideBar />
            </div>
            <div className="col-span-6">
                <h1 className="text-white text-3xl font-extrabold py-3">{question.content}</h1>
                <div>{dateQuestion.toDateString()}</div>
            </div>
            <div className="hidden lg:block col-span-2">
                <InfosBar />
            </div>
        </div>
    )
}
