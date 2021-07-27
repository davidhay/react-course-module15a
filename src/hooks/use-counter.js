import { useState, useEffect } from "react";

//custom hooks must start with 'use'
//don't put presentation in here.

const useCounter = (change) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => change(prevCounter));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
};

export default useCounter;
