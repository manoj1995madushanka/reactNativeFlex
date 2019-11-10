import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Green from "./component/Green";
import Blue from "./component/Blue";
import Horizontal from "./component/Horizontal";
import {ScrollView} from "react-native";

export default class App extends React.Component{
  render() {
    return (
        <Horizontal/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    flexDirection:'row'
  },
});
