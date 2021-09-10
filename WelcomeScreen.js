import React from 'react' ;
import {View, Text,TextInput, Stylesheet, KeyboardAvoidingView, TouchableOpacity, Alert, ScrollView, Modal} from 'react-native' ;
import db from '../config.js' ;
import firebase from 'firebase' ;

export default class WelcomeScreen extends Component{
  constructor(){
    super();
    this.state={
      emailId: ' ',
      password: '',
      isModalVisible: 'false',
      firstName: '' ,
      lastName: '' ,
      address: '' ,
      contact: '' ,
      confirmPassword: '' ,

    }
  }
  
userSignUp = (username, password, confirmPassword) =>{
if(password !== confirmPasssword) {
  return Alert.alert("password dosen't match\nCheck your Password")

}else{
  firebase.auth().createUserWithEmailAndPassword(username,password)
  .then(response)=>{
  db.collection('users').add({
    first_name:this.state.firstName,
    last_name:this.state.lastName,
    contact:this.state.contact,
    email_id:this.state.emailId,
    adress:this.state.adress
  })
return Alert.alert(
  'User Added Successfully',
  '',
  [
    {text: OK, onPress: () => this.setState({"isVisible" : false})}
  ]
);
  })
 .catch(function(error) {
// Handle Errors Here.
var errorCode = error.code;
var errorMessage = error.Message
return Alert.alert(error.Message)
  });
}
}

userLogin = (emailId, password)=>{
  firebase.auth().signInWithEmailAndPassword(emailId,password)
  then(=>{
    this.props.navigation.navigate('Home')
  } )
  .catch((error)=>{
    var errorCode = error.code
    var errorMessage = error.message
    returnAlert.alert(errorMessage)
  }
  )
}
  render(){
    return(

      <View style={styles.container}>
      <View>
      <Text style={styles.title}>Barter System</Text>

      </View>


      <View style={{margin:10}}>
      < TextInput style={styles.modalTextInput}
      placeholder="Phone Number"
     maxLength={10}
     keyboardType='numeric'
     placeholderTextColor="purple"
     onChangeText={(text)=>{
       this.setState({
     contact: text
       })
     }}
     />
     </View>

      <View style={{margin:10}}>
      < TextInput style={styles.modalTextInput}
      placeholder="Adress"
     keyboardType='numeric'
     placeholderTextColor="purple"
     onChangeText={(text)=>{
       this.setState({
     address: text
       })
     }}
     />
     </View>

 <View style={{margin:10}}>
      < TextInput style={styles.modalTextInput}
      placeholder="Email"
     keyboardType= {'email-address'}
     placeholderTextColor="purple"
     onChangeText={(text)=>{
       this.setState({
     email-id: text
       })
     }}
     />
     </View>

      <View style={{margin:10}}>
      < TextInput style={styles.modalTextInput}
      placeholder="Password"
    securityTextEntry ={true}
     placeholderTextColor="purple"
     onChangeText={(text)=>{
       this.setState({
     password : text
       })
     }}
     />
     </View>

     <View style={{margin:10}}>
      < TextInput style={styles.modalTextInput}
      placeholder="Confirm Password"
    securityTextEntry ={true}
     placeholderTextColor="purple"
     onChangeText={(text)=>{
       this.setState({
     confirmPassword : text
       })
     }}
     />
     </View>

<TouchableOpacity style={[styles.button,{width:280}]}

  onPress={()=>
  this.toggleModal ()
  this.userSignUp(this.state.username, this.state.password, this.state.confirmPasssword)
  <Text>SignUp</Text>
  </TouchableOpacity>

   <TouchableOpacity style={{width:'100%',alignItems: 'center' ,paddingTop: 30 }}
   onPress={this.setState({ isModalVisible:false})}>
   <Text>Cancel</Text>
   </TouchableOpacity>
   </KeyboardAvoidingView>
   </ScrollView>
   </Modal>

  )
} 

   <View styles={styles.container}>
      <View style={{justifyContent: 'center',alignItems: 'center'}}>
      {
        this.showModal()
      }
</View>


     <TextInput
      style= {styles.loginBox}
      placeholder="abc@example.com"
      keybordType ='email-address'
     onChangeText={ ( text )} => {
     this.setState({
       emailId: text 
     
     })
  }}
  />
  < TextInput
  style={styles.loginBox}
  secureTextEntry = {true}
  placeholder="enter Password"
  onChangeText={(text)} => {
    this.setState({
      password : text
    })
  }}
  />
  
  < TouchableOpacity
  style={[styles.button {marginBottom:20 marginTop:20}]}
  onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
  
  < Text style={styles.buttonText}>Login</Text>
  
  <TouchableOpacity
  style={styles.button}
  onPress={ () =>{ this.userSignUp( this.state.emailId, this.state.password)}} >
  
  <Text style={styles.buttonText}>SignUp</Text>
  </TouchableOpacity>
  
  
  
  
  </View>
   </View>

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})