import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import CurrencyInput from './CurrencyInput';
import axios from 'axios';
import { format } from 'date-fns';

const CURRENCY_API = `https://open.er-api.com/v6/latest/USD?apikey`;

const App: React.FC = () => {
    const [amountOne, setAmountOne] = useState<number>(1);
    const [amountTwo, setAmountTwo] = useState<number>(1);
    const [currencyOne, setCurrencyOne] = useState<string>('PLN');
    const [currencyTwo, setCurrencyTwo] = useState<string>('USD');
    const [currenciesRates, setCurrenciesRates] = useState<any>({});

    useEffect(() => {
        axios
            .get(CURRENCY_API)
            .then((response) => {
                setCurrenciesRates(response.data.rates);
            })
            .catch((error) => {
                console.log(error);
                setCurrenciesRates(null);
            });
    }, []);

    useEffect(() => {
        if (!!currenciesRates) {
            handleAmountOneChange(1);
        }
    }, [currenciesRates]);

    const handleAmountOneChange = (amountOne: number) => {
        setAmountTwo(
            formatCurrency(amountOne * (currenciesRates[currencyTwo] / currenciesRates[currencyOne]))
        );
        setAmountOne(amountOne);
    };

    const formatCurrency = (number: number) => {
        return number.toFixed(2);
    };

    const handleAmountTwoChange = (amountTwo: number) => {
        setAmountOne(
            formatCurrency((amountTwo * currenciesRates[currencyOne]) / currenciesRates[currencyTwo])
        );
        setAmountTwo(amountTwo);
    };

    const handleCurrencyOneChange = (currencyOne: string) => {
        setAmountTwo(
            formatCurrency(amountOne * (currenciesRates[currencyTwo] / currenciesRates[currencyOne]))
        );
        setCurrencyOne(currencyOne);
    };

    const handleCurrencyTwoChange = (currencyTwo: string) => {
        setAmountOne(amountTwo * (currenciesRates[currencyOne] / currenciesRates[currencyTwo]));
        setCurrencyTwo(currencyTwo);
    };

    if (!currenciesRates) return <Text>Something went wrong...</Text>;

    if (Object.keys(currenciesRates).length === 0) return <Text>Loading...</Text>;

    return (
        <View>
            <Text>1 {currencyOne} equals</Text>
            <Text>
                {formatCurrency(amountTwo / amountOne)} {currencyTwo}
            </Text>
            <Text>{format(new Date(), 'yyyy-MM-dd h:mm')}</Text>
            <CurrencyInput
                amount={amountOne}
                currency={currencyOne}
                currencies={Object.keys(currenciesRates)}
                key={'input1'}
                onAmountChange={handleAmountOneChange}
                onCurrencyChange={handleCurrencyOneChange}
            />
            <CurrencyInput
                amount={amountTwo}
                currency={currencyTwo}
                currencies={Object.keys(currenciesRates)}
                key={'input2'}
                onAmountChange={handleAmountTwoChange}
                onCurrencyChange={handleCurrencyTwoChange}
            />
        </View>
    );
};

export default App;
