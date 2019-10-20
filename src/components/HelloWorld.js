import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View>
        <Text style={{color:'blue', fontSize:30}}>
          Hello World
        </Text>
      </View>
    )
  }
}