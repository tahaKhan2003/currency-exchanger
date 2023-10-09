// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import CurrencyInput from './Components/CurrencyInput';
// import CurrencyInput2 from './Components/CurrencyInput';
// import axios from 'axios';
import Exchanger from './Components/Exchanger';

function App() {
  // const [amountFrom, setAmountFrom] = useState(1);
  // const [currencyFrom, setCurrencyFrom] = useState('USD');
  // const [currencyTo, setCurrencyTo] = useState('EUR');
  // const [convertedValue, setConvertedValue] = useState(null);
  // const [rates, setRates] = useState({});
  // const [convertClicked, setConvertClicked] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get('http://data.fixer.io/api/latest?access_key=11ed8f60687ac0b8069d74a858cddf19')
  //     .then((response) => {
  //       setRates(response.data.rates);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (rates[currencyFrom] && rates[currencyTo] && amountFrom && convertClicked) {
  //     const newConvertedValue = (amountFrom * rates[currencyTo]) / rates[currencyFrom];
  //     setConvertedValue(newConvertedValue.toFixed(2));
  //   }
  // }, [amountFrom, currencyFrom, currencyTo, rates, convertClicked]);

  // function handleAmountFromChange(newAmountFrom) {
  //   setAmountFrom(newAmountFrom);
  // }

  // function handleCurrencyFromChange(newCurrencyFrom) {
  //   setCurrencyFrom(newCurrencyFrom);
  // }

  // function handleCurrencyToChange(newCurrencyTo) {
  //   setCurrencyTo(newCurrencyTo);
  // }

  // function handleConvertClick() {
  //   setConvertClicked(true);
  // }

  return (
    <Exchanger/>
  //   <div className="container mt-5">
  //     <div className="row">
  //       <div className="col-md-6 offset-md-3 text-center">
  //         <h3>Convert Currency</h3>
  //         <CurrencyInput
  //           onCurrencyChange={handleCurrencyFromChange}
  //           onAmountChange={handleAmountFromChange}
  //           currency={currencyFrom}
  //           currencies={Object.keys(rates)}
  //           amount={amountFrom}
  //         />
  //         <CurrencyInput2
  //           onCurrencyChange={handleCurrencyToChange}
  //           currency={currencyTo}
  //           currencies={Object.keys(rates)}
  //           amount={convertedValue !== null ? convertedValue : ''}
  //         />
  //         {convertClicked && (
  //           <table className="table table-bordered mt-3">
  //             <tbody>
  //               <tr>
  //                 <th>{`${amountFrom} ${currencyFrom}`}</th>
  //                 <td>=</td>
  //                 <td>{`${convertedValue} ${currencyTo}`}</td>
  //               </tr>
  //             </tbody>
  //           </table>
  //         )}
  //         <div className="mt-3">
  //           <button className="btn btn-primary" onClick={handleConvertClick}>
  //             Convert
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  );
}

export default App;
