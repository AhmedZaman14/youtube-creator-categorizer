import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const popularCreators = [
  { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
  { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  // Add more popular creators here
];

const PopularCreatorsScreen = ({ navigation }) => {
  const handleCreatorPress = (creator) => {
    navigation.navigate('CreatorInfo', { creator });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Creators</Text>
      <FlatList
        data={popularCreators}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.creatorItem} onPress={() => handleCreatorPress(item)}>
            <Image source={item.thumbnail} style={styles.creatorThumbnail} />
            <View style={styles.creatorInfo}>
              <Text style={styles.creatorName}>{item.name}</Text>
              {/* Add any additional creator info here */}
            </View>
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
  creatorInfo: {
    flex: 1,
  },
  creatorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PopularCreatorsScreen;
