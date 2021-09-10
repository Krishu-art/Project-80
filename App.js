import React from 'react';
import {createDrawerNavigation} from 'react-navigation-drawer';
import { CreateAppContainer, CreateSwitchNavigator, } from 'react-native' ;
import { createBottomTabNavigator } from 'react-navigation-tabs' ;
import CustomSideBarMenu from './components/CustomSideBarMenu';

import SettingScreen from './Screens/SettingsScreen' ;
import WelcomeScreen from './Screens/WelcomeScreen' ;
import{ AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
    <AppContainer/>
  ) ;
}

const SwitchNavigator = CreateSwitchNavigator( {
WelcomeScreen:{ screen: WelcomeScreen}
Drawer:{screen: AppDrawerNavigator}
BottomTab:{screen: AppTabNavigator}
}
)
const AppContainer = CreateAppContainer(SwitchNavigator);