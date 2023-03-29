import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {

  const pnPressHandler = () => {
    navigation.navigate("Product")
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
          Home Screen
        </Text>
      <Pressable
        onPress={pnPressHandler}
        style={({presses}) => ({ backgroundColor: presses ? '#ddd' : '#0f0' })}
      >
        <Text style={styles.text}>
          Go to Product Screen
        </Text>
      </Pressable>
    </View>
  );
}

function Product() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Product Screen
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
})

export default App;