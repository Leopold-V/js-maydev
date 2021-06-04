import React from 'react'
import { Route, Switch } from 'react-router-dom';

import { Home, Dashboard, ReadingList, Faq, About, Tags, NotFound, LoginPage, SignupPage } from '../pages';

export const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/readinglist' component={ReadingList}/>
            <Route exact path='/faq' component={Faq}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/tags' component={Tags}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/signup' component={SignupPage}/>
            <Route component={NotFound}/>
        </Switch>
    )
}
