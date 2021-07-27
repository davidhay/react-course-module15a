import { useState, useEffect } from "react";

//custom hooks must start with 'use'
//don't put presentation in here.

const useCounter = (forwards = true) => {
  //this state is separate for each use of this custom hook
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        forwards ? prevCounter + 1 : prevCounter - 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  //you can return whatever you want from custom hook
  return counter; //gives users access to this counter's state
};

export default useCounter;
