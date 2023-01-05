import * as React from "react";
import {Text, View, StyleSheet} from "react-native";

export default class Search extends React.Component{
  render(){
    return(
      <View style = {styles.view}>
        <Text style = {styles.text}>PESQUISAR</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    backgroundColor: "#DC143C",
    flex: 1,
    justifyContent: "center",
  },
  text:{
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 40,
    fontSize: 28
  }

})