import React,{Component} from 'react-native';
import {
View,
 Text,
TextInput,
 KeyboardAvoidingView,
TouchableOpacity, 
StyleSheet,
 Alert}  from 'react-native' ;
import db from '../config.js';
import Header from '../components/Header'

export default ExchangeScreen extends Component{
 constructor(){
   super();
   this.state ={
     userId : firebase.auth()currentUser.email,
     ItemName : ""
     ItemDescription : ""
   }
}
addItem=(ItemName, description)=>{
  var userName = this.state.userName
  db.collection("exchange_requests").add({
"username" : userName,
"item_name" : itemName,
"description" : description
  })
  this.setState({
    itemName : '',
    description : ''
  })
|
return Alert.alert(
  'Item ready to exchange'
  '',
  [
    {text: 'OK', onPress: () => {

this.props.navigation.navigate('HomeScreen')
    }}
  ]
);
}

render(){
  return(
    <View style={{flex:1}}
    <MyHeader title="ItemName"/>
    <KeyboardAvoidingView style={styles.keyboardStyle}
  <TextInput
  style ={styles.formTextInput}
  placeholder= {"EnterItemName"}
  onChangeText={(text)={
    this.setstate({
ItemName:text
    })
  }}
 value=  {this.state.ItemName} />

 <TextInput
  style ={[styles.formTextInput,{height:250}]}
  multiline
  numberOfLines ={10}
  placeholder= {"DetalisOfTheBarterItem"}
  onChangeText={(text)={
    this.setstate({
description:text
    })
  }}
 value=  {this.state.ItemDescription}
  /> 

< TouchableOpacity
style={[styles.button,{marginTop:10}]}
onPress = {()=>{this.state.ItemName, this.state.ItemDescription}
>
<Text style={{color:'#fff', fontSize:30, fontWeight:'bold'}}>AddItem</Text>
</ TouchableOpacity>
</KeyboardAvoidingView>
</View>
}
) 
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperContainer: {
    flex: 1,
    alignItems: "center"
  },
  input: {
    width: "90%",
    height: 65,
    borderColor: "#6fc0b8",
    borderWidth: 0,

    alignItems: "flex-start",
    marginTop: 30
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6fc0b8"
  },
  buttonTitle: {
    color: "#fff"
  }
});
