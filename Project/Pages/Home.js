import * as React from 'react';
import { Button, View, Text,TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1,justifyContent:'center'}}>
        <Text style={{flex:1, alignItems: 'flex-start', justifyContent:'flex-start'}}>Kasetsart university</Text>
        {/* <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        /> */}
        <Text style={{flex:3, alignSelf:'center'}}>MAP</Text>
      </View>
    );
  }
}