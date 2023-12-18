// import React from 'react';
// import { View, TextInput } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
//
//
// interface CurrencyInputProps {
//     amount: string;
//     currency: string;
//     currencies: string[];
//     onAmountChange: (amount: string) => void;
//     onCurrencyChange: (currency: string) => void;
// }
//
// const CurrencyInput: React.FC<CurrencyInputProps> = ({amount, currency, currencies, onAmountChange,onCurrencyChange,
//                                                      }) => {
//     return (
//         <View>
//             <TextInput
//                 style={{ borderWidth: 1, borderColor: 'gray', padding: 8 }}
//                 value={amount}
//                 onChangeText={(text) => onAmountChange(text)}
//                 keyboardType="numeric"
//             />
//             <Picker
//                 selectedValue={currency}
//                 onValueChange={(itemValue) => onCurrencyChange(itemValue as string)}
//                 style={{ width: 100 }}
//             >
//                 {currencies.map((cur) => (
//                     <Picker.Item key={cur} label={cur} value={cur} />
//                 ))}
//             </Picker>
//         </View>
//     );
// };
//
// export default CurrencyInput;
// import React from 'react';
// import { View, TextInput } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
//
// interface CurrencyInputProps {
//     amount: number;
//     currency: string;
//     currencies: string[];
//     onAmountChange: (amount: number) => void;
//     onCurrencyChange: (currency: string) => void;
// }
//
// const CurrencyInput: React.FC<CurrencyInputProps> = ({
//                                                          amount,
//                                                          currency,
//                                                          currencies,
//                                                          onAmountChange,
//                                                          onCurrencyChange,
//                                                      }) => {
//     return (
//         <View>
//             <TextInput
//                 style={{ borderWidth: 1, borderColor: 'gray', padding: 8 }}
//                 value={amount.toString()}  // Convert the number to a string for TextInput
//                 onChangeText={(text) => onAmountChange(parseFloat(text) || 0)}  // Ensure it's a number
//                 keyboardType="numeric"
//             />
//             <Picker
//                 selectedValue={currency}
//                 onValueChange={(itemValue) => onCurrencyChange(itemValue as string)}
//                 style={{ width: 100 }}
//             >
//                 {currencies.map((cur) => (
//                     <Picker.Item key={cur} label={cur} value={cur} />
//                 ))}
//             </Picker>
//         </View>
//     );
// };
//
// export default CurrencyInput;

// import React from 'react';
// import { View, TextInput} from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// interface CurrencyInputProps {
//     amount: number;
//     currency: string;
//     currencies: string[];
//     onAmountChange: (amount: number) => void;
//     onCurrencyChange: (currency: string) => void;
// }
//
// const CurrencyInput: React.FC<CurrencyInputProps> = ({
//                                                          amount,
//                                                          currency,
//                                                          currencies,
//                                                          onAmountChange,
//                                                          onCurrencyChange,
//                                                      }) => {
//     const handleAmountChange = (text: string) => {
//         const parsedAmount = parseFloat(text);
//         onAmountChange(isNaN(parsedAmount) ? 0 : parsedAmount);
//     };
//
//     return (
//         <View>
//             <TextInput
//                 style={{ borderWidth: 1, borderColor: 'gray', padding: 8 }}
//                 value={amount.toString()}
//                 onChangeText={handleAmountChange}
//                 keyboardType="numeric"
//             />
//             <Picker
//                 selectedValue={currency}
//                 onValueChange={(itemValue) => onCurrencyChange(itemValue as string)}
//                 style={{ width: 100 }}
//             >
//                 {currencies.map((cur) => (
//                     <Picker.Item key={cur} label={cur} value={cur} />
//                 ))}
//             </Picker>
//         </View>
//     );
// };
//
// export default CurrencyInput;

import React from 'react';
import { View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
interface CurrencyInputProps {
    amount: number;
    currency: string;
    currencies: string[];
    onAmountChange: (amount: number) => void;
    onCurrencyChange: (currency: string) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
                                                         amount,
                                                         currency,
                                                         currencies,
                                                         onAmountChange,
                                                         onCurrencyChange,
                                                     }) => {
    const handleAmountChange = (text: string) => {
        const parsedAmount = parseFloat(text);
        onAmountChange(isNaN(parsedAmount) ? 0 : parsedAmount);
    };

    return (
        <View>
            <TextInput
                style={{ borderWidth: 1, borderColor: 'gray', padding: 8 }}
                value={amount.toString()}
                onChangeText={handleAmountChange}
                keyboardType="numeric"
            />
            <Picker
                selectedValue={currency}
                onValueChange={(itemValue) => onCurrencyChange(itemValue as string)}
                style={{ width: 100 }}
            >
                {currencies.map((cur) => (
                    <Picker.Item key={cur} label={cur} value={cur} />
                ))}
            </Picker>
        </View>
    );
};

export default CurrencyInput;
