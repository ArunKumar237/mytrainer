import React, { Fragment } from "react";
import Course from "./Course";
import Sectionbreak from "../home/Sectionbreak"
import Coursesmob from "./Coursesmob";

const data = [
  {
    id:1,
    classname: "d-none d-md-block",
    posterImgSrc: "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
    courseTitle: "Fullstack Python",
    courseDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae sed ducimus quas alias facere distinctio fuga! Laudantium autem assumenda. ",
    coursePrice: "18000",
    trainerPic: "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
    trainerName: "D. Chaitanya Reddy",
    trainerQuali: "IIT Roorkee Alumni",
    trainerRole: "Senior Data Scientist",
    courseSchedule: "Coming Soon",
    courseDuration: "1.5",
    classSchedule: "Monday - Saturday",
    classTime: "7:30 am - 9:00 am",
    courseSampleLink: "https://img.icons8.com/color/96/youtube-play.png"
  },
  // {
  //   id:2,
  //   classname: "d-none d-md-block",
  //   posterImgSrc: "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
  //   courseTitle: "Fullstack Python",
  //   courseDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae sed ducimus quas alias facere distinctio fuga! Laudantium autem assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae sed ducimus quas alias facere distinctio fuga! Laudantium autem assumenda.",
  //   coursePrice: "18000",
  //   trainerPic: "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
  //   trainerName: "D. Chaitanya Reddy",
  //   trainerQuali: "IIT Roorkee Alumni",
  //   trainerRole: "Senior Data Scientist",
  //   courseSchedule: "Coming Soon",
  //   courseDuration: "1.5",
  //   classSchedule: "Monday - Saturday",
  //   classTime: "7:30 am - 9:00 am",
  //   courseSampleLink: "https://img.icons8.com/color/96/youtube-play.png"
  // },
  // {
  //   id:3,
  //   classname: "d-none d-md-block",
  //   posterImgSrc: "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
  //   courseTitle: "Fullstack Python",
  //   courseDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae sed ducimus quas alias facere distinctio fuga! Laudantium autem assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae sed ducimus quas alias facere distinctio fuga! Laudantium autem assumenda.",
  //   coursePrice: "18000",
  //   trainerPic: "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
  //   trainerName: "D. Chaitanya Reddy",
  //   trainerQuali: "IIT Roorkee Alumni",
  //   trainerRole: "Senior Data Scientist",
  //   courseSchedule: "Coming Soon",
  //   courseDuration: "1.5",
  //   classSchedule: "Monday - Saturday",
  //   classTime: "7:30 am - 9:00 am",
  //   courseSampleLink: "https://img.icons8.com/color/96/youtube-play.png"
  // },
  {
    id:4,
    classname: "d-md-none",
    posterImgSrc: "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
    courseTitle: "Fullstack Python",
    courseDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae sed ducimus quas alias facere distinctio fuga! Laudantium autem assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae sed ducimus quas alias facere distinctio fuga! Laudantium autem assumenda.",
    coursePrice: "20000",
    trainerPic: "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
    trainerName: "D. Chaitanya Reddy",
    trainerQuali: "IIT Roorkee Alumni",
    trainerRole: "Senior Data Scientist",
    courseSchedule: "Coming Soon",
    courseDuration: "1.5",
    classSchedule: "Monday - Saturday",
    classTime: "7:30 am - 9:00 am",
    courseSampleLink: "https://img.icons8.com/color/96/youtube-play.png"
  },
  {
    id:5,
    classname: "d-md-none",
    posterImgSrc: "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
    courseTitle: "Fullstack Python",
    courseDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae sed ducimus quas alias facere distinctio fuga! Laudantium autem assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae sed ducimus quas alias facere distinctio fuga! Laudantium autem assumenda.",
    coursePrice: "18000",
    trainerPic: "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
    trainerName: "D. Chaitanya Reddy",
    trainerQuali: "IIT Roorkee Alumni",
    trainerRole: "Senior Data Scientist",
    courseSchedule: "Coming Soon",
    courseDuration: "1.5",
    classSchedule: "Monday - Saturday",
    classTime: "7:30 am - 9:00 am",
    courseSampleLink: "https://img.icons8.com/color/96/youtube-play.png"
  },

]

const Courses = () => {

  return (
    <div>
      {data.map((ele, index) => (
        <div key={index}>
          {ele.classname === "d-none d-md-block" &&
            <Course
              id={ele.id}
              classname={ele.classname}
              posterImgSrc={ele.posterImgSrc}
              courseTitle={ele.courseTitle}
              courseDesc={ele.courseDesc}
              coursePrice={ele.coursePrice}
              trainerPic={ele.trainerPic}
              trainerName={ele.trainerName}
              trainerQuali={ele.trainerQuali}
              trainerRole={ele.trainerRole}
              courseSchedule={ele.courseSchedule}
              courseDuration={ele.courseDuration}
              classSchedule={ele.classSchedule}
              classTime={ele.classTime}
              courseSampleLink={ele.courseSampleLink}
            />}
          {ele.classname === "d-md-none" &&
            <Coursesmob
              id={ele.id}
              classname={ele.classname}
              posterImgSrc={ele.posterImgSrc}
              courseTitle={ele.courseTitle}
              courseDesc={ele.courseDesc}
              coursePrice={ele.coursePrice}
              trainerPic={ele.trainerPic}
              trainerName={ele.trainerName}
              trainerQuali={ele.trainerQuali}
              trainerRole={ele.trainerRole}
              courseSchedule={ele.courseSchedule}
              courseDuration={ele.courseDuration}
              classSchedule={ele.classSchedule}
              classTime={ele.classTime}
              courseSampleLink={ele.courseSampleLink}
            />}
        </div>
      ))}

    </div>
  );
};

export default Courses;


