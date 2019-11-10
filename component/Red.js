import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Red extends React.Component{
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red',
        height:100,
        width:100,
    },
});
