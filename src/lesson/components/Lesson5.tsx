import { useState } from "react";
import Transition from "./Lesson5-comp/Transition";

const Lesson5 = () => {
  const [isDisp, setIsDisp] = useState<boolean>(false);
  return (
    <>
      <div className="">
        <button
          className="block m-auto bg-red-700 px-4 py-2 text-white rounded-lg mb-8"
          onClick={() => {
            setIsDisp((prev) => !prev);
          }}
        >
          {isDisp ? "Lesson5を非表示にする" : "Lesson5を表示する"}
        </button>
        {isDisp && <Transition />}
      </div>
    </>
  );
};

export default Lesson5;
