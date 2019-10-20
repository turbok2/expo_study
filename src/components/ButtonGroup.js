import React, { Component } from 'react';
import {View,  Button} from 'react-native';

export default class ButtonGroup extends Component {
  constructor(props){
    super(props)
    this.state = {name:"eric"}
  }

  onPressButton1() {
    alert("button click2")
  }

  alertStateName() {
    alert(this.state.name)
  }

  render() {
    return (
      <View>
        <Button onPress={()=> alert("button click1")} title="눌러주세요." />
        <Button onPress={this.onPressButton1} title="버튼2클릭." />
        <Button onPress={this.alertStateName.bind(this)} title="이름보기" />     
      </View>
    )
  }
}