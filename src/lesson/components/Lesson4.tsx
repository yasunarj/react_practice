import { useState } from "react";
import CounterA from "./Lesson4-comp/CounterA";

const Lesson4 = () => {
  const [isDisp, setIsDisp] = useState<boolean>(false);
  return (
    <>
      <div className="mb-3">
        <button
          className="block m-auto bg-red-700 px-4 py-2 text-white rounded-lg mb-8"
          onClick={() => {
            setIsDisp((prev) => !prev);
          }}
          >
          {isDisp ? "Lesson4を非表示にする" : "Lesson4を表示する"}
        </button>
          {isDisp && <CounterA />}
      </div>
    </>
  );
};

export default Lesson4;
