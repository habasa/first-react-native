/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// 버튼 이미지 쓰려면 이렇게 해야함
// 함수형이 난 더 편한뎅 힝...
class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text>hello world!</Text>
        </View>
        <View style={styles.subView}>
          <Text>hello world!</Text>
        </View>
        <View style={styles.subView}>
          <Text>hello world!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'green',
    flex:1,
    // 뷰가 하나여서 전체를 차지 다른요소 있으면 1/4, 3/4 이런식으로 나눠질것 flex!
    paddingTop: 50,
    // 마진은 뷰와 다른 컴포넌트와의 간격을 띄우려고
    // 패딩은 뷰안에 있는 다른 컴포넌트와의 간격 띄우려고
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
