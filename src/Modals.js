/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import { View, Text, Button, Modal } from 'react-native';

const Modals = () => {
    const [modal, setModal] = useState(false)

    return (
        <View>
            <Button
                title='open modal'
                onPress={() => setModal(!modal)}
            />

            <Modal
                visible={modal}
                animationType={'slide'}
                onShow={()=>alert('warning')}
            >
                <View style={{
                    marginTop: 60,
                    marginBottom: 20,
                    backgroundColor: 'green'
                }}>
                    <Text>This is modal</Text>
                </View>

                <Button
                    title="Go Back"
                    onPress={() => setModal(!modal)}
                />
            </Modal>
        </View>
    );
};

export default Modals;