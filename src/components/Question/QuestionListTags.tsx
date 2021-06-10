import React from 'react';

export const QuestionListTags = ({ tags }: { tags: string[] }) => {
  return (
    <ul className="flex items-center space-x-2 text-muted text-sm">
      {tags.map((tag, i) => (
        <li key={i} className="hover:text-white transition duration-200">
          #{tag}
        </li>
      ))}
    </ul>
  );
};
