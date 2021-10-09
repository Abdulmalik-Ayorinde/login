import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Regsiter from "./components/Regsiter";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|regsiter)">
          <Regsiter {...regsiterData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group72333Data = {
    layer2: "https://anima-uploads.s3.amazonaws.com/projects/6117865cd41d6ddb6b37c051/releases/61613116db61f69a919554d8/img/vector@2x.png",
    designerSuite: "Designer Suite",
};

const group7245Data = {
    name: "Steve Smith",
    fullName: "Full Name",
};

const group7235Data = {
    exampleGmailCom: "example@gmail.com",
    eMail: "E-mail",
};

const group80392Data = {
    frame3335: "https://anima-uploads.s3.amazonaws.com/projects/6117865cd41d6ddb6b37c051/releases/61613116db61f69a919554d8/img/vector@2x.png",
    text428: "Please enter a valid email address",
};

const group8040Data = {
    frame3335: "https://anima-uploads.s3.amazonaws.com/projects/6117865cd41d6ddb6b37c051/releases/61613116db61f69a919554d8/img/vector@2x.png",
    text429: "Please enter a valid password",
};

const group72442Data = {
    socialLogin: "Social Login",
    group7243: "https://anima-uploads.s3.amazonaws.com/projects/6117865cd41d6ddb6b37c051/releases/61613116db61f69a919554d8/img/vector@2x.png",
};

const regsiterData = {
    rectangle2394: "https://anima-uploads.s3.amazonaws.com/projects/6117865cd41d6ddb6b37c051/releases/61613116db61f69a919554d8/img/vector@2x.png",
    text1: "Create your designer account",
    place: "Register",
    password: "Password",
    frame: "https://anima-uploads.s3.amazonaws.com/projects/6117865cd41d6ddb6b37c051/releases/61613116db61f69a919554d8/img/vector@2x.png",
    devid1234: "devid1234",
    frame2: "https://anima-uploads.s3.amazonaws.com/projects/6117865cd41d6ddb6b37c051/releases/61613116db61f69a919554d8/img/vector@2x.png",
    place2: "REGISTER",
    group72333Props: group72333Data,
    group7245Props: group7245Data,
    group7235Props: group7235Data,
    group80392Props: group80392Data,
    group8040Props: group8040Data,
    group72442Props: group72442Data,
};

