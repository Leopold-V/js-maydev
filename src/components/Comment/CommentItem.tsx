import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../app/firebase';
import { commentType, questionType, userType } from '../../app/types';
import userServices from '../../services/user.services';
import { ButtonLikeComment, ButtonValidateComment } from '../Button';
import { MarkdownWrapper } from '../MarkdownWrapper';
import { CommentReply } from './CommentReply';

export const CommentItem = ({ comment }: { comment: commentType }) => {
  const [user, setUser] = useState<userType | null>(null);
  const [replyOpen, setReplyOpen] = useState(false);
  const authorId = useSelector((state: any) => state.questions.questions.filter((question: questionType) => question.id === comment.questionId))[0].authorId;

  const history = useHistory();

  const replies = useSelector((state: any) =>
    state.comments.comments.filter((ele: commentType) => ele.ancester === comment.id)
  );

  const displayReplyForm = () => {
    if (!auth.currentUser) {
      history.push('/login');
    }
    setReplyOpen(!replyOpen);
  }

  const loadAuthor = async (id: string) => {
    const user: userType | any = await userServices.getOneUser(id);
    setUser(user);
  };

  useEffect(() => {
    loadAuthor(comment.authorId);
  }, [comment.authorId]);

  if (!user) return <li className="card min-h-40"></li>;
  return (
    <li className="flex items-start space-x-2">
      <Link to={`/profile/${user.userId}`} className="w-8">
        <img
          className="rounded-full"
          alt="profile_picture"
          src={user.avatar || 'https://randomuser.me/portraits/men/52.jpg'}
        />
      </Link>
      <div className="w-11/12">
        <div className={comment.isSolution ? 'border-green-400 border rounded py-2 px-4 bg-gray relative' : 'border-gray-600 border rounded py-2 px-4 bg-gray relative'}>
          <div className="absolute flex space-x-1 right-2">
            <ButtonValidateComment commentId={comment.id} isSolution={comment.isSolution} authorId={comment.authorId} questionId={comment.questionId}/>
            <ButtonLikeComment id={comment.id} />
          </div>
          <div className="flex items-center text-muted space-x-2">
            <Link
              to={`/profile/${user.userId}`}
              className="hover:text-blue transition duration-200"
            >
              {user.username}
            </Link>
            <span>&bull;</span>
            <span className="text-sm">{comment.date}</span>
          </div>
          <div className="my-2">
            <MarkdownWrapper content={comment.content} />
          </div>
        </div>
        {replyOpen ? (
          <CommentReply
            ancester={comment.id}
            questionId={comment.questionId}
            setReplyOpen={setReplyOpen}
            replyOpen={replyOpen}
          />
        ) : (
          <button
            className="text-muted mt-1 mb-4 self-start focus:outline-none hover:bg-gray-100 hover:text-primary transition duration-200 rounded px-2 py-1"
            onClick={displayReplyForm}
          >
            Reply
          </button>
        )}
        {replies.map((reply: commentType) => (
          <CommentItem key={reply.id} comment={reply} />
        ))}
      </div>
    </li>
  );
};
