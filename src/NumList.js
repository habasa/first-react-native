/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// 이런식으로도 쓰네?? 이렇게 쓰면 jsx 컴포넌트 리턴 근데 함수형도 return붙이면 가능하지않나..?
const NumList = (props) => {
    return (
        props.num.map((el, i) => (
            <View style={styles.numList} key={i}>
                <Text>{el}</Text>
            </View>
        ))
    )
 }

const styles = StyleSheet.create({
    numList: {
        backgroundColor: '#cecece',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        marginTop: 5
    }
})

export default NumList;
