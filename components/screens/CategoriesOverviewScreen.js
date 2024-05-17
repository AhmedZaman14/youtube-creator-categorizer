import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const categories = [
  { name: 'ASMR' },
  { name: 'Comedy' },
  { name: 'Education' },
  { name: 'News' },
  { name: 'Vlogging' },
  { name: 'Tech' },
  { name: 'Video Games' },
  { name: 'Fashion' },
  { name: 'Cooking' },
  { name: 'Music' },
];

const CategoriesOverviewScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate('Category', { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress(item)}>
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
  categoryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default CategoriesOverviewScreen;
