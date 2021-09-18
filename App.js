/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
// 버튼 이미지 쓰려면 이렇게 해야함
// 함수형이 난 더 편한뎅 힝...
class App extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>hello world!</Text>
        </View>
        <View>
          <Text>hello world!</Text>
        </View>
        <View>
          <Text>hello world!</Text>
        </View>
      </View>
    );
  }
}

export default App;
