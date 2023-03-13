import React, { useState } from 'react';
import { FlatList, RefreshControl, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {

  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder={'AdStar'}
        onChangeText={(value) => setName(value)}
      />
      <Text style={styles.text}>
        Your name is: {name}
      </Text>
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
    fontSize: 20
  }
});

export default App;
