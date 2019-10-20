import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import HelloWorld from "./src/components/HelloWorld"
// import Bananas from "./src/components/Bananas"
// import Greeting from "./src/components/Greeting"
// import BlinkApp from "./src/components/BlinkApp"
// import StyleApp from "./src/components/StyleApp"
// import FlexDimensions from "./src/components/FlexDimensions"
// import BaseTextInput from "./src/components/BaseTextInput"
import ButtonGroup from "./src/components/ButtonGroup"


export default function App() {
  return (
    <View style={styles.container}>
      <ButtonGroup/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
