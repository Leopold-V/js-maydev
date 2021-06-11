import React from 'react';
import { useSelector } from 'react-redux';
import '../markdown.css';
import { MarkdownWrapper } from './MarkdownWrapper';
import { QuestionListTags } from './Question';

export const CreateQuestionPreview = ({
  input,
  tags,
}: {
  input: { title: string; content: string };
  tags: any;
}) => {
  const user = useSelector((state: any) => state.user.user);
  const newTags = Object.entries(tags)
    .filter((tag) => tag[1] === true)
    .map((tag) => tag[0]);
  return (
    <div className="space-y-6">
      <h1 className="text-white text-4xl font-extrabold py-3">{input.title}</h1>
      <QuestionListTags tags={newTags} />
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 hover:text-blue transition duration-200">
          <div className="w-8">
            <img
              className="rounded-full"
              alt="profile_picture"
              src={user.avatar || 'https://randomuser.me/portraits/men/52.jpg'}
            />
          </div>
          <div>{user.username || 'Anonymous'}</div>
        </div>
        <div className="text-muted text-sm">{new Date(Date.now()).toString()}</div>
      </div>
      <MarkdownWrapper content={input.content} />
    </div>
  );
};
