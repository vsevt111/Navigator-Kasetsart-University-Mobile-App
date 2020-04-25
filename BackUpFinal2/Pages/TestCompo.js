import * as React from 'react';
import { Button, View, Text,TextInput,StyleSheet,
  PermissionsAndroid, TouchableHighlightBase,Image,SafeAreaView,FlatList,ScrollView,
TouchableOpacity,Modal,TouchableHighlight} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {Picker} from '@react-native-community/picker'
import MapView,{Polyline, PROVIDER_GOOGLE,Marker,Callout} from 'react-native-maps';
import Direction from 'react-native-maps-directions';
import geolib,{getPreciseDistance,getDistance,convertDistance,getCenter,isPointInPolygon,
isPointWithinRadius} from 'geolib';
import SearchInput ,{createFilter} from 'react-native-search-filter';
import busStopAll from '../database/busPark/busParkAll.json';

export default class Compo extends React.Component{
    constructor(props){
        super(props)
        this.TextForCompo = this.TextForCompo.bind(this)
    }
   
    TextForCompo(text){
        console.log('from composition or another class',text)
        return (
            <Text>Text From Method+</Text>
        )
    }
    render(){
        return(
            <View>
            <Direction
            origin = {this.props.origin}
            destination = {this.props.destination}
            apikey={'AIzaSyC7dMUMWICLlsoKMsf1c3ljrhiDdNgTl8U'}
            strokeWidth={4}
            strokeColor={'#555555'}
            mode={'WALKING'}
            // optimizeWaypoints={true}
            // splitWaypoints={true}
            // resetOnChange={true}
            onStart={(params) => {
            //   this.setState({requestDir1:false})
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`)
            }}
            onReady ={result =>{
            
              console.log('direction 1')
            //   this.updateTime(result.duration,result.distance)
            //   this.setState({requestDir1:true})
            }}
            onError={error=>{
              console.log(error)
            }}
            >
            </Direction>
            <Marker coordinate={this.props.origin}></Marker>
           
            {/* <Button title="from composition"></Button> */}
            <Text>{this.props.texts}</Text>
           
            </View> 
        )
    }
}