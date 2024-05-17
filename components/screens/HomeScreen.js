import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { name: 'ASMR', icon: require('../../assets/asmr.jfif') },
  { name: 'Comedy', icon: require('../../assets/comedy.jpg') },
  { name: 'Education', icon: require('../../assets/edu.jfif') },
  { name: 'News', icon: require('../../assets/news.jfif') },
  { name: 'Vlogging', icon: require('../../assets/vlog.png') },
  { name: 'Tech', icon: require('../../assets/tech.png') },
  { name: 'Video Games', icon: require('../../assets/videogames.jfif') },
  { name: 'Fashion', icon: require('../../assets/fashion.jfif') },
  { name: 'Cooking', icon: require('../../assets/cooking.jfif') },
  { name: 'Music', icon: require('../../assets/music.jfif') },
];

const popularCreators = [
  { id: '1', name: 'MKBHD', thumbnail: require('../../assets/mkbhd.jfif') },
  { id: '2', name: 'Linus Tech Tips', thumbnail: require('../../assets/asmr.jfif') },
  // Add more popular creators here
];

const favoriteCreators = [
  { id: '1', name: 'Favorite Creator 1', thumbnail: require('../../assets/mkbhd.jfif') },
  { id: '2', name: 'Favorite Creator 2', thumbnail: require('../../assets/mkbhd.jfif') },
  // Add more favorite creators here
];

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from YouTube API when component mounts
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCs-k7SX-M6vZrMr__UcD0q1hWC6cfhFRQ&part=snippet&q=${searchTerm}`);
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleSearch = () => {
    // Trigger the search functionality
    console.log('Search term:', searchTerm);
    fetchVideos();
  };

  const handleCategoryPress = (category) => {
    navigation.navigate('Category', { category });
  };

  const handleCreatorPress = (creator) => {
    navigation.navigate('CreatorInfo', { creator });
  };

  const handleSeeAllCategories = () => {
    navigation.navigate('CategoriesOverview');
  };

  const handleSeeAllPopularCreators = () => {
    navigation.navigate( 'PopularCreators' );
  };

  const handleSeeAllFavorites = () => {
    navigation.navigate('Favorites');
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity onPress={handleSettingsPress} style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search for creators..."
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Categories section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity onPress={handleSeeAllCategories}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress(item)}>
            <Image source={item.icon} style={styles.categoryIcon} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Popular Creators section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Creators</Text>
        <TouchableOpacity onPress={handleSeeAllPopularCreators}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
     <FlatList
  horizontal
  data={videos} // Use the videos state instead of popularCreators
  keyExtractor={(item) => item.id.videoId} // Assuming each item has a unique videoId
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.creatorItem} onPress={() => handleCreatorPress(item)}>
      <Image source={{ uri: item.snippet.thumbnails.default.url }} style={styles.creatorThumbnail} />
      <Text>{item.snippet.title}</Text>
    </TouchableOpacity>
  )}
  showsHorizontalScrollIndicator={false}
/>

      {/* Favorites section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Favorites</Text>
        <TouchableOpacity onPress={handleSeeAllFavorites}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={favoriteCreators}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.creatorItem} onPress={() => handleCreatorPress(item)}>
            <Image source={item.thumbnail} style={styles.creatorThumbnail} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 5,
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
  },
  searchButton: {
    padding: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  }, sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: 'blue',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryIcon: {
    width: 85,
    height: 85,
    borderRadius: 10,
    marginBottom: 5,
  },
  creatorItem: {
    alignItems: 'center',
    marginRight: 10,
  },
  creatorThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
});

export default HomeScreen;