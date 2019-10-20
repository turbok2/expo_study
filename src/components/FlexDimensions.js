import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class FlexDimensions extends Component {
  render() {
    return (
      <View style={{ width:"100%"}}>
        <View style={{flex:1, backgroundColor:"red"}}></View>
        <View style={{flex:2, backgroundColor:"black"}}></View>
        <View style={{flex:3, backgroundColor:"#123812"}}></View>
      </View>
    )
  }
}