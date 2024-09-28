import { useState, useEffect, useLayoutEffect } from "react";

const Lesson1 = () => {
  const [isDisp, setIsDisp] = useState<boolean>(false);

  return (
    <>
      <div>
        <button
          className="block text-center m-auto my-3 bg-red-700 px-4 py-2 rounded-lg text-white"
          onClick={() => {
            setIsDisp((prev) => !prev);
          }}
        >
          {isDisp ? "非常時にする" : "Lesson1を表示する"}
        </button>
        {isDisp && <Timer />}
        {isDisp && <Random />}
      </div>
    </>
  );
};

const Random = () => {
  const [randomState, setRandomState] = useState<number>(0);
  const makeRandom = () => {
    const state = Math.random() * 300;
    setRandomState(state);
  };
  useLayoutEffect(() => {
    if (randomState === 0) {
      makeRandom();
    }
  }, [randomState]);

  return (
    <>
      <div className="text-center">
        <h2 className="text-bold text-2xl text-gray-700 mb-5">State:</h2>
        <p className="text-blue text-xl mb-3">{randomState}</p>
        <button
          className="bg-gray-400 px-4 py-2 rounded-md text-white"
          onClick={() => setRandomState(0)}
        >
          カウントリセット
        </button>
      </div>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => ++prev);
    }, 1000);

    return (): void => clearInterval(intervalId);
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem("time-key", time.toString());
  }, [time]);

  useEffect(() => {
    const saveTime = localStorage.getItem("time-key");
    if (saveTime !== null) {
      setTime(parseInt(saveTime));
    }
  }, []);

  return (
    <>
      <div className="text-center text-3xl text-blue-400 my-3">
        <time>{time}</time>
        <span>秒経過</span>
      </div>
    </>
  );
};

export default Lesson1;
