import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(''); //fetch the date of first number form the react inout access
  const [num2, setNum2] = useState('');//fetch the date of second number form the react inout access
  const [result, setResult] = useState(''); //adding two number  

  const handleAddition = () => {
    setResult(parseInt(num1) + parseInt(num2));
  }

  return (
    <div>
      <h1>Add Two Numbers</h1>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <br/>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <br/>
      <button onClick={handleAddition}>Add</button>
      <br/>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;