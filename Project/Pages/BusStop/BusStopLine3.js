import * as React from 'react';
import { Button, View, Text,TextInput,StyleSheet,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MapboxGL from "@react-native-mapbox-gl/maps";
import MapView,{Marker} from 'react-native-maps';
import BusStop3 from '../../database/busPark/busPark3.json';
import symbol from '../../image/busstopLine3.png'

export default class BusStopLine3Screen extends React.Component {
  constructor(props){
    super(props)
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
            {BusStop3.markers.map(marker => (
              <Marker coordinate={marker.coordinate}  Color={'#fae20a'}>
                <Image source={symbol} style={{width:20,height:20}}/>
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