import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems:"center"}}>
        <Text>
          안녕, {this.props.name}
        </Text>
      </View>
    )
  }
}