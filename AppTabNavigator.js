import React from 'react' ;
import { createBottomTabNavigator } from 'react-navigation-tabs' ;
import HomeScreen from '../Screens/HomeScreen' ;
import ExchangeScreen from '../Screens/ExchangeScreen' ;

expo const AppTabNavigator = createBottomTabNavigator({
ExchangeItems : {
  screen: HomeScreen,
  navigationOptions :{
    tabBarLabel : ExchangeItems
 }
},

ExchangeRequests:{
  screen: ExchangeScreen
  navigationOptions :{
    tabBarLabel : ExchangeRequests
  }
}
});
