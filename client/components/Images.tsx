import React from 'react';
import { Image, View, StyleSheet, Dimensions, FlatList } from 'react-native';

import { Avatar, Button, Card, Text } from 'react-native-paper';

const images = [
    require('../assets/icon.png'),
    require('../assets/favicon.png'),
    require('../assets/icon.png'),
    require('../assets/flo.jpg'),
    require('../assets/favicon.png'),
    require('../assets/splash.png'),
    require('../assets/icon.png'),
    require('../assets/flo.jpg'),
    require('../assets/flo.jpg'),
    require('../assets/splash.png'),
    require('../assets/splash.png'),
    require('../assets/icon.png'),
    require('../assets/flo.jpg'),
    require('../assets/favicon.png'),
    require('../assets/splash.png'),
    require('../assets/flo.jpg'),
    require('../assets/icon.png'),
    require('../assets/favicon.png'),
    require('../assets/splash.png'),
];

const calculateNumColumns = () => {
    const screenWidth = Dimensions.get('window').width;
    const minItemWidth = 150; // Minimum item width
    return Math.max(Math.floor(screenWidth / minItemWidth), 1);
};

const Images: React.FC = () => {
    const numColumns = calculateNumColumns();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        image: {
            width: Dimensions.get('window').width / numColumns,
            height: Dimensions.get('window').width / numColumns,
            margin: 2,
        },
    });

    const renderItem = ({ item }: { item: any }) => (
        <Image source={item} style={styles.image} resizeMode="cover" />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                numColumns={numColumns}
            />
        </View>
    );
};

export default Images;
