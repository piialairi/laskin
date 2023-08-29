import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [number, setNumber] = useState("");
  const [secNumber, setSecNumber] = useState("");
  let [result, setResult] = useState('')

  const sumNumbers = () => {
    result = Number(number) + Number(secNumber);
    setResult(result);
  }

  const subtractNumbers = () => {
    result = Number(number) - Number(secNumber);
    setResult(result);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Result: {result}</Text>
        <TextInput
          keyboardType='numeric'
          style={{ width: 200, borderColor: 'grey', borderWidth: 1 }}
          onChangeText={number => setNumber(number)}
        />
        <TextInput
          keyboardType='numeric'
          style={{ width: 200, borderColor: 'grey', borderWidth: 1 }}
          onChangeText={secNumber => setSecNumber(secNumber)}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Button onPress={sumNumbers} title='+' color={'black'} />
        <Button onPress={subtractNumbers} title='-' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//const [operation, setOperation] = useState(""); // add a state variable for the operation

// <Text>Result: {operation === "+" ? Result() : operation === "-" ? Subtraction() : null} {number}</Text> 
// use a ternary expression to render the result based on the operation

// <Button onPress={() => setOperation("+")} title='+' color={'black'} /> 
// use an arrow function to set the operation state to "+"
// <Button onPress={() => setOperation("-")} title='-' /> 
// use an arrow function to set the operation state to "-"

//Tämä oli oma alkuperäinen ei-toimiva ratkaisu:
/*<Text>Result: {Result()} {Subtraction()}</Text>
  --
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Button onPress={Result} title='+' color={'black'} />
        <Button onPress={Subtraction} title='-' />
      </View >*/