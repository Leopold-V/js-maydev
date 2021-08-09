import { getByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../app/store';
import { questionType } from '../../app/types';
import { QuestionsList } from '../../components/Question';
import user from '../utils/user';

const questions: questionType[] = [
  {
    id: 'BoLov6KmB2f1zJ4Ga2I5',
    authorId: 'lGFgNI60OoM2EjthnoGQlupN3gp1',
    content: 'kojihugyjthfg',
    date: '',
    edit_date: '',
    isSolved: false,
    likes: ['7Rh5lL56AHMFRlZ3pEGnLcxBlUl2'],
    reading: ['7Rh5lL56AHMFRlZ3pEGnLcxBlUl2'],
    tags: ['javascript', 'frontend'],
    title: 'how are you',
  },
  {
    id: 'afZLtzlDPWQdBzbmXFz9',
    authorId: 'lGFgNI60OoM2EjthnoGQlupN3gp1',
    content: 'azertyuio',
    date: '',
    edit_date: '',
    isSolved: false,
    likes: ['7Rh5lL56AHMFRlZ3pEGnLcxBlUl2'],
    reading: ['lGFgNI60OoM2EjthnoGQlupN3gp1'],
    tags: ['javascript', 'react'],
    title: 'this is a question',
  },
];

describe('Question list renders', () => {
    it('renders a list of questions', () => {
        render(<QuestionsList questions={questions} />)
        const questionItem = screen.getAllByTestId('question-element');
        expect(questionItem).toHaveLength(2);
    });

  /*it('renders a list of questions', () => {

    const initialStateForFirstUseStateCall = user;
    const initialStateForSecondUseStateCall = 0;
 
    React.useState = jest.fn()
      .mockReturnValueOnce([initialStateForFirstUseStateCall, {}])
      .mockReturnValueOnce([initialStateForSecondUseStateCall, {}])

    render(<Provider store={store}><BrowserRouter><QuestionsList questions={questions} /></BrowserRouter></Provider>);
    const text = screen.getByText('this is a question');
    expect(text).toBeInTheDocument();
  });*/
})
