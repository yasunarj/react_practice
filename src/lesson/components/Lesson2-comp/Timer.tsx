import useTimer from "./useTimer";

const Timer: React.FC = () => {
  const { time, isRunning, setIsRunning, resetTime } = useTimer();
  return (
    <>
      <div className="text-center m-4">
        <div className="text-2xl">{ time }</div>
        <div className="m-2">
          <button className="mr-2 bg-blue-400 text-white px-4 py-2 rounded-md" onClick={() => {
            setIsRunning(prev => !prev);
          }}>
            { isRunning ? "ストップ" : "スタート" }
          </button>
          <button className="mr-2 bg-blue-400 text-white px-4 py-2 rounded-md" onClick={() => {
            resetTime();
          }}>リセット</button>
        </div>
      </div>
    </>
  );
};

export default Timer;