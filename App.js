import React, { useState } from 'react';
import { Button, FlatList, Pressable, RefreshControl, ScrollView, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {

  const [name, setName] = useState('');
  const [submitted, SetSubmitted] = useState(false);

  const onPressHandler = () => {
    SetSubmitted(!submitted);
    if (submitted === true) {
      setName('');
    }
  }

  const handleChangeText = (value) => {
    setName(value)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder={'AdStar'}
        onChangeText={handleChangeText}
        value={name}
      />
      {/* <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        disabled={submitted}
      /> */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.5}
      >
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity> */}
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#ddd' : '#00ff00' },
          styles.button
        ]}
        android_ripple={{color: '#00f'}}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      {
        submitted ?
          <Text style={styles.text}>
            You are registered as {name}
          </Text>
          : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  text: {
    color: '#000',
    fontSize: 20,
    margin: 10
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    // backgroundColor: '#00ff00',
    alignItems: 'center'
  }
});

export default App;
