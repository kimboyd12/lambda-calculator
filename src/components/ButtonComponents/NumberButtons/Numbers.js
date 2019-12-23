import React, { useState} from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";


const Numbers = () => {
  const [nums] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {nums.map((number) => {
        return <NumberButton number={number}/>
      })}
    </div>
  );
};

export default Numbers;