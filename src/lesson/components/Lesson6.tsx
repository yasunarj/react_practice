import Todo from "./Lesson6-comp/Todo";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./Lesson6-comp/store/store";


const Lesson6 = () => {
  const [isDisp, setIsDisp] = useState<boolean>(false);
  return (
    <>
      <div>
        <button
          className="block m-auto bg-red-700 px-4 py-2 text-white rounded-lg mb-8"
          onClick={() => {
            setIsDisp((prev) => !prev);
          }}
        >
          {isDisp ? "Lesson6を非表示にする" : "Lesson6を表示する"}
        </button>
        {isDisp && 
          <Provider store={store}>
            <Todo />
          </Provider>
        }
      </div>
    </>
  );
};

export default Lesson6;
