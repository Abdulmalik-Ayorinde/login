import React from "react";
import Group72333 from "../Group72333";
import Group7245 from "../Group7245";
import Group7235 from "../Group7235";
import Group80392 from "../Group80392";
import Group8040 from "../Group8040";
import Group72442 from "../Group72442";
import "./Regsiter.css";

function Regsiter(props) {
  const {
    rectangle2394,
    text1,
    place,
    password,
    frame,
    devid1234,
    frame2,
    place2,
    group72333Props,
    group7245Props,
    group7235Props,
    group80392Props,
    group8040Props,
    group72442Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="regsiter screen">
        <div className="overlap-group5">
          <img className="rectangle-2394" src={rectangle2394} />
          <img
            className="mask-group-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/6117865cd41d6ddb6b37c051/releases/61613116db61f69a919554d8/img/mask-group-1-1@2x.svg"
          />
        </div>
        <Group72333 layer2={group72333Props.layer2} designerSuite={group72333Props.designerSuite} />
        <div className="text-1 montserrat-light-log-cabin-16px">{text1}</div>
        <div className="place montserrat-medium-onyx-16px">{place}</div>
        <Group7245 name={group7245Props.name} fullName={group7245Props.fullName} />
        <Group7235 exampleGmailCom={group7235Props.exampleGmailCom} eMail={group7235Props.eMail} />
        <Group80392 frame3335={group80392Props.frame3335} text428={group80392Props.text428} />
        <div className="overlap-group6">
          <div className="overlap-group3">
            <div className="rectangle-2396 border-1px-red-ribbon"></div>
            <div className="overlap-group">
              <div className="password montserrat-medium-sonic-silver-14px">{password}</div>
            </div>
          </div>
          <img className="frame" src={frame} />
          <div className="group-8082">
            <div className="devid1234 montserrat-normal-onyx-12px">{devid1234}</div>
            <img className="frame-1" src={frame2} />
          </div>
        </div>
        <Group8040 frame3335={group8040Props.frame3335} text429={group8040Props.text429} />
        <div className="group-8036">
          <div className="overlap-group4">
            <div className="place-1 montserrat-medium-white-10px">{place2}</div>
          </div>
        </div>
        <Group72442 socialLogin={group72442Props.socialLogin} group7243={group72442Props.group7243} />
      </div>
    </div>
  );
}

export default Regsiter;
