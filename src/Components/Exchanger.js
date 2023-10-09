import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './index.css';

function Exchanger() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [result, setResult] = useState(null);
    const [exchangeRates, setExchangeRates] = useState({});

    useEffect(() => {
        // Make an API call to get actual exchange rates
        axios.get('http://data.fixer.io/api/latest?access_key=11ed8f60687ac0b8069d74a858cddf19')
            .then((response) => {
                setExchangeRates(response.data.rates);
            })
            .catch((error) => {
                console.error('Error fetching exchange rates:', error);
            });
    }, []);

    const handleConvert = () => {
        const convertedAmount = (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
        setResult(convertedAmount.toFixed(2));
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center">
                        <h2 className='font'>Currency Converter</h2>
                    </div>
                    <div className="form-group">
                        <label className='font mt-4'   >Amount</label>
                        <input
                            type="number"
                            className="form-control"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className='font' >From Currency</label>
                        <select
                            className="form-control "
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        >
                            {Object.keys(exchangeRates).map((currency) => (
                                <option className='bg-black bg-gradient' key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className='font'>To Currency</label>
                        <select
                            className="form-control"
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                        >
                            {Object.keys(exchangeRates).map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-grad mt-5 font" onClick={handleConvert}>
                            Convert
                        </button>
                    </div>
                    {result !== null && (
                        <div className="mt-3">
                            <h5 className='font'>Result:</h5>
                            <p>{`${amount} ${fromCurrency} = ${result} ${toCurrency}`}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Exchanger;
