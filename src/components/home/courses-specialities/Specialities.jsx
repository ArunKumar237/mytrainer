import React from "react";
import Tile from "./Tile";

const Specialities = () => {
  return (
    <div className="container py-4 d-flex flex-column gap-3">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h2>Course Specialities</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          veritatis tempore temporibus. Illo voluptatum magni repellendus
        </p>
      </div>
      <div className="row">
        <div className="col d-flex gap-3 flex-wrap justify-content-center">
          <Tile src="https://img.icons8.com/ios-glyphs/90/live-video-on--v1.png" heading={"Session Recording"} para={"Every live class will be recorded and shared to student immediate after the class."}/>
          <Tile src="https://img.icons8.com/ios/50/pdf--v1.png" heading={"Course Material"} para={"Entire course material will be shared to student during starting of the course itself."}/>
          <Tile src="https://img.icons8.com/ios-filled/50/course-assign.png" heading={"Assignments"} para={"Lot of programs are shared to students for practicing code in the form of assignments during Day-1 of training."}/>
          <Tile src="https://img.icons8.com/ios-filled/50/personal-trainer.png" heading={"Accessible Trainer"} para={"Beding an accessible trainer, Mr. D. Chaitanya has been ensuring that all students have equal opportunities to learn and succed, regardless of their backgrounds, abilities or circumstances."}/>
          <Tile src="https://img.icons8.com/ios-filled/50/help.png" heading={"Question Hour"} para={"Dedicated 15 minutes question hour is also scheduled on every Saturday's class to clarify student's doubts."}/>
          <Tile src="https://img.icons8.com/sf-black-filled/64/create-new.png" heading={"Weekly Tests"} para={"Conducts a test on every week, review the code written by every student to provide feedback to them."}/>
          <Tile src="https://img.icons8.com/ios-filled/50/high-priority.png" heading={"Highlight IMP"} para={"Every important interview questions will be highlighted during concept explaination in class."}/>
          <Tile src="https://img.icons8.com/ios-glyphs/90/fire-element--v1.png" heading={"100% Job Assistance"} para={"Trainer and his supporting team will provide complete job assistance to every student, but can't provide job guarantee."}/>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
