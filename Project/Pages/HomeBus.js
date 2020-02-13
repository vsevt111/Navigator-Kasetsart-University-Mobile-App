import * as React from 'react';
import { Button, View, Text,TextInput,StyleSheet,Picker,Dropdown } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MapboxGL from "@react-native-mapbox-gl/maps";
import MapView,{Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import BusLine1Screen from './Bus/BusLine1.js';
import BusLine2Screen from './Bus/BusLine2.js';
import BusLine3Screen from './Bus/BusLine3.js';
import BusLine4Screen from './Bus/BusLine4.js';
import BusLine5Screen from './Bus/BusLine5.js';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

const TabScreen = createMaterialTopTabNavigator(
  {
    สาย1: BusLine1Screen,
    สาย2: BusLine2Screen,
    สาย3: BusLine3Screen,
    สาย4: BusLine4Screen,
    สาย5: BusLine5Screen
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#3d3c37',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);
class HomeBusScreen extends React.Component {
  render() {
      let line =[{value:'สาย 1'},{value:'สาย 2'},{value:'สาย3'},
    {value:'สาย 4'},{value:'สาย 5'}]
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
        </MapView>
        {/* <Dropdown label="กรุณาเลือกสาย" data={line}/> */}
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
export default createAppContainer(TabScreen);