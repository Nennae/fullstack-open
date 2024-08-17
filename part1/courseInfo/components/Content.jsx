const Part = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  )
}

const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return (
    <>
    <Part part1={part1} exercises1={exercises1}/>
    <Part part2={part2} exercises2={exercises2}/>
    <Part part3={part3} exercises3={exercises3}/>
    </>
  );
};

export default Content;
