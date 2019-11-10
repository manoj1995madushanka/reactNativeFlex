import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Blue extends React.Component{
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'blue',
        height:100,
        width:100,
    },
});
