import * as React from 'react';
import { Button, View, Text,TextInput,StyleSheet,PermissionsAndroid } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MapboxGL from "@react-native-mapbox-gl/maps";
import MapView,{Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import Bus4 from '../database/bus/bus4.json'



// MapboxGL.setAccessToken("pk.eyJ1IjoidnNldnQxMTEiLCJhIjoiY2szZm1mMnlkMDZkYTNjbzI0MWRjNmRyayJ9.e74axs2q_OlWBATdIq7Hrg");


async function requestLocationPermission() {
  
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'KUTravel App location Permission',
        message:
          'KUTravel App needs access to your location ' +
          'so you can travel at university.',
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

// const feature = {
//   type: 'feature',
//   id: marker.id,
//   geometry:{
//     type: 'Point',
//     coordinates: [marker.lat,marker.lng],
//   },
// };
export default class HomeScreen extends React.Component {
  componentDidMount(){
    // MapboxGL.setTelemetryEnabled(false);
    requestLocationPermission();
  }

  render() {
    return (
     
      <View style={{ flex: 1,justifyContent:'center',}}>
        <MapView style={{flex : 1}}
        initialRegion={{
          latitude: 13.847639,
          longitude: 100.569584,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0021
        }}
        showsUserLocation={true}>
          <Polyline
          coordinates={Bus4.path}
          strokeColor="#000"
          strokeColors={COLORS}
          strokeWidth={4}
        />
        
        </MapView>
        
        
       
      </View>
  
    );
  }
}

const COLORS = [
  '#7F0000',
  '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
  '#B24112',
  '#E5845C',
  '#238C23',
  '#7F0000',
];

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
