const Header = ({ header }) => {
  return <h3>{header}</h3>;
};

const Total = ({ parts }) => {
  let sum = 0;
  parts.forEach((el) => (sum += el.exercises));
  return <h4>total of {sum} exercises</h4>;
};

const Part = ({ parts }) => {
  return (
    <div>
      {parts.map((el) => (
        <p key={el.id}>
          {el.name} {el.exercises}
        </p>
      ))}
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part parts={parts} />
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      <h2>Web Development Curriculum</h2>
      {courses.map((el) => (
        <div key={el.id}>
          <Header header={el.name} />
          <Content parts={el.parts} />
          <Total parts={el.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
