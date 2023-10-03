import React from 'react';
import { Image, View, StyleSheet, Dimensions, FlatList } from 'react-native';

import { Avatar, Button, Card, Text } from 'react-native-paper';

const images = [
  require('../assets/image1.jpg'),
  require('../assets/image2.jpg'),
  require('../assets/image1.jpg'),
  require('../assets/image3.jpg'),
  require('../assets/image2.jpg'),
  require('../assets/image4.jpg'),
  require('../assets/image1.jpg'),
  require('../assets/image3.jpg'),
  require('../assets/image3.jpg'),
  require('../assets/image4.jpg'),
  require('../assets/image4.jpg'),
  require('../assets/image1.jpg'),
  require('../assets/image3.jpg'),
  require('../assets/image2.jpg'),
  require('../assets/image4.jpg'),
  require('../assets/image3.jpg'),
  require('../assets/image1.jpg'),
  require('../assets/image2.jpg'),
  require('../assets/image4.jpg'),
];

const Images: React.FC = () => {
  const itemWidth = Dimensions.get('window').width / 3 - 15;
  const numColumns = 3;
  console.log(numColumns);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    image: {
      width: itemWidth,
      height: itemWidth,
      margin: 2,
    },
  });

  const renderItem = ({ item }: { item: any }) => (
    <Image source={item} style={styles.image} resizeMode="cover" />
  );

  return (
    <View style={styles.container}>
      <FlatList
        key={numColumns}
        data={images}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={numColumns}
      />
    </View>
  );
};

export default Images;
