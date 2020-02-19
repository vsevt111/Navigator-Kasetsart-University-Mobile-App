import * as React from 'react';
import { Button, View, Text,TextInput,StyleSheet,PermissionsAndroid, TouchableHighlightBase } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MapboxGL from "@react-native-mapbox-gl/maps";
import MapView,{Polyline, PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import Bus3 from '../database/bus/bus3.json'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Sci from '../database/building/buildingSci.json';
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
  componentDidUpdate(prevProp,prevState){
    if(prevState.coordinateOrigin !== this.state.coordinateOrigin){
     
      this.DisplayAll
    }
    else if(prevState.coordinateDestination !== this.state.coordinateDestination){
      this.DisplayAll
    }
  }
  constructor(props){
    super(props);
    this.state={
      TextOrigin:"",
      TextDestination:"",
      coordinateOrigin : {"latitude":13.847639,"longitude":100.569584},
      coordinateDestination : {"latitude":13.847639,"longitude":100.569584},
      Origin:"",
      Destination:"",
      coordinate:[],
      setOrigin:true
    };
    
    this.DisplayOrigin=this.DisplayOrigin.bind(this);
    this.DisplayDestination=this.DisplayDestination.bind(this);
    this.Search = this.Search.bind(this);
    this.DisplayAll = this.DisplayAll.bind(this);
  }
  DisplayOrigin(){
    this.setState({Origin:this.state.TextOrigin})
    this.Search(this.state.Origin)
  }
  DisplayDestination(){
    this.setState({Destination:this.state.TextDestination})
    this.Search(this.state.Destination)
  }

  DisplayAll(){
    const array = []
    console.log('tab this button')
    this.setState({Origin:this.state.TextOrigin})
    this.Search(this.state.Origin,array)
    this.setState({Destination:this.state.TextDestination})
    this.Search(this.state.Destination,array)
  }
  Search(text,array){
    const texts = text.toUpperCase()
    Sci.building.filter(item => {
      if(item.name === texts){
      this.setState({coordinateOrigin:item.coordinate})
      array.push(item.coordinate)
      this.setState({coordinate:array})
      console.log(array)
        return item
      }
      else{
        return null
      }
    })
    
  }

  
  
  render() {
    
    return (
      <View style={{ flex: 1}}>
        <View style={{position:'absolute',backgroundColor:'#05c3fc',zIndex:1}}>
        <TextInput
        onChangeText={TextOrigin => this.setState({TextOrigin})}
        value={this.state.TextOrigin}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Type Origin"
      
      />
      <TextInput
        onChangeText={TextDestination => this.setState({TextDestination})}
        value={this.state.TextDestination}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Type Destination"
      
      />
      <Button onPress={this.DisplayAll
      } title="ค้นหา"/>

        </View>
        <MapView style={{flex : 1,zIndex:-1}}
        initialRegion={{
          latitude: 13.847639,
          longitude: 100.569584,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0021
        }}
        showsUserLocation={true}>
       
          {this.state.coordinate.map(coor=>(
            <Marker coordinate={coor}/>
          ))}
          {console.log(this.state.coordinate)}
          
     
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
