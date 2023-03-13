import React, { useState } from 'react';
import { FlatList, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';


export const arrItems = [
  { name: 'Item 1' },
  { name: 'Item 2' },
  { name: 'Item 3' },
  { name: 'Item 4' },
  { name: 'Item 5' },
  { name: 'Item 6' },
  { name: 'Item 7' },
  { name: 'Item 8' },
  { name: 'Item 9' },
  { name: 'Item 10' },
  { name: 'Item 11' },
  { name: 'Item 12' },
];

export const data = [
  {
    title: 'Title 1',
    data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
  },
  {
    title: 'Title 2',
    data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
  },
  {
    title: 'Title 3',
    data: ['Item 3-1'],
  },
  {
    title: 'Title 4',
    data: ['Item 4-1', 'Item 4-2'],
  }
]

const App = () => {

  const [listItems, setListItems] = useState(arrItems);
  const [refreshing, setRefreshing] = useState(false);
  const [Sections, setSections] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ]);

  const onRefresh = () => {
    setRefreshing(true);
    const adding_index = Sections.length + 1;
    setSections([...Sections,
    {
      title: 'Title ' + adding_index,
      data:
        [
          'Item ' + adding_index + '-1',
          'Item ' + adding_index + '-2'
        ],
    }
    ]);
    setRefreshing(false);
  }

  return (
    /* EXERCISE */
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Sections}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text_item}>{item}</Text>
        </View >
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.header}>
          <Text style={styles.text_header}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        < RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />

    /* SECTION LIST */
    // <SectionList
    //   keyExtractor={(item, index) => index.toString()}
    //   sections={data}
    //   renderItem={({ item }) => (
    //     <Text style={styles.text}>{item}</Text>
    //   )}
    //   renderSectionHeader={({ section }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{section.title}</Text>
    //     </View>
    //   )}
    // />

    /* FLAT LIST */
    // <FlatList
    //   data={listItems}
    //   keyExtractor={(item, index) => index.toString()}
    //   renderItem={({ item }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       color={['#ff00ff']}
    //     />
    //   }
    // />
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  item: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_header: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
  text_item: {
    color: '#000000',
    fontSize: 35,
    margin: 5,
  },
});

export default App;
