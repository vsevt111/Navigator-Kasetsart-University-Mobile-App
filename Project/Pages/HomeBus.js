import * as React from 'react';
import { TouchableOpacity, View, Text,TextInput,StyleSheet,Picker,Dropdown,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MapboxGL from "@react-native-mapbox-gl/maps";
import MapView,{Polyline, PROVIDER_GOOGLE,Marker} from 'react-native-maps';
// import BusLine1Screen from './Bus/BusLine1.js';
// import BusLine2Screen from './Bus/BusLine2.js';
// import BusLine3Screen from './Bus/BusLine3.js';
// import BusLine4Screen from './Bus/BusLine4.js';
// import BusLine5Screen from './Bus/BusLine5.js';
import Bus1 from '../database/bus/bus1.json';
import Bus2 from '../database/bus/bus2.json';
import Bus3 from '../database/bus/bus3.json';
import Bus4 from '../database/bus/bus4.json';
import Bus5 from '../database/bus/bus5.json';
import BusStop1 from '../database/busPark/busPark1.json';
import BusStop2 from '../database/busPark/busPark2.json';
import BusStop3 from '../database/busPark/busPark3.json';
import BusStop4 from '../database/busPark/busPark4.json';
import BusStop5 from '../database/busPark/busPark5.json';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {MenuProvider,Menu,MenuOption,MenuOptions,MenuTrigger} from 'react-native-popup-menu';
import symbol1 from '../image/busstopLine1.png';
import symbol2 from '../image/busstopLine2.png';
import symbol3 from '../image/busstopLine3.png';
import symbol4 from '../image/busstopLine4.png';
import symbol5 from '../image/busstopLine5.png';


// const TabScreen = createMaterialTopTabNavigator(
//   {
//     สาย1: BusLine1Screen,
//     สาย2: BusLine2Screen,
//     สาย3: BusLine3Screen,
//     สาย4: BusLine4Screen,
//     สาย5: BusLine5Screen
//   },
//   {
//     tabBarPosition: 'top',
//     swipeEnabled: true,
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: '#FFFFFF',
//       inactiveTintColor: '#F8F8F8',
//       style: {
//         backgroundColor: '#3d3c37',
//       },
//       labelStyle: {
//         textAlign: 'center',
//       },
//       indicatorStyle: {
//         borderBottomColor: '#87B56A',
//         borderBottomWidth: 2,
//       },
//     },
//   }
// );
export default class HomeBusScreen extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      Path: Bus1,
      Color:"#000",
      Value: null,
      BusStop:BusStop1,
      symbol:symbol1
      // temp:this.state.Line1
    };
    this.handleOnPressLine1= this.handleOnPressLine1.bind(this);
    this.handleOnPressLine2= this.handleOnPressLine2.bind(this);
    this.handleOnPressLine3= this.handleOnPressLine3.bind(this);
    this.handleOnPressLine4= this.handleOnPressLine4.bind(this);
    this.handleOnPressLine5= this.handleOnPressLine5.bind(this);
   
  }
  handleOnPressLine1(){
    this.setState({Path:Bus1});
    this.setState({Color:"#000"});
    this.setState({Value:"สาย1"});
    this.setState({BusStop:BusStop1});
    this.setState({symbol:symbol1});
  }
  handleOnPressLine2(){
    
    this.setState({Path:Bus2});
    this.setState({Color:"#0eecf0"});
    this.setState({Value:"สาย2"});
    this.setState({BusStop:BusStop2});
    this.setState({symbol:symbol2});

  }

  handleOnPressLine3(){
    this.setState({Path:Bus3});
    this.setState({Color:"#d91fed"});
    this.setState({Value:"สาย3"});
    this.setState({BusStop:BusStop3});
    this.setState({symbol:symbol3});

  }
  handleOnPressLine4(){
    this.setState({Path:Bus4});
    this.setState({Color:"#f50a16"});
    this.setState({Value:"สาย4"});
    this.setState({BusStop:BusStop4});
    this.setState({symbol:symbol4});

  }
  handleOnPressLine5(){
    this.setState({Path:Bus5});
    this.setState({Color:"#f58f0a"});
    this.setState({Value:"สาย5"});
    this.setState({BusStop:BusStop5});
    this.setState({symbol:symbol5});

  }
  
  render() {
      let line =[{value:'สาย 1'},{value:'สาย 2'},{value:'สาย3'},
    {value:'สาย 4'},{value:'สาย 5'}]
    
    return (
      <View style={{ flex: 1}}>
        <View style={{zIndex:1,position:'absolute',height:200,width:60,alignSelf:'center'}}>
        <MenuProvider >
        <Menu>
        <MenuTrigger text={this.state.Value === null ? 'เลือกสาย':this.state.Value} style={{zIndex:2}}/>
        <MenuOptions >
          <MenuOption onSelect={this.handleOnPressLine1} text='สาย1'/>
          <MenuOption onSelect={this.handleOnPressLine2} text='สาย2'/>
          <MenuOption onSelect={this.handleOnPressLine3} text='สาย3'/>
          <MenuOption onSelect={this.handleOnPressLine4} text='สาย4'/>
          <MenuOption onSelect={this.handleOnPressLine5} text='สาย5'/>
        </MenuOptions>
        </Menu>
        </MenuProvider>
        </View>
        <MapView style={{flex : 1,zIndex:-1}}
        initialRegion={{
          latitude: 13.847639,
          longitude: 100.569584,
          latitudeDelta: 0.0202,
          longitudeDelta: 0.0101
        }}
        showsUserLocation={true}>
          <Polyline           
            coordinates={this.state.Path.path}
            strokeColor={this.state.Color}
            strokeColors={COLORS}
            strokeWidth={4}/>
            {this.state.BusStop.markers.map(marker => (
              <Marker coordinate={marker.coordinate} Color={'#fae20a'}>
                <Image source={this.state.symbol} style={{width:20,height:20}}/>
              </Marker>
            ))} 
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
  '#0eecf0',
  '#d91fed',
  '#f58f0a',
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
// export default createAppContainer(TabScreen);