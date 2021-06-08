import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { questionType } from '../app/types'

import { MainLayout } from '../components/MainLayout'
import userServices from '../services/user.services'

export const QuestionPage = (props: any) => {
    const questionId = props.match.params.id;
    const question = useSelector((state: any) => state.questions.questions.find((ele: questionType) => ele.id === questionId));
    const loading = useSelector((state: any) => state.questions.loading);

    const [user, setUser] = useState<any>(null);

    const loadAuthor = async (id: string) => {
        const user = await userServices.getOneUser(id);
        setUser(user);
    };

    useEffect(() => {
        question && loadAuthor(question.authorId);
    }, [question]);

    if (loading) return null;
    if (!question) return <MainLayout><h1>Post not found</h1></MainLayout>;
    if (!user) return <MainLayout><div className="card h-96"></div></MainLayout>;
    return (
        <MainLayout>
            <div className="card space-y-3">
                <h1 className="text-white text-4xl font-extrabold py-3">{question.title}</h1>
                <ul className="flex items-center space-x-2 text-muted text-sm">
                    {question.tags.map((tag: string, i: number) => <li key={i} className="hover:text-white text-sm transition duration-200">#{tag}</li>)}
                </ul>
                <div className="flex items-center space-x-4">
                    <Link to={`/profile/${user.userId}`} className="flex items-center space-x-2 hover:text-blue transition duration-200">
                        <div className="w-8">
                            <img
                            className="rounded-full"
                            alt="profile_picture"
                            src={user.avatar || 'https://randomuser.me/portraits/men/52.jpg'}
                            />
                        </div>
                        <div>{user.username}</div>
                    </Link>
                    <div className="text-muted text-sm">{question.date}</div>
                </div>
                <section>{question.content}</section>
            </div>
        </MainLayout>
    )
}