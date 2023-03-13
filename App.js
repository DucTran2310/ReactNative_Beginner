import React, { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';


export const arrItems = [
  { key: 1, item: 'Item 1' },
  { key: 2, item: 'Item 2' },
  { key: 3, item: 'Item 3' },
  { key: 4, item: 'Item 4' },
  { key: 5, item: 'Item 5' },
  { key: 6, item: 'Item 6' },
  { key: 7, item: 'Item 7' },
  { key: 8, item: 'Item 8' },
  { key: 9, item: 'Item 9' },
  { key: 10, item: 'Item 10' },
  { key: 11, item: 'Item 11' },
  { key: 12, item: 'Item 12' },
];

const App = () => {

  const [listItems, setListItems] = useState(arrItems);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setListItems([...listItems, {key: 13, item: 'Item 13'}]);
    setRefreshing(false);
  }

  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
          color={['#ff00ff']}
        />
      }
    >
      {
        listItems.map(ele => (
          <View style={styles.item} key={ele.key}>
            <Text style={styles.text}>{ele.item}</Text>
          </View>
        ))
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: '#000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  }
});

export default App;
