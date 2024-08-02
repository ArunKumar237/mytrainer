import React, { Fragment } from "react";
import Card from "./Card";

const Coursesoffering = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <h2>Courses Offering</h2>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam error
          harum quam a suscipit aspernatur fuga natus optio, totam perspiciatis.
        </p>
      </div>
      <div className="d-md-flex justify-content-md-center flex-md-wrap flex-col align-items-center gap-3">
        <Card 
        img={"https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360"}
        courseName = "Full Stack Python"
        trainerName = "Arun Kumar"
        trainerQuali = "Data scientist"
        />
        <Card 
        img={"https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360"}
        courseName = "Full Stack Python"
        trainerName = "Arun Kumar"
        trainerQuali = "Data scientist"
        />
        <Card 
        img={"https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360"}
        courseName = "Full Stack Python"
        trainerName = "Arun Kumar"
        trainerQuali = "Data scientist"
        />
        <Card 
        img={"https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360"}
        courseName = "Full Stack Python"
        trainerName = "Arun Kumar"
        trainerQuali = "Data scientist"
        />
      </div>
    </div>
  );
};

export default Coursesoffering;
