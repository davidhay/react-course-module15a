import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const inc = (prev) => prev + 1;
  const counter = useCounter(inc);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
