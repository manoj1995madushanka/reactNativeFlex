import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Green extends React.Component{
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'green',
        height:100,
        width:100,
    },
});
