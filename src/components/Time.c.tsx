import React, { useState, useEffect } from "react";

interface Props {
  initialTime: number;
  rese: boolean;
}

const TimerComponent: React.FC<Props> = ({ initialTime, rese }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
};

export default TimerComponent;
