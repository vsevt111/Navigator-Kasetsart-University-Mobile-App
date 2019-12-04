import * as React from 'react';
import { Button, View, Text,TextInput,StyleSheet,PermissionsAndroid } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MapboxGL from "@react-native-mapbox-gl/maps";



MapboxGL.setAccessToken("pk.eyJ1IjoidnNldnQxMTEiLCJhIjoiY2szZm1mMnlkMDZkYTNjbzI0MWRjNmRyayJ9.e74axs2q_OlWBATdIq7Hrg");


async function requestLocationPermission() {
  
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
export default class HomeScreen extends React.Component {


  componentDidMount(){
    MapboxGL.setTelemetryEnabled(false);
    requestLocationPermission();
  }

  render() {
    return (
     
      <View style={{ flex: 1,justifyContent:'center',}}>
        <Text style={{ alignItems: 'flex-start', justifyContent:'flex-start'}}>Kasetsart university</Text>
    
        <Text style={{alignSelf:'center'}}>MAP</Text>
        <MapboxGL.MapView style={{flex: 1}}
      
        />  
       
        <MapboxGL.UserLocation/>
      </View>
  
    );
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato"
  },
  map: {
    flex: 3
  }
});
