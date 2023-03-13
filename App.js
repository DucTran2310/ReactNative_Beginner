import React, { useState } from 'react';
import {Button, Linking, StyleSheet, Text, View} from 'react-native';

const App = () => {

  const [name, setName] = useState('Hello');

  const handleSetName = () => {
    setName('Hello AdStar2310!!!')
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
      <Button title='Update State' onPress={handleSetName}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '50%',
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#ff00ff',
    borderRadius: 10
  },
  text: {
    color: '#000',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase'
  },
  button: {
    width: 200,
    height: 60
  }
});

export default App;
