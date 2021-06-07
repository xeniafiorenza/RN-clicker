import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import ClickerButton from './components/ClickerButton';

export default function App() {

  const [count, useCount] = useState(0);

  function showMessage() {
    var message = "";
    if (count==0) message = "You can also tap anywhere to increment!"
    else if (count==69||count==420) message = "haha meme number"
    else if (count%100==0) message = "💯".repeat(count/100)
    else if (count>=40) message = `You can do it${"!".repeat(count/10)}`
    else if (count>=30) message = "You can do it!!!"
    else if (count>=20) message = "Keep going!!"
    else if (count>=10) message = "Good job!"
    return message;
  }

  return (
    <TouchableWithoutFeedback onPress={ () => useCount(count+1) }>
      <View style={styles.container}>
        <Text style={styles.title}>Counter Dracula</Text>
        <Text style={styles.counter}>{count}</Text>
        <ClickerButton press={ () => useCount(count+1) } title="+1" />
        <ClickerButton press={ () => useCount(count-1) } title="-1" />
        <ClickerButton press={ () => useCount(0) } title="Reset" variant="reset" />
        <Text style={styles.message}>{showMessage()}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    color: '#fff',
    fontSize: 55,
    lineHeight: 60,
    fontWeight: 'bold', 
    textAlign: 'center',
    textShadowRadius: 0,
    textShadowColor: '#111',
    textShadowOffset: {
      width: 2,
      height: 3,
    },
  },
  counter: {
    color: '#fff',
    fontSize: 65,
    textAlign: 'center',
    textShadowRadius: 0,
    textShadowColor: '#1f1f1f',
    textShadowOffset: {
      width: 2,
      height: 3,
    },
    margin: 10,
  },
  message: {
    color: '#ddd',
    fontSize: 17,
    lineHeight: 21,
    textAlign: 'center',
    fontStyle: 'italic',
    marginVertical: 15,
  }
});
