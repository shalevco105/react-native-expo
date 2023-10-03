import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph, Avatar, useTheme } from 'react-native-paper';
import IconLibary from 'react-native-vector-icons/AntDesign';
import ProductInterface from "../interfaces/ProductInterface";

const Product = (props: { product: ProductInterface }) => {
    return (
        <Card style={Styles.container}>
            <Card.Content style={Styles.userContainer}>
                <Avatar.Image size={24} source={{ uri: props.product.user.avatar }} style={{ backgroundColor: 'transparent', paddingTop: '0.5%' }} />
                <Title style={{ paddingLeft: '2%' }}>{props.product.user.name}</Title>
            </Card.Content>
            <Card.Cover source={{
                uri: props.product.image
            }} />
            <Card.Content>
                <Paragraph>{props.product.text}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>קח אותי לחנות עכשיו!!</Button>
                <Button>
                    <IconLibary name='like2' />
                </Button>
            </Card.Actions>
        </Card>

    )
}
export default Product;

const Styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        margin: 20
    },
    userContainer: {
        flexDirection: 'row',
        paddingBottom: '1%'
    },
})
