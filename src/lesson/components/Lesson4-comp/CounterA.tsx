import { useState, useCallback } from "react";
import Child from "./Child";

const CounterA = () => {
  const [countA, setCountA] = useState<number>(0);
  const [countB, setCountB] = useState<number>(0);
  console.log("%cParent render", "color: #8080e0");

  const clickHandlerB = useCallback(()
  : void => {
    console.log('Button click');
    setCountB(prev => ++prev);
    }, [countB]);

    console.log('countB', countB);
  return (
    <>
      <div className="w-4/5 bg-yellow-600 p-3 mx-auto mb-3">
        <div className="w-4/5 m-auto p-3 bg-yellow-500">
          <h3 className="font-bold text-xl mb-2">親コンポーネント領域</h3>
          <div className="flex justify-between">
            <button
              className="bg-white px-5 py-1 mb-2 border-2 border-gray-400 shadow-lg active:bg-gray-300 hover:bg-gray-200"
              onClick={() => {
                setCountA((prev) => ++prev);
              }}
            >
              A
            </button>
          </div>
          <p>ボタンAクリック回数: {countA}</p>
          <Child countB={countB} clickB={clickHandlerB} />
        </div>
      </div>
    </>
  );
};

export default CounterA;
