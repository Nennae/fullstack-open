
const Content = ({course}) => {
  console.log({course})
  return (
    <>
    <Part course={course}/>
    </>
  );
};

const Part = ({course}) => {
  console.log({course});
    return (
      <>
        <p>
          {course.parts[0].name} {course.parts[0].exercises}
        </p>
        <p>
          {course.parts[1].name} {course.parts[1].exercises}
        </p>
        <p>
          {course.parts[2].name} {course.parts[2].exercises}
        </p>
      </>
    )
  }

export default Content;
