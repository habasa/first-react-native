/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Generator from './src/Generator';
import Header from './src/Header'
import NumList from './src/NumList';
// 버튼 이미지 쓰려면 이렇게 해야함
// 함수형이 난 더 편한뎅 힝...
class App extends Component {

  state = {
    appName: 'My First App',
    random: [36, 999]
  }

  onAddRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum]
      }
    })
  }

  onDeleteNumber = (position) => {
    const newArray = this.state.random.filter((num, i) => {
      return position !== i
    })
    this.setState({
      random: newArray
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName} />

        <View>
          <Text
            style={styles.mainText}
            onPress={() => alert('헬로월드!')}
          >Hello World</Text>
        </View>

        <ScrollView 
          style={{ width: '100%' }}
          // onMomentumScrollBegin={()=>alert('begin')}
          // onMomentumScrollEnd={()=>alert('end')}
          // onScroll={()=>alert('Scrolling')}
          // onContentSizeChange={(width, height) => alert(height)}
          bounces={true}
        >
          <Generator add={this.onAddRandomNumber} />
          <NumList
            num={this.state.random}
            delete={this.onDeleteNumber}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    // 뷰가 하나여서 전체를 차지 다른요소 있으면 1/4, 3/4 이런식으로 나눠질것 flex!
    paddingTop: 50,
    // 마진은 뷰와 다른 컴포넌트와의 간격을 띄우려고
    // 패딩은 뷰안에 있는 다른 컴포넌트와의 간격 띄우려고
    alignItems: 'center',
    // justifyContent: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20
  }
})

export default App;
