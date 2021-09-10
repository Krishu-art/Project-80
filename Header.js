import React, {Component} from 'react';
import { Header,Icon, } from 'react-native-elements';
import {View, Text, Stylesheet} from 'react-native';

const MyHeader => {
  return(
    <Header
    centerComponent={{text: props.title, style{ color: '' , fontSize:30, fontWeight: "italic"}}}
    />
  );
};

export Default MyHeader;