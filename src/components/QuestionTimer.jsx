import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]); //here we need to add dependencies because we're using 2 props
  //on the useEffect bellow we only use a setState function, not the state itself nor props

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
