import React, { Fragment } from "react";
import Carousel from "./carousel/Carousel";
import Aboutme from "./aboutme/Aboutme";
import Coursesoffering from "./coursesoffering/Coursesoffering";
import Specialities from "./courses-specialities/Specialities";
import Studentstories from "./student-stories/Studentstories";
import Sectionbreak from "./Sectionbreak";

const Homepage = () => {
  return (
    <Fragment>
      <Carousel />
      <Sectionbreak/>
      <Aboutme />
      <Sectionbreak/>
      <Coursesoffering />
      <Sectionbreak/>
      <Specialities />
      <Sectionbreak/>
      <Studentstories/>
    </Fragment>
  );
};

export default Homepage;
