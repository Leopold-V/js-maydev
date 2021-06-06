import React from 'react'
import { QuestionsItem } from './QuestionsItem'

export const QuestionsList = () => {
    return (
        <div className="space-y-3">
            <QuestionsItem />
            <QuestionsItem />
            <QuestionsItem />
        </div>
    )
}
