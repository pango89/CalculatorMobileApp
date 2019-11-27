import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';

interface Props {
  onPress: any;
  text: any;
  size?: any;
  theme?: any;
}

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 25,
  },
  textSecondary: {
    color: '#060606',
  },
  button: {
    backgroundColor: '#333333',
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: '#a6a6a6',
  },
  buttonAccent: {
    backgroundColor: '#f09a36',
  },
});

const Button: React.FC<Props> = props => {
  const buttonStyles: [any] = [styles.button];
  const textStyles: [any] = [styles.text];

  if (props.size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }

  if (props.theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (props.theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyles}>
      <Text style={textStyles}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
