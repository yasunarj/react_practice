import useCount from "./hooks";

const Test = () => {
  const { count, countUp } = useCount();
  return (
    <>
      <div className="text-center">
        <div className="text-2xl">
          <div>Counts: {count}</div>
          <button className="block m-auto bg-blue-400 px-4 py-2 text-white rounded-md" onClick={countUp}>Count Up!</button>
        </div>
        
      </div>
    </>
  );
};

export default Test;