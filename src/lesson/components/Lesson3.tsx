import { useState } from "react";
import Test from "./Lesson3-comp/Test1";
const Lesson3 = () => {
  const [ isDisp, setIsDisp ] = useState(false);
  return (
    <>
      <div className="mb-3">
        <button 
        className="block m-auto bg-red-700 px-4 py-2 text-white rounded-lg"
        onClick={() => {setIsDisp(prev => !prev)}}>
          { isDisp ? "Lesson3を非表示にする" : "Lesson3を表示する" }
        </button>
          { isDisp && <Test /> }
      </div>
    </>
  );
};

export default Lesson3;