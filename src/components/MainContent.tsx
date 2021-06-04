import React from 'react'
import { QuestionsHeader } from './QuestionsHeader'
import { QuestionsList } from './QuestionsList'

export const MainContent = () => {
    return (
        <div className="px-4 space-y-6">
            <QuestionsHeader />
            <QuestionsList />
        </div>
    )
}
