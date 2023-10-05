import React, { useState } from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import { Card, Button, Title, Paragraph, Avatar, useTheme } from 'react-native-paper';
import IconLibary from 'react-native-vector-icons/AntDesign';
import ProductInterface from '../interfaces/ProductInterface';
import { useNavigation } from '@react-navigation/native';

const Product = (props: { product: ProductInterface }) => {
  const [likes] = useState<number>(35784);

  const [likeIcon, setLikeIcon] = useState('like2');
  const [DislikeIcon, setDislikeIcon] = useState('dislike2');

  const likeClick = () => {
    setLikeIcon(likeIcon === 'like2' ? 'like1' : 'like2');
  };

  const dislikeClick = () => {
    setDislikeIcon(DislikeIcon === 'dislike2' ? 'dislike1' : 'dislike2');
  };

  const navigation = useNavigation();

  const navigateToProduct = () => {
    navigation.navigate('Product', {
      product: props.product,
    });
  };

  return (
    <Card style={Styles.container} onPress={navigateToProduct}>
      <Card.Content style={Styles.userContainer}>
        <Avatar.Image
          size={24}
          source={props.product.user.avatar}
          style={{ backgroundColor: 'transparent' }}
        />
        <Title style={{ paddingLeft: 12 }}>{props.product.user.name}</Title>
      </Card.Content>
      <Card.Cover
        source={{
          uri: props.product.image,
        }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Card.Content style={Styles.contentContainer}>
          <Text style={{ fontWeight: 'bold' }}>
            {' '}
            <IconLibary name="like2"></IconLibary> {likes} Likes
          </Text>
          <View style={Styles.likesContainer}>
            <IconLibary name={likeIcon} onPress={() => likeClick()} size={30} />
            <IconLibary
              style={{ paddingLeft: 7 }}
              name={DislikeIcon}
              onPress={() => dislikeClick()}
              size={30}
            />
          </View>
          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>{props.product.user.name}</Text>{' '}
            {props.product.title}
          </Paragraph>
        </Card.Content>
        <View style={{ flex: 1 }}>
          <Card.Actions>
            <Button
              contentStyle={{ width: '100%' }}
              labelStyle={{ maxWidth: '100%' }}
              onPress={() => {
                Linking.openURL(props.product.url);
              }}
            >
              לחנות !
            </Button>
          </Card.Actions>
        </View>
      </View>
    </Card>
  );
};
export default Product;

const Styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    margin: 20,
  },
  userContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesContainer: {
    flexDirection: 'row',
    paddingTop: 7,
    paddingBottom: 7,
  },
  contentContainer: {
    paddingTop: '1%',
  },
});
