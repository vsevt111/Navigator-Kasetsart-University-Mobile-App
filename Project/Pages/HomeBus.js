import * as React from 'react';
import { TouchableOpacity, View, Text,TextInput,StyleSheet,Picker,Dropdown,Image} from 'react-native';

import MapView,{Polyline, PROVIDER_GOOGLE,Marker} from 'react-native-maps';
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


export default class HomeBusScreen extends React.Component {
  componentDidUpdate(prevProp,prevState){
     if(prevState.Value !== this.state.Value){
       if(this.state.Value === "สาย 1"){
          this.setState({Path:Bus1});
          this.setState({Color:"#0ce8f7"});
          this.setState({BusStop:BusStop1});
          this.setState({symbol:symbol1});
 
       }
       else if(this.state.Value === "สาย 2"){
        this.setState({Path:Bus2});
        this.setState({Color:"#fa2057"});
        this.setState({BusStop:BusStop2});
        this.setState({symbol:symbol2});
 
       }
       else if(this.state.Value === "สาย 3"){
        this.setState({Path:Bus3});
        this.setState({Color:"#d91fed"});
        this.setState({BusStop:BusStop3});
        this.setState({symbol:symbol3});
   
       }
       else if(this.state.Value === "สาย 4"){
        this.setState({Path:Bus4});
        this.setState({Color:"#92f52f"});
        this.setState({BusStop:BusStop4});
        this.setState({symbol:symbol4});
       
       }
       else if(this.state.Value === "สาย 5"){
        this.setState({Path:Bus5});
        this.setState({Color:"#f58f0a"});
        this.setState({BusStop:BusStop5});
        this.setState({symbol:symbol5});
        
       }
       this.setState({Faculty:'แสดงทั้งหมด'})
       this.setState({arrayMark:[]})
     }
     else if(prevState.Faculty !== this.state.Faculty){
       this.Search(this.state.Faculty)
     }
}
  
  constructor(props){
    super(props);
    this.state={
      Path: Bus1,
      Color:"#0ce8f7",
      Value: null,
      BusStop:BusStop1,
      symbol:symbol1,
      FacultyOrigin:'',
      FacultyDestination:'',
      change:false,
      Faculty:"แสดงทั้งหมด",
      arrayMark :[]
    };
    this.Search=this.Search.bind(this);
  }

  Search(name){
    const arrayOfMark=[]
    console.log('start')
    if(this.state.Faculty === 'แสดงทั้งหมด'){
       this.state.BusStop.markers.map(ele =>{
         arrayOfMark.push(ele.coordinate)
       })
    }
    else{
      this.state.BusStop.markers.map(element =>{
        element.Faculty.filter(fac => {
          if(name === fac){
            arrayOfMark.push(element.coordinate)
          }
        })
      })
    }
      console.log(arrayOfMark)
      this.setState({arrayMark:arrayOfMark})
  }


  render() {
      let line =[{value:'สาย 1'},{value:'สาย 2'},{value:'สาย3'},
    {value:'สาย 4'},{value:'สาย 5'}]
    const faculty=["แสดงทั้งหมด","รวม(ไม่อยู่ใกล้คณะใดๆ)","คณะเกษตร","คณะบริหารธุรกิจ","คณะประมง","คณะมนุษยศาสตร์","คณะวนศาสตร์"
  ,"คณะวิทยาศาสตร์","คณะวิศวกรรมศาสตร์","คณะศึกษาศาสตร์","คณะเศรษฐศาสตร์","คณะสถาปัตยกรรมศาสตร์",
"คณะสังคมศาสตร์","คณะสัตวแพทยศาสตร์","คณะอุตสาหกรรมเกษตร","คณะเทคนิคการสัตวแพทย์","คณะสิ่งแวดล้อม"]
    if(!this.state.change){
      this.setState({change:true})
    }
    if(this.state.Faculty === "แสดงทั้งหมด"){
    this.state.BusStop.markers.map(ele =>{
      this.state.arrayMark.push(ele.coordinate)
    })
  }
    return (
      <View style={{ flex: 1}}>
 
        <Picker selectedValue={this.state.Value}
        style={{height:25,width:'50%' ,zIndex:1,position:'absolute',flex:1}}
        onValueChange={(itemValue,itemIndex) =>{
          this.setState({Value:itemValue})
        }}>
          <Picker.item label= 'สาย 1' value='สาย 1' />
          <Picker.item label= 'สาย 2' value='สาย 2' />
          <Picker.item label= 'สาย 3' value='สาย 3' />
          <Picker.item label= 'สาย 4' value='สาย 4' />
          <Picker.item label= 'สาย 5' value='สาย 5' />
        </Picker>
        <Picker
        selectedValue={this.state.Faculty}
        style={{left:'50%',zIndex:1,position:'absolute',height:25,flex:1,width:'50%'}}
        onValueChange={(itemValue,itemIndex)=>{
          this.setState({Faculty:itemValue})
          // this.Search(this.state.Faculty)
        }}>
          
          {faculty.map(element =>(
            <Picker.item label={element} value={element}/>
          ))}
        </Picker>
        {/* </View> */}
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
            {/* {this.state.BusStop.markers.map(marker => (
              <Marker coordinate={marker.coordinate} Color={'#fae20a'}>
                <Image source={this.state.symbol} style={{width:20,height:20}}/>
              </Marker>
            ))}  */}
            
            {this.state.arrayMark.map(marker => (
              <Marker coordinate={marker} Color={'#fae20a'}>
                <Image source={this.state.symbol} style={{width:20,height:20}}/>
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
  '#0eecf0',
  '#d91fed',
  '#f58f0a',
  '#0ce8f7'
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
