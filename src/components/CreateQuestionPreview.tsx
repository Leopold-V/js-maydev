import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from 'remark-gfm';
import '../markdown.css';

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

export const CreateQuestionPreview = ({
  input,
  tags,
}: {
  input: { title: string; content: string };
  tags: any;
}) => {
  const user = useSelector((state: any) => state.user.user);
  const newTags = Object.entries(tags).filter((tag) => tag[1] === true).map((tag) => tag[0]);
  return (
    <div className="space-y-6">
        <h1 className="text-white text-4xl font-extrabold py-3">{input.title}</h1>
        <ul className="flex items-center space-x-2 text-muted text-sm">
            {newTags.map((tag: string, i: number) => <li key={i} className="hover:text-white text-sm transition duration-200">#{tag}</li>)}
        </ul>
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
        <ReactMarkdown
            className="markdown"
            remarkPlugins={[gfm]}
            children={input.content}
            //@ts-ignore
            components={components}
        />
    </div>
  );
};
