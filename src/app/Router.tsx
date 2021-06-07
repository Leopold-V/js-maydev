import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import {
  Home,
  Dashboard,
  ReadingList,
  Faq,
  About,
  Tags,
  NotFound,
  LoginPage,
  SignupPage,
  SettingsPage,
  ProfilePage,
  CreateQuestionPage,
  QuestionPage
} from "../pages";

export const Router = () => {
  const isAuth = useSelector((state: any) => state.user.isAuthenticated);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/question/:id" component={QuestionPage} />
      <Route exact path="/dashboard" render={() => isAuth ? <Dashboard /> : <Redirect to='/login' />} />
      <Route exact path="/readinglist" render={() => isAuth ? <ReadingList /> : <Redirect to='/login' />} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/about" component={About} />
      <Route exact path="/tags" render={() => isAuth ? <Tags /> : <Redirect to='/login' />} />
      <Route exact path="/login" render={() => !isAuth ? <LoginPage /> : <Redirect to='/' />} />
      <Route exact path="/signup" render={() => !isAuth ? <SignupPage /> : <Redirect to='/' />} />
      <Route exact path="/settings" render={() => isAuth ? <SettingsPage /> : <Redirect to='/login' />} />
      <Route exact path="/profile" render={() => isAuth ? <ProfilePage /> : <Redirect to='/login' />} />
      <Route exact path="/new" render={() => isAuth ? <CreateQuestionPage /> : <Redirect to='/login' />} />
      <Route component={NotFound} />
    </Switch>
  );
};
