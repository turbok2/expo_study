import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri:"https://cdn.shopify.com/s/files/1/1078/0310/products/fruit-banana-dole-1_1024x1024.jpg"
    }
    return (
      <Image source={pic} style={{width:193, height:110}} />
    )
  }
}