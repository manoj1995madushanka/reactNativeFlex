import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ScrollView} from "react-native";
import { Dimensions, PixelRatio } from 'react-native';

export default class Horizontal extends React.Component{
    render() {
        return (
            <ScrollView horizontal={true}
                        pagingEnabled={true}
                        style={styles.container}>
                <View style={styles.outer}>
                    <Text style={styles.innerText}>
                        Welcome to LCOs
                    </Text>
                </View>
                <View style={styles.outer1}>
                    <Text style={styles.innerText1}>
                        Welcome to LCOs
                    </Text>
                </View>
                <View style={styles.outer}>
                    <Text style={styles.innerText2}>
                        Welcome to LCOs
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    outer: {
        backgroundColor: 'yellow',
        flex:1,
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        justifyContent:'center',
        alignItems:'center',
    },
    outer1: {
        backgroundColor: 'black',
        flex:1,
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        justifyContent:'center',
        alignItems:'center',
    },
    innerText:{
        color:'white',
        fontSize:25,
        alignContent:'center',
    },
    innerText1:{
        color:'red',
        fontSize:25,
    },
    innerText2:{
        color:'green',
        fontSize:25,
    },
});
