import * as React from "react";
import {Text, View, StyleSheet} from "react-native";

export default class Transaction extends React.Component{
  render(){
    return(
      <View style = {styles.view}>
        <Text style = {styles.text}>transação</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    backgroundColor: "#34ECD4",
    flex: 1,
    justifyContent: "center",
  },
  text:{
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTot: 50,
    fontSize: 28
  }

})