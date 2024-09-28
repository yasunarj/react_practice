import { useState } from "react";

const Dynamic = () => {
  const [asyncState, setAsyncState] = useState<number>(0);
  const [ doubleState, setDoubleState ] = useState<number>(0);


  const calcAsync = async () => {
    const res = await import("./asyncAdd");
    const result: number = await res.asyncAdd(20);
    setAsyncState(prev => prev + result);
  }

  const calcDouble = async () => {
    const res = await import("./asyncAdd");
    setDoubleState(res.double(10));
  } 

  return (
    <>
      <div className="mb-8">
        <h2 className="text-center text-2xl font-bold mb-8">Async Add(20)</h2>
        <button
          className="block mx-auto border-2 border-gray-700 px-2 mb-2"
          onClick={calcAsync}
        >
          calc async
        </button>
        <p className="text-center">{asyncState}</p>
      </div>
      <div>
      <h2 className="text-center text-2xl font-bold mb-8">Double</h2>
        <button
          className="block mx-auto border-2 border-gray-700 px-2 mb-2"
          onClick={calcDouble}
        >
          calc double(10)
        </button>
        <p className="text-center">{doubleState}</p>
      </div>
    </>
  );
};

export default Dynamic;
