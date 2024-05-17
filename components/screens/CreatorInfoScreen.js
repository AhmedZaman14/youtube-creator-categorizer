import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Linking } from 'react-native';

const CreatorInfoScreen = ({ route }) => {
  const { creator } = route.params;

  // Example data for the creator's profile and videos
  const profileData = {
    bio: "Tech reviewer and YouTube personality known for in-depth gadget reviews and industry insights.",
    subscribers: "15M",
    socialMedia: {
      twitter: "https://twitter.com/MKBHD",
      instagram: "https://instagram.com/MKBHD",
      youtube: "https://youtube.com/user/MKBHD"
    },
    videos: [
      { title: "Reviewing the Latest Smartphone", thumbnail: require('../../assets/asmr.jfif') },
      { title: "Top 10 Gadgets of 2024", thumbnail: require('../../assets/asmr.jfif') },
      { title: "Unboxing the Newest Laptop", thumbnail: require('../../assets/asmr.jfif') },
      { title: "Smart Home Tour", thumbnail: require('../../assets/asmr.jfif') },
      { title: "Interview with a Tech Innovator", thumbnail: require('../../assets/asmr.jfif') },
    ]
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={creator.thumbnail} style={styles.thumbnail} />
        <Text style={styles.name}>{creator.name}</Text>
        <Text style={styles.subscribers}>{profileData.subscribers} subscribers</Text>
        <Text style={styles.bio}>{profileData.bio}</Text>
        <View style={styles.socialMedia}>
          <TouchableOpacity onPress={() => openLink(profileData.socialMedia.twitter)}>
            <Text style={styles.socialLink}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(profileData.socialMedia.instagram)}>
            <Text style={styles.socialLink}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(profileData.socialMedia.youtube)}>
            <Text style={styles.socialLink}>YouTube</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Latest Videos</Text>
      <FlatList
        data={profileData.videos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.videoItem}>
            <Image source={item.thumbnail} style={styles.videoThumbnail} />
            <Text style={styles.videoTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  thumbnail: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subscribers: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialLink: {
    fontSize: 16,
    color: '#1DA1F2',
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  videoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  videoThumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  videoTitle: {
    fontSize: 18,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default CreatorInfoScreen;
