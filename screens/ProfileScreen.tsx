import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'; // Import StyleSheet from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Images from '../components/Images';

const ProfileScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={100}
          source={require('../assets/icon.png')}
          style={styles.avatar}
        />
        <Text style={styles.followers}>Followers: 1000</Text>
        <Button mode="contained" style={styles.editButton}>
          Follow
        </Button>
      </View>
      <Card style={styles.infoCard}>
        <Card.Content>
          <Text>Name: John Doe</Text>
          <Text>Location: New York</Text>
          <Text>Website: www.example.com</Text>
        </Card.Content>
      </Card>
      <Images />
    </View>
  );
};

const styles = StyleSheet.create({
  // Import StyleSheet from 'react-native'
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    marginRight: 10,
  },
  followers: {
    fontSize: 18,
  },
  infoCard: {
    marginBottom: 20,
  },
  editButton: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
  },
});

export default ProfileScreen;
