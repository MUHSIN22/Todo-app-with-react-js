import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-12 p-5 about-content">
          <h1>About the App</h1>
          <p>Hello guys,</p>
          <p>
            This is a todo app made with react js. By using this app you can add
            your goals and work that need to done to the list. And also you can
            delete the goal you achieved or work that to done. So by using my
            app you can done your project without lag and without missing
            clients need.
          </p>
          <h5>About owner of the app:-</h5>
          <p>
            The owner of the app is Mr.Muhsin Neyyathur. He is a fullstack
            developer work with js and also he is a student of AKNM GPTC
            Chelari,Malappuram in the stream Computer Engineering. This is his
            first project with react js.
          </p>
          <p>Thank you!</p>
          <p id="copy">&copy; Muhsin Neyyathur</p>
        </div>
      </div>
    </div>
  );
}
