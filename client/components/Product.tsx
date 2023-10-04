import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import IconLibary from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Product = (props: any) => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    // navigation.navigate('product',); // Replace 'NewPage' with the name of your target screen
  };

  return (
    <Card style={Styles.container} onPress={handleButtonPress}>
      <Card.Content>
        <Title>{props.product.title}</Title>
      </Card.Content>
      <Card.Cover
        source={{
          uri: props.product.image,
        }}
      />
      <Card.Content>
        <Paragraph>{props.product.text}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>קח אותי לחנות עכשיו!!</Button>
        <Button>
          <IconLibary name="like2" />
        </Button>
      </Card.Actions>
    </Card>
  );
};
export default Product;

const Styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    margin: 37,
  },
});
