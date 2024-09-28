import { useState } from "react" 
const useCount = () => {
  const [ count, setCount ] = useState(0);

  const countUp = () => {
    setCount(prev => ++prev);
  }

  return {
    count,
    countUp
  }
}

export default useCount;