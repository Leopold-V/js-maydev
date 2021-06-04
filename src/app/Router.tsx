import React, { ReactNode } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';

//import { NotFound } from '../pages/NotFound';
import { Home, Dashboard, ReadingList, Faq, About, Tags, NotFound } from '../pages';

export const Router = ({children}: {children: ReactNode}) => {
    return (
        <BrowserRouter>
            {children}
            <PageLayout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/dashboard' component={Dashboard}/>
                    <Route exact path='/readinglist' component={ReadingList}/>
                    <Route exact path='/faq' component={Faq}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/tags' component={Tags}/>
                    <Route component={NotFound}/>
                </Switch>
            </PageLayout>
        </BrowserRouter>
    )
}
