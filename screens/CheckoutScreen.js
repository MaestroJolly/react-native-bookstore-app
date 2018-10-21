import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class CheckoutScreen extends React.Component {
  static navigationOptions = {
    title: 'Checkout',
  };

  constructor(props){
    super(props);
    this.state = {
      product: this.props.navigation.state.params.product,
      price: this.props.navigation.state.params.price,
      firstnameErr: 'none',
      lastnameErr: 'none',
      emailErr: 'none',
      firstname: '',
      lastname: '',
      email: ''
    };
  }


  buyNow(){
    this.setState({
      firstnameErr: 'none',
      lastnameErr: 'none',
      emailErr: 'none',
    })
    if (this.state.firstname === '' || this.state.lastname === '' || this.state.email === '') {

      if (this.state.firstname === ''){
        this.setState({
          firstnameErr: 'flex'
        })
      }else if(this.state.lastname === ''){
        this.setState({
          lastnameErr: 'flex'
        })
      }else if(this.state.email === ''){
        this.setState({
          emailErr: 'flex'
        })
      }
    }else {
      
      itemPrice = this.state.price;
      itemProduct = this.state.product;
      customerFirstName = this.state.firstname;
      customerLastName = this.state.lastname;
      customerEmail = this.state.email;

      const { navigate } = this.props.navigation
      navigate('PaymentScreen', {price: itemPrice, product: itemPrice, firstname: customerFirstName, lastname: customerLastName, email: customerEmail})
    }
  }
  
  render() {

    return (
        <View style={styles.container}>
            <View style={{marginVertical: 10}}></View>
            <Text style={styles.productDetail}>You are about to the purchase item below</Text>
            <Text style={styles.checkoutInfo}>Fill out the form to proceed to payment.</Text>
            <Text style={styles.productName} ref="product">Item: {this.state.product}</Text>
            <Text style={styles.productPrice} ref="price">Price: {this.state.price}</Text>
            <View style={styles.formGroup}>
            <Text style={styles.label}>Firstname</Text>
            <View style={styles.input}>
              <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
                <TextInput
                  autoCorrect={false}
                  editable={(this.state.loading) ? false : true}
                  keyboardType="default"
                  style={{ fontSize: 20, paddingHorizontal: 10, minWidth: "100%" }}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  onChangeText={(firstname) => this.setState({firstname})}
                  value={this.state.firstname}
                />
              </View>
            </View>
            <Text style={{ color: '#EE312A', fontSize: 10, display: this.state.firstnameErr, fontWeight: 'bold', marginTop: 5 }}>Enter your First Name</Text>
            </View>
            <View style={styles.formGroup}>
            <Text style={styles.label}>Lastname</Text>
            <View style={styles.input}>
              <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
                <TextInput
                  autoCorrect={false}
                  editable={(this.state.loading) ? false : true}
                  keyboardType="default"
                  style={{ fontSize: 20, paddingHorizontal: 10, minWidth: "100%" }}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  onChangeText={(lastname) => this.setState({lastname})}
                  value={this.state.lastname}
                />
              </View>
            </View>
            <Text style={{ color: '#EE312A', fontSize: 10, display: this.state.lastnameErr, fontWeight: 'bold', marginTop: 5 }}>Enter your Last Name</Text>
            </View>
            <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.input}>
              <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
                <TextInput
                  autoCorrect={false}
                  editable={(this.state.loading) ? false : true}
                  keyboardType="email-address"
                  style={{ fontSize: 20, paddingHorizontal: 10, minWidth: "100%" }}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                />
              </View>
            </View>
            <Text style={{ color: '#EE312A', fontSize: 10, display: this.state.emailErr, fontWeight: 'bold', marginTop: 5 }}>Enter a valid email address</Text>
            </View>
            <Button
              onPress={() => this.buyNow()}
              title="Proceed To Payment"
              color="#8f5db7"
              accessibilityLabel="Purchase Button For Item"
            />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 40,
    paddingBottom: 50,
    backgroundColor: '#ebedef',
    height: '100%'
  },
  label: {
    color: "#ACACAC"
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#8f5db7',
  },
  formGroup: {
    marginBottom: 20,
  },
  product: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  productDetail: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#162221'
  },
  checkoutInfo: {
    fontSize: 17,
    color: '#162221'
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#162221'
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8f5db7'
  }
});