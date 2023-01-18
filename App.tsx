import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { getLinkPreview } from 'link-preview-js';
import { useState } from 'react';

const App = () => {
    const [imageUrl, setImageUrl] = useState();

    type IData = {
        images: string[];
    };
    const handlePreview = () => {
        getLinkPreview(
            'https://he.aliexpress.com/item/1005001666814709.html?spm=a2g0o.productlist.main.3.509aSV9hSV9hJ9&algo_pvid=26ca9052-d087-4220-a4fb-f9a6cee8da35&aem_p4p_detail=2023011813371736031206708950002330286&algo_exp_id=26ca9052-d087-4220-a4fb-f9a6cee8da35-1&pdp_ext_f=%7B%22sku_id%22%3A%2212000030250643505%22%7D&pdp_npi=2%40dis%21ILS%2124.77%215.15%21%21%21%21%21%40214527fd16740778374582713d06ca%2112000030250643505%21sea&curPageLogUid=s7sHEqVLDnBD&ad_pvid=2023011813371736031206708950002330286_2&ad_pvid=2023011813371736031206708950002330286_2',
        )
            .then((data: IData) => setImageUrl(data.images[0]))
            .catch((error: any) => console.log(error));
    };

    return (
        <View style={styles.container}>
            <Text>We have to be millioners already</Text>
            <Pressable style={styles.button} onPress={() => alert('Money on the floor')}>
                <Text style={{ color: 'white' }}>Press me</Text>
            </Pressable>
            <Button onPress={() => handlePreview()} title="Get Preview Image" />
            <Image source={{ uri: imageUrl }} style={{ width: 200, height: 300 }} />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        marginTop: 10,
        backgroundColor: 'red',
        color: 'white',
        padding: 10,
        borderRadius: 5,
    },
});

export default App;
