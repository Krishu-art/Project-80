import React,{Component} from 'react-native';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native' ;
import ( ListItem, Icon ) from "react-native-elements";
import firebase from "firebase";
import db from '../config.js';
import Header from '../components/Header'

export default class HomeScreen extends Component{
 constuctor(){
   super()
   this.state ={
     ExchangeRequests : []

   }
   this.requestRef = null
 }
}
 componentDidMount() {
    this.getExchangeRequests();
  }
getAllRequests =()=>{
  this.requestRef = db.collection("ExchangeRequests")
  .onSnapshot((snapshot)=>{
    var all requests = snapshot.docs.map(document => document.data());
    this.setstate({
      all requests : all requests
    })
  } )
}

keyExtractor= (item,index) => index.tostring()

renderItem = ( {item,i} )=>{
  console.log(item.item_name);
  return(
    <List item
    title = (item.name)
    subtitle = (item.description)
    titleStyle = {{ color:'#fff', fontWeight:'bold'}}
    rightElement ={
      <TouchableOpacity style={styles.button}>
     < Text style={{color:'#fff'}}>Exchange</Text>
      </TouchableOpacity>
    }
bottom divider
/>
  )
}
render(){
return(
<View style={{flex:1}}>
<MyHeader title="ExchangeItems"/>
<View style={{flex:1}}
{
  this.state.allRequests.lenght === 0
  ?(
    <View style={{flex:1, fontSize: 30, justifyContent:'center', alignItems:'center'}}>
    <Text style={{ fontSize:20 }}>List of all Item Requests</Text>
    </View>
  )
  :(
<FlatList
keyExtractor={this.keyExtractor}
data={this.state.AllRequests}
renderItem={this.renderItem}
/>
  )
}
</View>
</View>
)
}
}
const styles = Stylesheet.create({
  button:{
    width:100,
    height : 3-
    justifyContent:'center' ,
    backgroundColor"#ff5722",
    shadowColor: "#000" ,
    shadowOffSer: {
      width: 0,
      hight : 8
    }
  }
})
