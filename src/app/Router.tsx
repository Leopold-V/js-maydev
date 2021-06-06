import React from "react";
import { Route, Switch } from "react-router-dom";

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
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/question/:id" component={QuestionPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/readinglist" component={ReadingList} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/about" component={About} />
      <Route exact path="/tags" component={Tags} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/settings" component={SettingsPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/new" component={CreateQuestionPage} />
      <Route component={NotFound} />
    </Switch>
  );
};
