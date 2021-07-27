import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { validateComment } from '../../actions/comment.actions';
import { auth } from '../../app/firebase';
import { questionType } from '../../app/types';
import userServices from '../../services/user.services';

export const ButtonValidateComment = ({ commentId, isSolution, authorId, questionId }: { commentId: string, isSolution: boolean, authorId: string, questionId: string }) => {
    const question: questionType = useSelector((state: any) => state.questions.questions.filter((question: questionType) => question.id === questionId))[0];

    const dispatch = useDispatch();
    
    const handleClick = async () => {
        const author = await userServices.getOneUser(authorId);
        dispatch(validateComment({id: commentId, question: {...question, isSolved: true}, author: author}))
    }

    if (!isSolution && !question.isSolved && question.authorId === auth.currentUser?.uid) {
        return (
          <button
            className="flex items-center justify-center py-1 px-2 bg-gray-100 
                focus:outline-none hover:bg-gray-200 transition duration-200 rounded-full "
            onClick={handleClick}
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check h-4 w-4" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a3a3a3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
            </svg>
          </button>
        )
    }
    if (isSolution) {
        return (
            <button
            className="flex items-center justify-center py-1 px-2 bg-gray-200 
                focus:outline-none transition duration-200 rounded-full "
                onClick={handleClick}
                disabled
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check h-4 w-4" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78ffb9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
            </svg>
            </button>
        )
    }
    return (
        <></>
    )
}
