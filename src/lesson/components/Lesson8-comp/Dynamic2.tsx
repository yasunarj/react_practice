import { useState, lazy, Suspense, startTransition } from "react";
// import ComponentB from "./components/ComponentDynamicB";
// import ComponentA from "./components/ComponentDynamicA";

const LazyComponentA = lazy(() => import("./components/ComponentDynamicA"));
const LazyComponentB = lazy(() => import("./components/ComponentDynamicB"));


const Dynamic2 = () => {
  const [compA, setCompA] = useState<boolean>(false);

  const greet = (name: string): string => {
    return `Hello ${name}`;
  }

  console.log(greet("narinari"));
  
  return (
    <>
      <button
        onClick={() => {
          startTransition(() => {
            setCompA((prev) => !prev);
          });
        }}
        className="block mx-auto bg-gray-700 text-white px-2 py-1 rounded-md mb-2"
      >
        {compA ? "ComponentA" : "ComponentB"}
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </Suspense>
    </>
  );
};

export default Dynamic2;
