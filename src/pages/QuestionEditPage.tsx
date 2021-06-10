import React, { MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { questionType } from '../app/types';

import { CreateQuestionPreview } from '../components/CreateQuestionPreview';
import { EditQuestionForm } from '../components/EditQuestionForm';
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

const CreateQuestionHead = ({ tab, setTab }: { tab: string; setTab: (tab: string) => void }) => {
  const handleTab = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLLIElement;
    setTab(target.innerText);
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="py-4 pl-2 md:pl-0">Create question</h1>
      <div className="space-x-1">
        <button
          className={`hover:bg-gray focus:outline-none hover:text-blue border-b-4 border-transparent focus:border-primary
          ${tab === 'Edit' ? 'border-primary' : ''} rounded transition duration-200 px-2 py-1`}
          onClick={handleTab}
        >
          Edit
        </button>
        <button
          className={`hover:bg-gray focus:outline-none hover:text-blue border-b-4 border-transparent focus:border-primary
          ${tab === 'Preview' ? 'border-primary' : ''} rounded transition duration-200 px-2 py-1`}
          onClick={handleTab}
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export const QuestionEditPage = (props: any) => {
  const questionId = props.match.params.id;
  const question: questionType = useSelector((state: any) =>
    state.questions.questions.find((ele: questionType) => ele.id === questionId)
  );

  const tagsToObject = (tags: string[]) => {
    const tagsObject: any = dataTags;
    for (let i = 0; i < tags.length; i++) {
      tagsObject[tags[i]] = true;
    }
    return tagsObject;
  };

  const newDataTags = tagsToObject(question.tags);

  const [input, setInput] = useState({ title: question.title, content: question.content });
  const [tags, setTags] = useState(newDataTags);
  const [tab, setTab] = useState<string>('Edit');
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  return (
    <MainLayout>
      <CreateQuestionHead tab={tab} setTab={setTab} />
      <div className="card">
        {tab === 'Edit' ? (
          <EditQuestionForm
            id={questionId}
            input={input}
            setInput={setInput}
            tags={tags}
            setTags={setTags}
            hasChanged={hasChanged}
            setHasChanged={setHasChanged}
          />
        ) : (
          <CreateQuestionPreview input={input} tags={tags} />
        )}
      </div>
    </MainLayout>
  );
};
