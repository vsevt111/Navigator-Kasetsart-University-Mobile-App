import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList} from 'react-native';
export default class App extends Component<Props> {

  state ={
    data:[]
  }

  // fetchData= async()=>{
  //   const response = await fetch('https://192.168.202.1:3000/building');
  //   const users = await response.json();
  //   this.setState({data:users});
  // }
  
componentDidMount(){
  fetch('http://192.168.202.1:3000/building')
  .then(response => response.json())
  .then(users => console.warn(users))
}
  render() {
    return (
      <View >
       <Text>Welcome</Text>

       <FlatList
       data={this.state.data}
      //  keyExtractor={(item,index) => index.toString()}
       renderItem={({ item }) =>

       <View style={{backgroundColor:'#abc123',padding:10,margin:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>{ item.location }</Text>
          
         </View>

       }

       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
