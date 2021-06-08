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
  const loading = useSelector((state: any) => state.user.loading);
  const isAuth = useSelector((state: any) => state.user.isAuthenticated);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/question/:id" component={QuestionPage} />
      <Route exact path="/profile/:id" component={ProfilePage} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/about" component={About} />
      <Route exact path="/dashboard" render={() => !loading && (isAuth ? <Dashboard /> : <Redirect to='/login' />)} />
      <Route exact path="/readinglist" render={() => !loading && (isAuth ? <ReadingList /> : <Redirect to='/login' />)} />
      <Route exact path="/tags" render={() => !loading && (isAuth ? <Tags /> : <Redirect to='/login' />)} />
      <Route exact path="/login" render={() => !loading && (!isAuth ? <LoginPage /> : <Redirect to='/' />)} />
      <Route exact path="/signup" render={() => !loading && (!isAuth ? <SignupPage /> : <Redirect to='/' />)} />
      <Route exact path="/settings" render={() => !loading && (isAuth ? <SettingsPage /> : <Redirect to='/login' />)} />
      <Route exact path="/new" render={() => !loading && (isAuth ? <CreateQuestionPage /> : <Redirect to='/login' />)} />
      <Route component={NotFound} />
    </Switch>
  );
};
