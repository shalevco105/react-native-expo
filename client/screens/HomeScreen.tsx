import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';

const HomeScreen: React.FC = () => {
    return (
        // <View style={styles.container}>
        <ProductList />
        // </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
