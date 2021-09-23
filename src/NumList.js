/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NumList = (props) => {
    return (
        props.num.map((el, i) => (
            <TouchableOpacity 
                style={styles.numList} 
                key={i}
                onPress={() => props.delete(i)}
            >
                <Text>{el}</Text>
            </TouchableOpacity>
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
