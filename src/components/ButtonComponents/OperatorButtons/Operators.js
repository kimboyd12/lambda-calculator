import React from "react";
import { operators } from "../../../data";

//import any components needed

const calcOperators = operators;

//Import your array data to from the provided data file

const Operators = () => {
  const [operator, setOperatorState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div class="operators">
      {operator.map((operator, index) => (
        <OperatorButton key={index} operator={operator} />
      ))}
    </div>
  );
};

export default Operators;
