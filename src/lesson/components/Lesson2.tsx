import { useState } from "react"; 
import Timer from "./Lesson2-comp/Timer";

const Lesson2 = () => {
  const [ isDisp, setIsDisp ] = useState<boolean>(false);
  return(
    <>
      <div className="mb-3"> 
        <button className="block m-auto bg-red-700 px-4 py-2 text-white rounded-lg" onClick={() => {setIsDisp(prev => !prev)}}>{isDisp ? "Lesson2を非常時にする" : "Lesson2を表示する"}</button>
        { isDisp && <Timer />}
      </div>
    </>
  );
};

export default Lesson2;