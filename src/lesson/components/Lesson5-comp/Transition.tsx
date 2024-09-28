import { useState, useDeferredValue } from "react"
const generateDummyItem = (num: number) => {
  return new Array(num)
    .fill(null)
    .map((arr, index) => (arr = `item ${index}`));
};
const items = generateDummyItem(8);

const Transition = () => {
  // const [isPending, startTransition] = useTransition();
  const [inputState, setInputState] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // startTransition(() => {
    // });
    setInputState(e.target.value);
  }

  const result = items
    .filter((item) => {
      return item.includes(inputState);
    })
    .map((item) => {
      return <li key={item}>{item}</li>;
    });

  const deferredItem = useDeferredValue(result);

  return (
    <>
      <input
        className="border-2 border-gray-400 shadow-md block mx-auto mb-3 p-1"
        type="text"
        value={inputState}
        onChange={changeHandler}
      />
      {/* { isPending && <div>Loading...</div> } */}
      <div className="text-center">
        <ul>{deferredItem}</ul>
      </div>
    </>
  );
};

export default Transition;
