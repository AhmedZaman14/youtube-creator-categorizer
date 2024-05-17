import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';


const creatorsByCategory = {
  Tech: [
    { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
    { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  ],
  ASMR: [
    { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
    { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  ],
  Comedy: [
    { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
    { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  ],
  Education: [
    { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
    { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  ],
  News: [
    { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
    { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  ],
  Vlogging: [
    { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
    { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  ],
  Fashion: [
    { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
    { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  ],
  Cooking: [
    { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
    { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  ],
  Music: [
    { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
    { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  ],
  'Video Games': [
    { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
    { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  ],
};

const CategoryScreen = ({ route, navigation }) => {
  const { category } = route.params;

  const handleCreatorPress = (creator) => {
    navigation.navigate('CreatorInfo', { creator });
  };

  return (
    <View style={styles.container}>
     
      <FlatList
        data={creatorsByCategory[category.name]}
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

export default CategoryScreen;
