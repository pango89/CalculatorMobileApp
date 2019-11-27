import React, {useState} from 'react';
import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';

import Row from './components/Row';
import Button from './components/Button';
import calculator, {initialState} from './util/calculator';
import IState from './interfaces/calculator/IState.interface';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 80,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
});

const CalculatorApp: React.FC = () => {
  const [myState, updateState] = useState<IState>(initialState);
  const handleTap = (type: string, value?: string | number) => {
    updateState({...myState, ...calculator(type, myState, value)});
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(myState.currentValue).toLocaleString()}
        </Text>
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => handleTap('clear')}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => handleTap('posneg')}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => handleTap('percentage')}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => handleTap('operator', '/')}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => handleTap('number', 7)} />
          <Button text="8" onPress={() => handleTap('number', 8)} />
          <Button text="9" onPress={() => handleTap('number', 9)} />
          <Button
            text="x"
            theme="accent"
            onPress={() => handleTap('operator', '*')}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => handleTap('number', 4)} />
          <Button text="5" onPress={() => handleTap('number', 5)} />
          <Button text="6" onPress={() => handleTap('number', 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => handleTap('operator', '-')}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => handleTap('number', 1)} />
          <Button text="2" onPress={() => handleTap('number', 2)} />
          <Button text="3" onPress={() => handleTap('number', 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => handleTap('operator', '+')}
          />
        </Row>

        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => handleTap('number', 0)}
          />
          <Button text="." onPress={() => handleTap('number', '.')} />
          <Button text="=" theme="accent" onPress={() => handleTap('equal')} />
        </Row>
      </SafeAreaView>
    </View>
  );
};

export default CalculatorApp;
