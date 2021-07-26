import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../actions/comment.actions';
import { userType } from '../../app/types';

export const CommentReply = ({ancester, questionId, setReplyOpen, replyOpen} : {ancester: string, questionId: string, setReplyOpen: (reply: boolean) => void, replyOpen: boolean}) => {
  const dispatch = useDispatch();
  const user: userType = useSelector((state: any) => state.user.user);

  const [input, setInput] = useState('');
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  useEffect(() => {
    input.length === 0 ? setHasChanged(false) : setHasChanged(true);
  }, [input])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newComment = {
      isReply: true,
      ancester: ancester,
      authorId: user.userId,
      questionId: questionId,
      content: input,
      likes: [],
      date: new Date(Date.now()),
    }
    dispatch(addComment(newComment));
    setInput('');
  };

  return (
    <form className="mb-8 mt-2" onSubmit={handleSubmit}>
      <div className="flex space-x-2">
        <div className="w-8">
          <img
            className="rounded-full"
            alt="profile_picture"
            src={user.avatar || 'https://randomuser.me/portraits/men/52.jpg'}
          />
        </div>
        <div className="flex-grow space-y-2">
          <textarea
            onChange={handleChange}
            className="border shadow-lg border-gray-600 rounded py-2 px-2 bg-gray-100
                                    focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                                    w-full h-36 placeholder-gray-500 resize-none transition duration-200"
            placeholder="Add to the discussion"
            name="content"
            value={input}
          />
          <div className="flex space-x-4">
                  {hasChanged ? (
          <button className="btn-primary hover:opacity-80 w-full text-gray">Submit</button>
        ) : (
          <button className="btn-primary w-full text-gray opacity-60 cursor-not-allowed" disabled>
            Submit
          </button>
        )}
          <button 
            className="btn-secondary w-full text-gray"
            onClick={() => { setReplyOpen(!replyOpen)}}
          >
            Dismiss
          </button>
          </div>
        </div>
      </div>
    </form>
  );
};
