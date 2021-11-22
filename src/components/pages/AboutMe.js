import React from "react";
import picture from "../../images/joey.jpg";

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Full-stack web developer focused on MERN stack while learning new
        technologies.
      </p>
      <img src={picture} alt="avatar" width="250 rem" />
    </div>
  );
}
