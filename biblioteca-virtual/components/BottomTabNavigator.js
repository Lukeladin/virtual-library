import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Search from "../screens/search";
import Transaction from "../screens/transaction";

const Tab = createBottomTabNavigator();

export default class BTN extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="pesquisa" component = {Search}/>
          <Tab.Screen name="transação" component={Transaction}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}