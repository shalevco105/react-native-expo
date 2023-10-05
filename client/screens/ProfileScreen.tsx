import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Images, { images } from '../components/Images';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image size={80} source={require('../assets/icon.jpg')} />
        <View style={styles.followersBox}>
          <Text style={styles.followers} variant="titleMedium">
            Posts
          </Text>
          <Text style={styles.followers} variant="bodySmall">
            {images.length}
          </Text>
        </View>
        <View style={styles.followersBox}>
          <Text style={styles.followers} variant="titleMedium">
            Followers
          </Text>
          <Text style={styles.followers} variant="bodySmall">
            1270
          </Text>
        </View>

        <Button compact mode="elevated" buttonColor='#ffff'>
          Follow
        </Button>
      </View>
      <View style={styles.info}>
        <Text style={{ fontWeight: '700' }} variant="bodyLarge">
          john Doe
        </Text>
        <Text variant="bodyMedium">22 years old, lives in New York, USA</Text>
      </View>
      <Images />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  followers: {
    fontSize: 16,
  },
  followersBox: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    gap: 5,
    padding: 5,
    borderRadius: 12,
  },
  info: {
    marginBottom: 20,
  },
});

export default ProfileScreen;
