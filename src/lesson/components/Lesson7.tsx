import { useState } from "react";
import Dynamic from "./Lesson7-comp/Dynamic";

const Lesson = () => {
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
          { isDisp ? "Lesson7を非表示にする" : "Lesson7を表示する" }
        </button>
        { isDisp && <Dynamic /> }
      </div>
    </>
  );
};

export default Lesson;
