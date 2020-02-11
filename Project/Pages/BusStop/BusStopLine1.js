import * as React from 'react';
import { Button, View, Text,TextInput,StyleSheet,PermissionsAndroid } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MapboxGL from "@react-native-mapbox-gl/maps";
import MapView,{Marker} from 'react-native-maps';
import BusStop1 from '../../database/busPark/busPark1.json';
import Bus1 from '../../database/bus/bus1.json';

export default class BusStopLine1Screen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      markers: [{
        title:'name',
        coordinate:{
          latitude:13.851845,
          longitude:100.565390
        }
      },
        {
          title: 'name2',
          coordinate :{
            latitude:13.851384,
            longitude:100.565614
          }
        }
      ]
    }
  }
  render() {
    return (
      <View style={{ flex: 1,justifyContent:'center',}}>
        <MapView  style={{flex : 1}}
        initialRegion={{
          latitude: 13.847639,
          longitude: 100.569584,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0021
        }}
        showsUserLocation={true}>
            {this.state.markers.map(marker => (
              <Marker coordinate={marker.coordinate}>
                
              </Marker>
            ))}
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