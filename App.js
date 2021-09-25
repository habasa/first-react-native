/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Button, Text } from 'react-native';
import Generator from './src/Generator';
import Header from './src/Header'
import Input from './src/Input';
import NumList from './src/NumList';
import Picker from './src/Pickers'
// 버튼 이미지 쓰려면 이렇게 해야함
// 함수형이 난 더 편한뎅 힝...
class App extends Component {

  state = {
    // appName: 'My First App',
    // random: [36, 999],
    myTextInput: 'ff',
    alphabet: ['a', 'b', 'c', 'd']
  }

  // onAddRandomNumber = () => {
  //   const randomNum = Math.floor(Math.random() * 100) + 1
  //   this.setState(prevState => {
  //     return {
  //       random: [...prevState.random, randomNum]
  //     }
  //   })
  // }

  // onDeleteNumber = (position) => {
  //   const newArray = this.state.random.filter((num, i) => {
  //     return position !== i
  //   })
  //   this.setState({
  //     random: newArray
  //   })
  // }


  onChangeInput = (event) => {
    this.setState({
      myTextInput: event.nativeEvent.text
    })
  }

  onAddTextInput = () => {
    this.setState(state=>{
      return {
        myTextInput: '',
        alphabet: [...state.alphabet, state.myTextInput],
      }
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Picker/>

        {/* <TextInput
                value={this.state.myTextInput}
                style={styles.input}
                onChange={this.onChangeInput}
                multiline={true} // 개행 해줌
                maxLength={100}
                autoCapitalize={'none'} // 대문자 자동 막음
                editable={true}
            />
        <Button
          title="Add Text Input"
          onPress={this.onAddTextInput}
        />
        
        <ScrollView style={{width: '100%'}}>
          {
            this.state.alphabet.map((el, idx) => (
              <Text
                style={styles.mainText}
                key={idx}
              >
                {el}
              </Text>
            ))
          }
        </ScrollView> */}
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
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  },
  input: {
    fontSize: 25,
    padding: 10,
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20
}
})

export default App;

{/* <Header name={this.state.appName} />

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
        </ScrollView> */}
