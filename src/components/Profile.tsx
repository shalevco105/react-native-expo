import { Image, StyleSheet, View } from 'react-native';
import { Stack, Avatar, Text, Button } from '@react-native-material/core';

export default function Profile() {
    return (
        <Stack>
            <Stack style={styles.imageStack} center spacing={1}>
                <Avatar size={120} image={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }} />
                <Text style={styles.name}>SHALEV THE GEVER</Text>
            </Stack>
            <Stack style={styles.follow}>
                <Button variant="outlined" title="Follow" color="#d4ac2d" />
            </Stack>
            <View style={styles.posts}>
                {posts.map((post) => (
                    <View key={post.description} style={styles.post}>
                        {post.image}
                    </View>
                ))}
            </View>
        </Stack>
    );
}

const posts = [
    {
        image: (
            <Image
                source={{
                    uri: 'https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png',
                }}
            />
        ),
        description: 'shalev gever',
    },
    {
        image: (
            <Image
                source={{
                    uri: 'https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png',
                }}
            />
        ),
        description: 'shalev gever',
    },
];

const styles = StyleSheet.create({
    posts: {
        marginHorizontal: 'auto',
        width: 400,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    post: {
        flex: 1,
        minWidth: 100,
        maxWidth: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(249, 180, 45, 0.25)',
        borderWidth: 1.5,
        borderColor: '#fff',
    },
    name: {
        color: 'red',
        fontSize: 20,
    },
    imageStack: {
        marginHorizontal: 'auto',
        paddingTop: 20,
    },
    follow: {
        paddingTop: 20,
        paddingLeft: 200,
        paddingRight: 200,
    },
});
