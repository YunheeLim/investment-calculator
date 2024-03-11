import { useState } from "react";

import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [initial_investment, setInitial_investment] = useState('');
  const [annual_investment, setAnnual_investment] = useState('');
  const [expected_return, setExpected_return] = useState('');
  const [duration, setDuration] = useState('');

  return (
    <>
      <UserInput 
        onSetInitial_investment={setInitial_investment}
        onSetAnnual_investment={setAnnual_investment}
        onSetExpected_return={setExpected_return}
        onSetDuration={setDuration}
      />
      <Result 
        initial_investment={initial_investment}
        annual_investment={annual_investment}
        expected_return={expected_return}
        duration={duration}
      />
    </>

  );
}

export default App
