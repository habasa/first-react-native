/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// https://github.com/react-native-picker/picker
// https://github.com/callstack/react-native-slider

import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


const Pickers = () => {
    const [country, setCountry] = useState('Korea') // 고정값
    const [value, setValue] = useState(50)

    return (
        <View style={styles.container}>
            <Picker
                style={{ height: 50, width: 250 }}
                selectedValue={country}
                onValueChange={(val, idx) => {
                    setCountry(val)
                }}
            >
                <Picker.Item label="Korea" value="Korea" />
                <Picker.Item label="Japan" value="Japan" />
            </Picker>

            {/* 애니메이팅 */}
            <ActivityIndicator
                style={{ paddingTop: 200 }}
                size="large"
                color="green"
                animating={false}
            />

            <Slider
                style={{ width: 300, height: 40 }}
                value={value}
                minimumValue={0}
                maximumValue={100}
                onValueChange={(value) => {
                    setValue(Math.floor(value))
                }}
                minimumTrackTintColor="red"
                maximumTrackTintColor="blue"
                step={10} // interval, 이거 사용하면 math.floor 안써도됨.
            />

            <Text >
                {value}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        marginBottom: 200,
        alignItems: 'center'
    }
})

export default Pickers;