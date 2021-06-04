import React, { useEffect, useState } from 'react'
import { QuestionsHeader } from './QuestionsHeader'
import { QuestionsList } from './QuestionsList'

import { auth } from '../app/firebase';

export const MainContent = () => {

    const [currentUser, setcurrentUser] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
          if (user) {
            setcurrentUser(user);
          } else {
            setcurrentUser(false);
          }
        });
        return unsubscribe;
      }, []);

    useEffect(() => {
       console.log(currentUser);
    }, [currentUser])

    return (
        <div className="px-4 space-y-6">
            <QuestionsHeader />
            <QuestionsList />
        </div>
    )
}
