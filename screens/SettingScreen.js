import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class SettingScreen extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Text style={styles.text}>Setting Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20
    }
})