/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

// 이런식으로도 쓰네?? 이렇게 쓰면 jsx 컴포넌트 리턴 근데 함수형도 return붙이면 가능하지않나..?
const Header = (props) => (
    <TouchableOpacity
        style={styles.header}
        // onPress={() => alert('hello world')}
        // onLongPress={() => alert('you find easterEgg!')}
        // onPressIn={() => alert('onpress in')}
        onPressOut={() => alert('header component')}
    >
        <View>
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
)

// https://reactnative.dev/docs/tutorial
// const Header = () => {
//     return (
//         <View style={styles.header}>
//                 <Text>This is header</Text>
//             </View>
//     )
// } 함수형


const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})

export default Header;
