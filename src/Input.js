/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

const Input = () => {
    const [myTextInput, setMyTextInput] = useState('anything')


    return (
        <View style={styles.mainView}>
            <TextInput
                value={myTextInput}
                style={styles.input}
                onChange={(event) => {
                    const { text } = event
                    console.log(event.nativeEvent);
                    setMyTextInput(text)
                }}
                multiline={true} // 개행 해줌
                maxLength={100}
                autoCapitalize={'none'} // 대문자 자동 막음
                editable={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
    },
    input: {
        fontSize: 25,
        padding: 10,
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20
    }
})

export default Input;

// https://velog.io/@yhe228/react-native-onChange-vs-onChangeText-e.nativeEvent
