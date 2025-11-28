import { useState } from 'react';

export default function CalculatorPage() {
  const [display, setDisplay] = useState('0');
  const [isResult, setIsResult] = useState(false);

  const handleButtonClick = (value: string) => {
    if (isResult) {
      setDisplay(value);
      setIsResult(false);
      return;
    }

    if (display === '0' && value !== '.') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setIsResult(false);
  }

  const handleCalculate = () => {
    try {
      // Replace display symbols with evaluatable operators
      let expression = display.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '*0.01');
      
      // Basic validation to prevent unsafe evaluation
      if (/[^0-9+\-*/(). ]/.test(expression)) {
        setDisplay('Error');
        return;
      }
      
      const result = new Function('return ' + expression)();
      setDisplay(String(result));
      setIsResult(true);
    } catch (error) {
      setDisplay('Error');
      setIsResult(true);
    }
  };
  
  const handleSpecialAction = (btn: string) => {
      switch(btn) {
          case 'C':
              handleClear();
              break;
          case '=':
              handleCalculate();
              break;
          case '+/-':
              if (display !== '0') {
                setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
              }
              break;
          case '()':
              // Simple parenthesis logic
              const openParen = (display.match(/\(/g) || []).length;
              const closeParen = (display.match(/\)/g) || []).length;
              if (openParen > closeParen) {
                  handleButtonClick(')');
              } else {
                  handleButtonClick('(');
              }
              break;
          default:
              handleButtonClick(btn);
              break;
      }
  }

  const buttons = [
    'C', '()', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '+/-', '0', '.', '=',
  ];

  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <div className='w-full max-w-xs bg-gray-900 rounded-lg shadow-lg p-4'>
        <div className='text-white text-5xl text-right mb-4 pr-2 h-20 flex items-end justify-end overflow-x-auto'>
          {display}
        </div>
        <div className='grid grid-cols-4 gap-2'>
          {buttons.map((btn) => {
            const isOperator = ['÷', '×', '-', '+', '='].includes(btn);
            const isTopRow = ['C', '()', '%'].includes(btn);
            return (
              <button
                key={btn}
                onClick={() => handleSpecialAction(btn)}
                className={`text-2xl rounded-full h-16 w-16 flex items-center justify-center transition-colors ${ 
                  isOperator ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 
                  isTopRow ? 'bg-gray-400 text-black hover:bg-gray-500' : 
                  'bg-gray-700 text-white hover:bg-gray-800' 
                }`}>
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}