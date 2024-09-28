import { useState, useEffect } from 'react';

const useTimer = () => {
  const [ time, setTime ] = useState<number>(0);
  const [ isRunning, setIsRunning ] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number | null = null;
    if(isRunning) {
      intervalId = setInterval(() => {
        setTime(prev => ++prev);
      }, 1000);
    }
    return () => {
      if(intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const resetTime = () => {
    setTime(0);
    setIsRunning(prev => !prev);
  }

  return {
    time,
    isRunning,
    setIsRunning,
    resetTime,
  }
};

export default useTimer;