import { useMemo } from "react";

interface COUNTB {
  countB: number;
  clickB: () => void;
}

const Child: React.FC<COUNTB> = ({ countB, clickB }) => {
  console.log("%cChild render", "color: #ed8787");
  return useMemo(() => {
    console.log("%cuseMemo", "color: green");
    return (
      <>
        <div className="w-2/3 mx-auto p-2 bg-yellow-300">
          <h3>子コンポーネント領域</h3>
          <button
            className="border-2 border-gray-400 bg-white px-5 py-1 hover:bg-gray-200 active:bg-gray-300"
            onClick={clickB}
          >
            B
          </button>
          <p> ボタンクリック回数: {countB}</p>
        </div>
      </>
    );
  }, []);
};

export default Child;
