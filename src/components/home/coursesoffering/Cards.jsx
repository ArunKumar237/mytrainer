import React from "react";
import "./Cards.css";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="row gx-2">
      <Card
        courseName="Complete Python"
        imgSrc="https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360"
        trainerName="Chaitanya Reddy"
        trainerQuali="IIT Roorkee alumini, 20+ yrs exp"
      />
      <Card
        courseName="Python Fullstack"
        imgSrc="https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360"
        trainerName="Chaitanya Reddy"
        trainerQuali="IIT Roorkee alumini, 20+ yrs exp"
      />
      <Card
        courseName="Frontend Technologies"
        imgSrc="https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360"
        trainerName="Chaitanya Reddy"
        trainerQuali="IIT Roorkee alumini, 20+ yrs exp"
      />
      <Card
        courseName="Python Fullstack with Data Science"
        imgSrc="https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360"
        trainerName="Chaitanya Reddy"
        trainerQuali="IIT Roorkee alumini, 20+ yrs exp"
      />
    </div>
  );
};

export default Cards;
