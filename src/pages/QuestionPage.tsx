import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from 'remark-gfm';
import '../markdown.css';

import { questionType, userType } from '../app/types';
import userServices from '../services/user.services';

import { MainLayout } from '../components/MainLayout';
import { addQuestionToRead, removeQuestionToRead } from '../actions/question.actions';

const components = {
    code({node, inline, className, children, ...props}: {node: any, inline: any, className: string, children: ReactNode}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props} />
      )
    }
}

export const QuestionPage = (props: any) => {
    const questionId = props.match.params.id;
    const dispatch = useDispatch();
    const currentUser: userType = useSelector((state: any) => state.user.user);
    const question: questionType = useSelector((state: any) => state.questions.questions.find((ele: questionType) => ele.id === questionId));
    const loading: boolean = useSelector((state: any) => state.questions.loading);

    const [user, setUser] = useState<any>(null);

    const loadAuthor = async (id: string) => {
        const user = await userServices.getOneUser(id);
        setUser(user);
    };

    const handleSave = () => {
        dispatch(addQuestionToRead({userId: currentUser.userId, question: question}));
      };
    
      const handleRemove = () => {
        dispatch(removeQuestionToRead({questionId: currentUser.userId, question: question}));
      };

    useEffect(() => {
        question && loadAuthor(question.authorId);
    }, [question]);

    if (loading) return null;
    if (!question) return <MainLayout><h1>Post not found</h1></MainLayout>;
    if (!user) return <MainLayout><div className="card h-96"></div></MainLayout>;
    return (
        <MainLayout>
            <div className="card relative space-y-3">
                {currentUser && (!question.reading.includes(currentUser.userId) ? (<button onClick={handleSave} className="btn-secondary absolute top-3 right-3">
                    Save
                </button>) : (<button onClick={handleRemove} className="btn-secondary absolute top-3 right-3">
                    Remove
                </button>))}
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
                        <div>{user.username || 'Anonymous'}</div>
                    </Link>
                    <div className="text-muted text-sm">{question.date}</div>
                </div>
                <ReactMarkdown
                    className="markdown"
                    remarkPlugins={[gfm]}
                    children={question.content}
                    //@ts-ignore
                    components={components}
                />
            </div>
        </MainLayout>
    )
}
