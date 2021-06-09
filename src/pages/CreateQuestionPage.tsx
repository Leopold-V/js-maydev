import React, { MouseEvent, useState } from 'react';
import { CreateQuestionForm } from '../components/CreateQuestionForm';

import { CreateQuestionPreview } from '../components/CreateQuestionPreview';
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

export const CreateQuestionPage = () => {
  const [input, setInput] = useState({ title: '', content: '' });
  const [tags, setTags] = useState(dataTags);
  const [tab, setTab] = useState<string>('Edit');

  return (
    <MainLayout>
      <CreateQuestionHead tab={tab} setTab={setTab} />
      <div className="card">
        {tab === 'Edit' ? (
          <CreateQuestionForm input={input} setInput={setInput} tags={tags} setTags={setTags} />
        ) : (
          <CreateQuestionPreview input={input} tags={tags} />
        )}
      </div>
    </MainLayout>
  );
};
