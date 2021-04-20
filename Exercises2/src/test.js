import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const Header = ({ names }) => {
  const note = names.map((el) => el.name);
  return <p>{note}</p>;
};

const Total = ({ courses }) => {
  let sum = 0;
  courses.map((el) => (sum += el.parts.exercises));
  return <div>total of {sum} exercises</div>;
};

const Part = ({ courses }) => {
  return (
    <div>
      {courses.map((el) => (
        <p key={el.id}>
          {el.parts.name} {el.parts.exercises}
        </p>
      ))}
    </div>
  );
};

const Content = ({ courses }) => {
  return (
    <div>
      <Part courses={courses} />
    </div>
  );
};

const Course = ({ courses }) => {
  const names = courses.map((el) => el.name);
  return (
    <div className="cyan">
      <Header names={names} />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return courses.map((el) => <Course courses={courses} />);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
