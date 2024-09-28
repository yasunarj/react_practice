import { useState } from "react"
import Dynamic2 from "./Lesson8-comp/Dynamic2";

const Lesson8 = () => {
  const [isDisp, setIsDisp] = useState<boolean>(true);
  return (
    <>
      <div className="mb-3">
        <button
          className="block m-auto bg-red-700 px-4 py-2 text-white rounded-lg mb-8"
          onClick={() => {
            setIsDisp((prev) => !prev);
          }}
        >
          { isDisp ? "Lesson8を非表示にする" : "Lesson8を表示する" }
        </button>
        { isDisp && <Dynamic2 /> }
      </div>
    </>
  );
};

export default Lesson8;