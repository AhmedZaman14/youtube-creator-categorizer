import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SearchResultsScreen = ({ route, navigation }) => {
  const { searchResults } = route.params;

  const handleCreatorPress = (creator) => {
    navigation.navigate('CreatorInfo', { creator });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Results</Text>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.creatorItem} onPress={() => handleCreatorPress(item)}>
            <Image source={item.thumbnail} style={styles.creatorThumbnail} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  creatorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  creatorThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default SearchResultsScreen;
