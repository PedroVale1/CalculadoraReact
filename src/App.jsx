import "./reset.css";
import "./app.css";
import Input from './components/Input';
import Button from './components/Button';
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleOperation = (op) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    }
    setOperation(op);
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation) {
      let result;
      const num1 = Number(firstNumber);
      const num2 = Number(currentNumber);

      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num2 !== 0 ? num1 / num2 : 'Erro'; // Verifica divisão por zero
          break;
        default:
          break;
      }

      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  };

  return (
    <div className="container">
      <div className="content">
        <Input value={`${firstNumber !== '0' ? firstNumber : ''} ${operation} ${currentNumber !== '0' ? currentNumber : ''}`} />
        <div className="row">
          <Button label="C" onClick={handleOnClear} />
          <Button label="/" onClick={() => handleOperation('/')} />
        </div>
        <div className="row">
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="*" onClick={() => handleOperation('*')} />
        </div>
        <div className="row">
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </div>
        <div className="row">
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </div>
        <div className="row">
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="=" onClick={handleEquals} />
        </div>
      </div>
    </div>
  );
}

export default App;
