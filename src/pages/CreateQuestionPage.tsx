import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { addQuestion } from '../actions/question.actions';

import { MainLayout } from '../components/MainLayout';

const dataTags = {
  javascript: false,
  react: false,
  vue: false,
  angular: false,
  node: false,
  express: false,
  frontend: false,
  backend: false,
};

const CreateQuestionHead = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="py-4 pl-2 md:pl-0">Create question</h1>
      <div className="space-x-1">
        <button
          className="hover:bg-gray focus:outline-none hover:text-blue border-b-4 border-transparent focus:border-primary
                rounded transition duration-200 px-2 py-1"
        >
          Edit
        </button>
        <button
          className="hover:bg-gray focus:outline-none hover:text-blue border-b-4 border-transparent focus:border-primary
                rounded transition duration-200 px-2 py-1"
        >
          Preview
        </button>
      </div>
    </div>
  );
};

const CreateQuestionForm = () => {
  let history = useHistory();
  const [input, setInput] = useState({ title: '', content: '' });
  const [tags, setTags] = useState(dataTags);
  const [error, setError] = useState('');

  const userId = useSelector((state: any) => state.user.user.userId);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (!input.title || !input.content) {
      setError('Title or content is empty !');
    } else {
      const newTags = Object.entries(tags)
        .filter((tag) => tag[1] === true)
        .map((tag) => tag[0]);
      const newQuestion = {
        ...input,
        authorId: userId,
        date: new Date(Date.now()),
        tags: newTags,
      };
      dispatch(addQuestion(newQuestion));
      history.push(`/`)
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
  };

  const addTags = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    setTags((tags: any) => ({ ...tags, [target.innerText]: !tags[target.innerText] }));
  };

  return (
    <form className="py-6 space-y-4 w-full flex flex-col items-center" onSubmit={handleSubmit}>
      {error && (
        <div className="text-error w-56 mx-auto bg-error rounded p-2 text-center text-sm my-4">
          {error}
        </div>
      )}
      <input
        onChange={handleChange}
        className="border shadow-lg border-gray-600 rounded py-2 px-2 bg-gray-100
                    focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                    h-10 w-4/5 placeholder-gray-500 transition duration-200"
        placeholder="Ask anything ..."
        name="title"
        value={input.title}
      />
      <textarea
        onChange={handleChange}
        className="border shadow-lg border-gray-600 rounded py-2 px-2 bg-gray-100
                    focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                    w-4/5 placeholder-gray-500 resize-none transition duration-200"
        placeholder="Write a more detailed content here ..."
        name="content"
        value={input.content}
      />
      <CreateQuestionTagsInput addTags={addTags} tags={tags} />
      <button className="btn-primary text-gray">Create</button>
    </form>
  );
};

const CreateQuestionTagsInput = ({
  addTags,
  tags,
}: {
  addTags: (e: MouseEvent<HTMLLIElement>) => void;
  tags: any;
}) => {
  return (
    <div className="py-2">
      <h2 className="text-sm py-2">Add tags :</h2>
      <ul className="flex flex-wrap justify-center items-center space-x-3 text-muted text-sm">
        {Object.keys(dataTags).map((tag: string) => (
          <li
            key={tag}
            onClick={addTags}
            className={`${
              tags[tag] ? 'bg-gray-200' : 'bg-gray-100'
            } mb-2 py-1 px-2 rounded-xl hover:bg-gray-200 cursor-pointer transition duration-200`}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const CreateQuestionPage = () => {
  return (
    <MainLayout>
      <CreateQuestionHead />
      <div className="card">
        <CreateQuestionForm />
      </div>
    </MainLayout>
  );
};
