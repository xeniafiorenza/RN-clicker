import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ClickerButton(props) {
  return (
    <TouchableOpacity style={[props.variant==="reset" ? styles.resetButton : styles.lightButton, styles.button]} onPress={props.press} >
      <Text style={[props.variant==="reset" ? {color:'#fff'} : {color:'#fff'}, styles.buttonText]} >{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '65%',
    height: 50,
    margin: 7,
    borderRadius: 50,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    justifyContent: 'center'
  },
  lightButton: {
    backgroundColor: '#ff79c6',
  },
  resetButton: {
    backgroundColor: '#44475a',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});