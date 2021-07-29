import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { questionType } from '../app/types';
import { MainLayout } from '../components/MainLayout';
import { QuestionsHeader, QuestionsList, QuestionsTimeFilter } from '../components/Question';

export const SearchPage = (props: any) => {
    const input = props.match.params.input;
    const questions = useSelector((state: any) => state.questions.questions.filter((question: questionType) => question.title.match(input)))
    const [filteredQuestions, setFilteredQuestions] = useState<questionType[]>(questions);

    useEffect(() => {
      setFilteredQuestions(questions);
    }, [questions]);

    return (
        <MainLayout>
            <h1 className="font-bold text-xl">Found {questions.length} result{questions.length > 1 ? 's' : ''} for: {input}</h1>
            <QuestionsHeader>
                <QuestionsTimeFilter questions={questions} setFilteredQuestions={setFilteredQuestions} />
            </QuestionsHeader>
            <QuestionsList questions={filteredQuestions} />
        </MainLayout>
    )
}
