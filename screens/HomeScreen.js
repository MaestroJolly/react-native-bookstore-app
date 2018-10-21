import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import { BookOne } from '../src/images';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Book Store',
  };
  render() {

    return (
        <View style={styles.container}>
          <View style={styles.product}>
            <Image source={ BookOne }/>
            <View style={{marginVertical: 10}}></View>
            <Text style={styles.productName} ref="product">School Canteen Cookbook</Text>
            <Text style={styles.productPrice} ref="price">₦500</Text>
            <Button
              onPress={() => this.buyNow()}
              title="Buy Now"
              color="#8f5db7"
              accessibilityLabel="Purchase Button For Item"
            />
          </View>
        </View>
      );
    }
    buyNow(){
      const { navigate } = this.props.navigation

      let itemPrice, itemProduct;
      itemPrice = this.refs.price.props.children;
      itemProduct = this.refs.product.props.children;
      navigate('CheckoutScreen', {price: itemPrice, product: itemProduct})
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebedef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  product: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#162221'
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8f5db7'
  }
});