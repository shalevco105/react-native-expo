import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>Home Screen</Text>
            <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
    );
};

export default HomeScreen;
