import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { addQuestion } from '../actions/question.actions';

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

export const CreateQuestionForm = ({
  input,
  setInput,
  tags,
  setTags,
  hasChanged,
  setHasChanged,
}: {
  input: { title: string; content: string };
  setInput: (input: any) => void;
  tags: any;
  setTags: (tags: any) => void;
  hasChanged: boolean;
  setHasChanged: (hasChanged: boolean) => void;
}) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.user.user.userId);

  const [error, setError] = useState('');

  const ref_title = useRef(null);

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
        edit_date: new Date(Date.now()),
        tags: newTags,
        reading: [],
        likes: [],
        isSolved: false,
      };
      dispatch(addQuestion(newQuestion)).then((result: any) => {
        history.push(`/question/${result.payload.id}`);
      });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput((input: any) => ({ ...input, [e.target.name]: e.target.value }));
  };

  const addTags = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    setTags((tags: any) => ({ ...tags, [target.innerText]: !tags[target.innerText] }));
  };

  useEffect(() => {
    // @ts-ignore
    ref_title.current.focus();
  }, []);

  useEffect(() => {
    input.content.length === 0 ? setHasChanged(false) : setHasChanged(true);
  }, [input, setHasChanged]);

  return (
    <form className="py-6 space-y-4 flex flex-col items-center" onSubmit={handleSubmit}>
      {error && (
        <div className="text-error w-56 mx-auto bg-error rounded p-2 text-center text-sm my-4">
          {error}
        </div>
      )}
      <input
        onChange={handleChange}
        ref={ref_title}
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
                      w-4/5 h-72 placeholder-gray-500 resize-none transition duration-200"
        placeholder="Write a more detailed content here ..."
        name="content"
        value={input.content}
      />
      <CreateQuestionTagsInput addTags={addTags} tags={tags} />
      {hasChanged ? (
        <button className="btn-primary hover:opacity-80 text-gray">Create</button>
      ) : (
        <button className="btn-primary text-gray opacity-60 cursor-not-allowed" disabled>
          Create
        </button>
      )}
    </form>
  );
};
