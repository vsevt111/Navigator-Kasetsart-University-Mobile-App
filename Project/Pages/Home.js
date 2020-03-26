import * as React from 'react';
import { Button, View, Text,TextInput,StyleSheet,
  PermissionsAndroid, TouchableHighlightBase,Picker,Image,SafeAreaView,FlatList,ScrollView,
TouchableOpacity} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView,{Polyline, PROVIDER_GOOGLE,Marker,Callout} from 'react-native-maps';
import Sci from '../database/building/buildingSci.json';
import Agro from '../database/building/buildingAgro.json';
import Arch from '../database/building/buildingArch.json';
import Bus from '../database/building/buildingBus.json';
import Eco from '../database/building/buildingEco.json';
import Edu from '../database/building/buildingEdu.json';
import Eng from '../database/building/buildingEng.json';
import Env from '../database/building/buildingEnv.json';
import Fish from '../database/building/buildingFish.json';
import Forest from '../database/building/buildingForest.json';
import Hum from '../database/building/buildingHum.json';
import Soc from '../database/building/buildingSoc.json';
import Vet from '../database/building/buildingVet.json';
import VetTech from '../database/building/buildingVetTech.json';
import Agr from '../database/building/buildingAgr';
import All from '../database/building/buildingAll';
import AllBuilding from '../database/building/building.json';
import locPress from '../image/PressMark.png';
import Direction from 'react-native-maps-directions';
import busStop1 from '../database/busPark/busPark1.json';
import busStop2 from '../database/busPark/busPark2.json';
import busStop3 from '../database/busPark/busPark3.json';
import busStop4 from '../database/busPark/busPark4.json';
import busStop5 from '../database/busPark/busPark5.json';
import geolib,{getPreciseDistance,getDistance,convertDistance,getCenter} from 'geolib';
import SearchInput ,{createFilter} from 'react-native-search-filter';


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
      return true
    } else {
      console.log('location permission denied');
      return false
    }
  } catch (err) {
    console.warn(err);
  }
}

export default class HomeScreen extends React.Component {
  
  componentDidMount(){
    requestLocationPermission();
  
    if (requestLocationPermission()) {
      Geolocation.getCurrentPosition(
          (position) => {
            const {myLocation} = this.state
         
              console.log(position.coords.latitude)
              console.log(position.coords.longitude)
              this.setState({myLocation:{latitude:position.coords.latitude,
                longitude:position.coords.longitude}})
            
          },
          (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
  }
  }

  componentWillUnmount(){
    requestLocationPermission();
  }
  componentDidUpdate(prevProp,prevState){
    const {TextOrigin,TextDestination} = this.state
      if(prevState.change){
        if(prevState.FacultyOrigin !== this.state.FacultyOrigin){
          if(this.state.FacultyOrigin === "คณะเกษตร"){
            //this.setState({FacultyValueOrigin:Agr})
            this.setState({FacultyValue:Agr})
            console.log('คณะเกษตร')
          }
          
          else if(this.state.FacultyOrigin === "คณะอุตสาหกรรมเกษตร"){
            //this.setState({FacultyValueOrigin:Agro})
            this.setState({FacultyValue:Agro})
            console.log('คณะอุตสาหกรรมเกษตร')
          }
          else if(this.state.FacultyOrigin === "รวม" ){
            //this.setState({FacultyValueOrigin:All})
            this.setState({FacultyValue:All})
            console.log('รวม')
          }
          else if(this.state.FacultyOrigin === "คณะสถาปัตยกรรมศาสตร์"){
            //this.setState({FacultyValueOrigin:Arch})
            this.setState({FacultyValue:Arch})
            console.log('คณะสถาปัตยกรรมศาสตร์')
          }
          else if(this.state.FacultyOrigin === "คณะบริหารธุรกิจ"){
            //this.setState({FacultyValueOrigin:Bus})
            this.setState({FacultyValue:Bus})
            console.log('คณะบริหารธุรกิจ')
          }
          else if(this.state.FacultyOrigin === "คณะเศรษฐศาสตร์"){
            //this.setState({FacultyValueOrigin:Eco})
            this.setState({FacultyValue:Eco})
            console.log('คณะเศรษฐศาสตร์')
          }
          else if(this.state.FacultyOrigin === "คณะศึกษาศาสตร์"){
            //this.setState({FacultyValueOrigin:Edu})
            this.setState({FacultyValue:Edu})
            console.log('คณะศึกษาศาสตร์')
          }
          else if(this.state.FacultyOrigin === "คณะวิศวกรรมศาสตร์"){
            //this.setState({FacultyValueOrigin:Eng})
            this.setState({FacultyValue:Eng})
            console.log('คณะวิศวกรรมศาสตร์')
          }
          else if(this.state.FacultyOrigin === "คณะสิ่งแวดล้อม" ){
            //this.setState({FacultyValueOrigin:Env})
            this.setState({FacultyValue:Env})
            console.log('คณะสิ่งแวดล้อม')
          }
          else if(this.state.FacultyOrigin === "คณะประมง"){
            //this.setState({FacultyValueOrigin:Fish})
            this.setState({FacultyValue:Fish})
            console.log('คณะประมง')
          }
          else if(this.state.FacultyOrigin === "คณะมนุษยศาสตร์"){
            //this.setState({FacultyValueOrigin:Hum})
            this.setState({FacultyValue:Hum})
            console.log('คณะมนุษยศาสตร์')
          }
          else if(this.state.FacultyOrigin === "คณะวิทยาศาสตร์"){
            //this.setState({FacultyValueOrigin:Sci})
            this.setState({FacultyValue:Sci})
            console.log('คณะวิทยาศาสตร์')
          }
          else if(this.state.FacultyOrigin === "คณะสังคมศาสตร์"){
            //this.setState({FacultyValueOrigin:Soc})
            this.setState({FacultyValue:Soc})
            console.log('คณะสังคมศาสตร์')
          }
          else if(this.state.FacultyOrigin === "คณะสัตวแพทยศาสตร์"){
            //this.setState({FacultyValueOrigin:Vet})
            this.setState({FacultyValue:Vet})
            console.log('คณะสัตวแพทยศาสตร์')
          }
          else if(this.state.FacultyOrigin === "คณะเทคนิคการสัตวแพทย์"){
            //this.setState({FacultyValueOrigin:VetTech})
            this.setState({FacultyValue:VetTech})
            console.log('คณะเทคนิคการสัตวแพทย์')
          }
          else if(this.state.FacultyOrigin === "คณะวนศาสตร์"){
            //this.setState({FacultyValueOrigin:Forest})
            this.setState({FacultyValue:Forest})
            console.log('คณะวนศาสตร์')
          }
        
       
        }
       if(prevState.FacultyDestination !== this.state.FacultyDestination){
     
    
        if(this.state.FacultyDestination === "คณะเกษตร"){
          //this.setState({FacultyValueDestination:Agr})
          this.setState({FacultyValue:Agr})
          console.log('คณะเกษตรปลายทาง')
        }
       
        else if(this.state.FacultyDestination === "คณะอุตสาหกรรมเกษตร"){
          //this.setState({FacultyValueDestination:Agro})
          this.setState({FacultyValue:Agro})
          console.log('คณะอุตสาหกรรมเกษตรปลายทาง')
        }
        
        else if(this.state.FacultyDestination === "รวม"){
          //this.setState({FacultyValueDestination:All})
          this.setState({FacultyValue:All})
          console.log('รวม')
        }
        
        else if(this.state.FacultyDestination === "คณะสถาปัตยกรรมศาสตร์"){
          //this.setState({FacultyValueDestination:Arch})
          this.setState({FacultyValue:Arch})
          console.log('คณะสถาปัตยกรรมศาสตร์ปลายทาง')
        }
        
        else if(this.state.FacultyDestination === "คณะบริหารธุรกิจ"){
          //this.setState({FacultyValueDestination:Bus})
          this.setState({FacultyValue:Bus})
          console.log('คณะบริหารธุรกิจปลายทาง')
        }
        
        else if(this.state.FacultyDestination === "คณะเศรษฐศาสตร์"){
          //this.setState({FacultyValueDestination:Eco})
          this.setState({FacultyValue:Eco})
          console.log('คณะเศรษฐศาสตร์ปลายทาง')
        }
       
        else if(this.state.FacultyDestination === "คณะศึกษาศาสตร์"){
          //this.setState({FacultyValueDestination:Edu})
          this.setState({FacultyValue:Edu})
          console.log('คณะศึกษาศาสตร์ปลายทาง')
        }
        
        else if(this.state.FacultyDestination === "คณะวิศวกรรมศาสตร์"){
          //this.setState({FacultyValueDestination:Eng})
          this.setState({FacultyValue:Eng})
          console.log('คณะวิศวกรรมศาสตร์ปลายทาง')
        }
       
        else if(this.state.FacultyDestination === "คณะสิ่งแวดล้อม"){
          //this.setState({FacultyValueDestination:Env})
          this.setState({FacultyValue:Env})
          console.log('คณะสิ่งแวดล้อมปลายทาง')
        }
        
        else if(this.state.FacultyDestination === "คณะประมง"){
          //this.setState({FacultyValueDestination:Fish})
          this.setState({FacultyValue:Fish})
          console.log('คณะประมงปลายทาง')
        }
        
        else if(this.state.FacultyDestination === "คณะวนศาสตร์"){
          //this.setState({FacultyValueDestination:Forest})
          this.setState({FacultyValue:Forest})
          console.log('คณะวนศาสตร์ปลายทาง')
        }
        
        else if(this.state.FacultyDestination === "คณะมนุษยศาสตร์"){
          //this.setState({FacultyValueDestination:Hum})
          this.setState({FacultyValue:Hum})
          console.log('คณะมนุษยศาสตร์ปลายทาง')
        }
       
        else if(this.state.FacultyDestination === "คณะวิทยาศาสตร์"){
          //this.setState({FacultyValueDestination:Sci})
          this.setState({FacultyValue:Sci})
          console.log('คณะวิทยาศาสตร์ปลายทาง')
        }
       
        else if(this.state.FacultyDestination === "คณะสังคมศาสตร์"){
          //this.setState({FacultyValueDestination:Soc})
          this.setState({FacultyValue:Soc})
          console.log('คณะสังคมศาสตร์ปลายทาง')
        }
       
        else if(this.state.FacultyDestination === "คณะสัตวแพทยศาสตร์"){
          //this.setState({FacultyValueDestination:Vet})
          this.setState({FacultyValue:Vet})
          console.log('คณะสัตวแพทยศาสตร์ปลายทาง')
        }
        
        else if(this.state.FacultyDestination === "คณะเทคนิคการสัตวแพทย์"){
          //this.setState({FacultyValueDestination:VetTech})
          this.setState({FacultyValue:VetTech})
          console.log('คณะเทคนิคการสัตวแพทย์รปลายทาง')
        }
       }
        
        if(prevState.line !== this.state.line){
          const {Waypoints,NameWaypoints,coordinate} = this.state
          if(this.state.line === "สาย 1"){
       
            this.setState({BusStopLine:busStop1})
            this.setState({LineColor:"#0ce8f7"})
          }
          else if(this.state.line === "สาย 3"){
        
            this.setState({BusStopLine:busStop3})
            this.setState({LineColor:"#d91fed"})
          }
          else if(this.state.line === "สาย 5"){
          
            this.setState({BusStopLine:busStop5})
            this.setState({LineColor:"#f58f0a"})
          }
        }
        if(prevState.TextOrigin !== this.state.TextOrigin){
          AllBuilding.building.filter((ele,index)=>{
            if(ele.name === this.state.TextOrigin){
              this.setState({deleOri:true})
            }
          })
          if(this.state.deleOri){
            this.setState({deleOri:false})
            this.state.NameOfCoor.shift()
            this.state.coordinate.shift()
          }
      
        }
        if(prevState.TextDestination !== this.state.TextDestination){
          AllBuilding.building.filter(ele =>{
            if(ele.name === this.state.TextDestination){
              this.setState({deleDes:true})
            }
          })
          if(this.state.deleDes){
            this.setState({deleDes:false})
            this.state.NameOfCoor.pop()
            this.state.coordinate.pop()
          }
        }
      
      this.setState({change:false})
      }
}
  constructor(props){
    super(props);
    this.state={
      TextOrigin:"",
      TextDestination:"",
      coordinate:[],
      FacultyOrigin:"",
      FacultyDestination:"",
      FacultyValue:All,
      change:false,
      changeOrigin:true,
      FacultyValueOrigin:All,
      FacultyValueDestination:All,
      prevTextOrigin:'',
      prevTextDestination:'',
      time:null,
      distance:null,
      distOrigin:null,
      myLocation:[],
      TextColor:'gray',
      Opacity:0.2,
      Waypoints:[],
      NameWaypoints:[],
      line:null,
      BusStopLine:null,
      LineColor:null,
      countOrigin:0,
      countDes:0,
      FirstFromDes:false,
      request:false,
      BusStopEqual:false,
      listItemOri:false,
      listItemDes:false,
      deleOri:false,
      deleDes:false,
      NameOfCoor:[]
    };
    this.Search = this.Search.bind(this);
    this.DisplayAll = this.DisplayAll.bind(this);
    this.handlePressOnMap = this.handlePressOnMap.bind(this);
    this.getBusStop = this.getBusStop.bind(this);
    this.updateTime= this.updateTime.bind(this);
    this.optimalRoute = this.optimalRoute.bind(this);
    this.NestedMethodTest = this.NestedMethodTest.bind(this);
  }

  DisplayAll(){
    
    const {TextOrigin,TextDestination,FacultyValueDestination,FacultyValueOrigin,coordinate} = this.state
    this.Search(TextOrigin,true)
    this.Search(TextDestination,false)
    // this.getBusStop()
    var latitudeDelta
    var longitudeDelta
    if(coordinate.length === 2){
    var latitude1 = coordinate[0].latitude
    var latitude2 = coordinate[1].latitude
    var longitude1 = coordinate[0].longitude
    var longitude2 = coordinate[1].longitude
    latitudeDelta = Math.max(latitude1,latitude2)-Math.min(latitude1,latitude2)+0.01
    longitudeDelta = Math.max(longitude1,longitude2)-Math.min(longitude1,longitude2)+0.01
  }
  else if(coordinate.length === 1){
    latitudeDelta =0.0122,
    longitudeDelta = 0.0021
  }
    const region = {
      ...getCenter(coordinate),
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta
    }
   
    this.mapRef.animateToRegion(region,250)
   
  }
 
  Search(text,bool){
    const texts = text.toUpperCase()
    const {coordinate,TextOrigin,TextDestination,myLocation,FirstFromDes,NameOfCoor} = this.state
      if(bool && TextOrigin=== 'ตำแหน่งของตัวเอง'){
        if(coordinate.length === 0){
          NameOfCoor.push('ตำแหน่งของตัวเอง')
          coordinate.push(myLocation)
          this.setState({FirstFromDes:false})
        }
        else{
         
          if(coordinate.length === 1 ){
           if(FirstFromDes)
            {coordinate.splice(0,0,myLocation)
            NameOfCoor.splice(0,0,'ตำแหน่งของตัวเอง')}
            else{
              coordinate.fill(myLocation,0,1)
              NameOfCoor.fill('ตำแหน่งของตัวเอง',0,1)
            }
            this.setState({FirstFromDes:false})
          }
          else{
            coordinate.fill(myLocation,0,1)
            NameOfCoor.fill('ตำแหน่งของตัวเอง',0,1)
          }
        }
      
      }
      else if (!bool && TextDestination === 'ตำแหน่งของตัวเอง'){
        if(coordinate.length === 1){
          if(!FirstFromDes)
          {coordinate.push(myLocation)
          NameOfCoor.push('ตำแหน่งของตัวเอง')}
          else{
            coordinate.fill(myLocation,0,1)
            NameOfCoor.fill('ตำแหน่งของตัวเอง',0,1)
          }
         
        }
        else{
          if(coordinate.length === 0){
            coordinate.push(myLocation)
            NameOfCoor.push('ตำแหน่งของตัวเอง')
            this.setState({FirstFromDes:true})
          }
          else{
           
            coordinate.fill(myLocation,1,2)
            NameOfCoor.fill('ตำแหน่งของตัวเอง',1,2)
        }
         
        }
      }
    else{
    AllBuilding.building.filter(item => {
      if(item.name === texts){
        if(TextOrigin !== 'ท่านได้คลิกสถานที่ต้นทางบนแผนที่แล้ว' && bool){
          if(coordinate.length === 0){
            coordinate.push(item.coordinate)
            NameOfCoor.push(item.name)
          }
          else{
            const {FirstFromDes} = this.state
            if(FirstFromDes && coordinate.length === 1){
              coordinate.splice(0,0,item.coordinate)
              NameOfCoor.splice(0,0,item.name)
              this.setState({FirstFromDes:false})
            }
            else{
              coordinate.fill(item.coordinate,0,1)
              NameOfCoor.fill(item.name,0,1)
            }
          }
        }
      if(TextDestination !== 'ท่านได้คลิกสถานที่ปลายทางบนแผนที่แล้ว' && !bool){
        if(coordinate.length === 1){
          if(!FirstFromDes)
          {
            coordinate.push(item.coordinate)
            NameOfCoor.push(item.name)
          }
          else{
            coordinate.fill(item.coordinate,0,1)
            NameOfCoor.fill(item.name,0,1)
          }
        }
        else if(coordinate.length === 2){
          NameOfCoor.fill(item.name,1,2)
          coordinate.fill(item.coordinate,1,2)
        }
        else if(coordinate.length === 0){
          NameOfCoor.push(item.name)
          coordinate.push(item.coordinate)
          this.setState({FirstFromDes:true})
        }
      }
      this.setState({NameOfCoor})
      this.setState({coordinate})
     
        return item
      }
    })
    
    }
  }
  getBusStop(){
    // console.log('getBusStop() method',this.state.BusStopLine)
    const {coordinate,Waypoints,NameWaypoints,BusStopLine,line} = this.state
    Waypoints.splice(0,Waypoints.length)
    NameWaypoints.splice(0,NameWaypoints.length)
    if(coordinate.length === 2)
  {  
    var minOrigin  = 999
    var minDes = 999
    var indexOrigin = 0
    var indexDes = 0
  }
    if(coordinate.length >=1 && BusStopLine !== null){
      BusStopLine.markers.map((item,index)=>{
        const distOrigin = getPreciseDistance(coordinate[0],item.coordinate)
        const kiloOrigin = convertDistance(distOrigin,'km')
        if(minOrigin  >= kiloOrigin){
          minOrigin =kiloOrigin
          indexOrigin = index
        }
        if(coordinate.length === 2){
          const distDes = getPreciseDistance(coordinate[1],item.coordinate)
          const kiloDes = convertDistance(distDes,'km')
          if(minDes >= kiloDes){
            if(minDes !== kiloDes){
              minDes=kiloDes
              indexDes = index
            }
            else{
              if(indexOrigin < index){
                indexDes=index
              }
            }
          }
        }
    })}
    // console.log('minimumOrigin: '+minOrigin  +' IndexOrigin: '+indexOrigin)
    // console.log('minimumDes: '+minDes+' IndexDes: '+indexDes)
    if(BusStopLine !== null){
      if(indexOrigin < indexDes){
      const busStop = BusStopLine.markers.slice(indexOrigin,indexDes+1)
      busStop.map((ele,index) =>{
        NameWaypoints.push(ele.name)
        Waypoints.push(ele.coordinate)
      })
      this.setState({BusStopEqual:false})
    }
    else if(indexOrigin > indexDes){
      const busStopFirst = BusStopLine.markers.slice(indexOrigin)
      const busStopLast = BusStopLine.markers.slice(0,indexDes+1)
      busStopFirst.map((ele,index) =>{
        NameWaypoints.push(ele.name)
        Waypoints.push(ele.coordinate)
      })
      busStopLast.map((ele,index)=>{
        NameWaypoints.push(ele.name)
        Waypoints.push(ele.coordinate)
      })
      this.setState({BusStopEqual:false})
    }
  
  }
  else if(indexOrigin === indexDes){
    this.setState({BusStopEqual:true})
  }
 
  this.setState({Waypoints})
  this.setState({NameWaypoints})
  }
  
  optimalRoute(){
    const {coordinate,Waypoints,LineColor} = this.state
    return(
      <Direction
            origin = {coordinate[0]}
            destination = {Waypoints[0]}
            apikey={'AIzaSyC7dMUMWICLlsoKMsf1c3ljrhiDdNgTl8U'}
            strokeWidth={4}
            strokeColor={LineColor}
            mode={'WALKING'}
            // optimizeWaypoints={true}
            // splitWaypoints={true}
            // resetOnChange={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`)
            }}
            onReady ={result =>{
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} minOrigin .`)
              console.log('return direction component in method')
              this.updateTime(result.duration,result.distance)
            }}
            onError={error=>{
              console.log(error)
            }}
            />
    )
  }

  NestedMethodTest(){
    this.getBusStop()
    this.optimalRoute()
  }

  handlePressOnMap(e){
    const {TextOrigin,TextDestination,changeOrigin,coordinate,FirstFromDes,NameOfCoor} =this.state
    if(changeOrigin){
      if(coordinate.length === 1 ){
        if(!FirstFromDes){
        coordinate.shift()
        NameOfCoor.shift()
        coordinate.push(e.nativeEvent.coordinate)
        NameOfCoor.push('สถานที่ต้นทาง')
      }
      else{
        coordinate.splice(0,0,e.nativeEvent.coordinate)
        NameOfCoor.splice(0,0,'สถานที่ต้นทาง')
        this.setState({FirstFromDes:false})
      }
      }
      else if(coordinate.length === 2){
        NameOfCoor.fill('สถานที่ต้นทาง',0,1)
        coordinate.fill(e.nativeEvent.coordinate,0,1)
      }
      else if(coordinate.length === 0){
        NameOfCoor.push('สถานที่ต้นทาง')
        coordinate.push(e.nativeEvent.coordinate)
      }
      this.setState({TextOrigin:'ท่านได้คลิกสถานที่ต้นทางบนแผนที่แล้ว'})
    }
    else{
      if(coordinate.length === 2){
        coordinate.pop()
        NameOfCoor.pop()
        coordinate.push(e.nativeEvent.coordinate)
        NameOfCoor.push('สถานที่ปลายทาง')
      }
      else if(coordinate.length === 1){
        if(!FirstFromDes){
          NameOfCoor.push('สถานที่ปลายทาง')
          coordinate.push(e.nativeEvent.coordinate)
        }
        else{
          NameOfCoor.fill('สถานที่ปลายทาง',0,1)
          coordinate.fill(e.nativeEvent.coordinate,0,1)
        }
        
      }
      else if(coordinate.length === 0){
        NameOfCoor.push('สถานที่ปลายทาง')
        coordinate.push(e.nativeEvent.coordinate)
        this.setState({FirstFromDes:true})
      }
      this.setState({TextDestination:'ท่านได้คลิกสถานที่ปลายทางบนแผนที่แล้ว'})
    }
    this.getBusStop()
  }

  updateTime(times,distances){
    const {time,distance} =this.state
    this.setState({time:time+times,distance:distance+distances})
  }

  render() {
    const KEY_TO_FILTERS = ['name']
    
    const {coordinate,time,distOrigin,distance,TextOrigin,
      TextDestination,TextColor,Opacity,Waypoints,NameWaypoints,line,LineColor,countDes,
    countOrigin,changeOrigin,BusStopLine,prevTextOrigin,prevTextDestination
  ,listItemOri,listItemDes,deleOri,deleDes,NameOfCoor,BusStopEqual} = this.state
  const filterNameOrigin= AllBuilding.building.filter(createFilter(TextOrigin,KEY_TO_FILTERS))
  const filterNameDes = AllBuilding.building.filter(createFilter(TextDestination,KEY_TO_FILTERS))
    const faculty=["รวม","คณะเกษตร","คณะบริหารธุรกิจ","คณะประมง","คณะมนุษยศาสตร์","คณะวนศาสตร์"
  ,"คณะวิทยาศาสตร์","คณะวิศวกรรมศาสตร์","คณะศึกษาศาสตร์","คณะเศรษฐศาสตร์","คณะสถาปัตยกรรมศาสตร์",
"คณะสังคมศาสตร์","คณะสัตวแพทยศาสตร์","คณะอุตสาหกรรมเกษตร","คณะเทคนิคการสัตวแพทย์","คณะสิ่งแวดล้อม"]
const Arrayline =["สาย 1","สาย 3","สาย 5"]

if(!this.state.change){
  const{coordinate,changeOrigin,myLocation,Waypoints,deleOri} = this.state
  this.setState({change:true})
  this.setState({prevTextOrigin:this.state.TextOrigin})
  this.setState({prevTextDestination:this.state.TextDestination})
  this.getBusStop()
  this.setState({request:true})


}

else if(this.state.prevTextOrigin !== this.state.TextOrigin){
  this.setState({listItemOri:false})
  var boolDeleOrigin = false
  AllBuilding.building.filter((item)=>{
    if(item.name === this.state.TextOrigin || this.state.TextOrigin === 'ท่านได้คลิกสถานที่ต้นทางบนแผนที่แล้ว' 
    || this.state.TextOrigin === 'ตำแหน่งของตัวเอง'){
      
      this.setState({countOrigin:0,listItemOri:true})
      boolDeleOrigin = true
    }
  
  })
  // if(boolDeleOrigin && countOrigin <1){
  //   coordinate.shift()
  //   this.setState({countOrigin:1})
  // }
 
  if(this.state.FacultyOrigin === "คณะเกษตร"){
    this.setState({FacultyValueOrigin:Agr})
    console.log('คณะเกษตร')
  }
  else if(this.state.FacultyOrigin === "คณะอุตสาหกรรมเกษตร"){
    this.setState({FacultyValueOrigin:Agro})
   
    console.log('คณะอุตสาหกรรมเกษตร')
  }
  else if(this.state.FacultyOrigin === "รวม" ){
    this.setState({FacultyValueOrigin:All})
  
    console.log('รวม')
  }
  else if(this.state.FacultyOrigin === "คณะสถาปัตยกรรมศาสตร์"){
    this.setState({FacultyValueOrigin:Arch})
 
    console.log('คณะสถาปัตยกรรมศาสตร์')
  }
  else if(this.state.FacultyOrigin === "คณะบริหารธุรกิจ"){
    this.setState({FacultyValueOrigin:Bus})
 
    console.log('คณะบริหารธุรกิจ')
  }
  else if(this.state.FacultyOrigin === "คณะเศรษฐศาสตร์"){
    this.setState({FacultyValueOrigin:Eco})
 
    console.log('คณะเศรษฐศาสตร์')
  }
  else if(this.state.FacultyOrigin === "คณะศึกษาศาสตร์"){
    this.setState({FacultyValueOrigin:Edu})

    console.log('คณะศึกษาศาสตร์')
  }
  else if(this.state.FacultyOrigin === "คณะวิศวกรรมศาสตร์"){
    this.setState({FacultyValueOrigin:Eng})
    
    console.log('คณะวิศวกรรมศาสตร์')
  }
  else if(this.state.FacultyOrigin === "คณะสิ่งแวดล้อม" ){
    this.setState({FacultyValueOrigin:Env})
 
    console.log('คณะสิ่งแวดล้อม')
  }
  else if(this.state.FacultyOrigin === "คณะประมง"){
    this.setState({FacultyValueOrigin:Fish})
    
    console.log('คณะประมง')
  }
  else if(this.state.FacultyOrigin === "คณะมนุษยศาสตร์"){
    this.setState({FacultyValueOrigin:Hum})
   
    console.log('คณะมนุษยศาสตร์')
  }
  else if(this.state.FacultyOrigin === "คณะวิทยาศาสตร์"){
    this.setState({FacultyValueOrigin:Sci})
  
    console.log('คณะวิทยาศาสตร์')
  }
  else if(this.state.FacultyOrigin === "คณะสังคมศาสตร์"){
    this.setState({FacultyValueOrigin:Soc})
  
    console.log('คณะสังคมศาสตร์')
  }
  else if(this.state.FacultyOrigin === "คณะสัตวแพทยศาสตร์"){
    this.setState({FacultyValueOrigin:Vet})
   
    console.log('คณะสัตวแพทยศาสตร์')
  }
  else if(this.state.FacultyOrigin === "คณะเทคนิคการสัตวแพทย์"){
    this.setState({FacultyValueOrigin:VetTech})

    console.log('คณะเทคนิคการสัตวแพทย์')
  }
  else if(this.state.FacultyOrigin === "คณะวนศาสตร์"){
    this.setState({FacultyValueOrigin:Forest})
    console.log('คณะวนศาสตร์')
  }
}
else if(this.state.prevTextDestination !== this.state.TextDestination){
  this.setState({listItemDes:false})
  var boolDeleDes = false
 AllBuilding.building.filter((item)=>{
    if(item.name === this.state.TextDestination || this.state.TextDestination === 'ท่านได้คลิกสถานที่ปลายทางบนแผนที่แล้ว' 
    || this.state.TextDestination === 'ตำแหน่งของตัวเอง'){
      
      this.setState({countDes:0,listItemDes:true})
      boolDeleDes = true
    }
  })
  // if(boolDeleDes && countDes < 1){
  //   coordinate.pop()
  //   this.setState({countDes:1})
  // }
 
  if(this.state.FacultyDestination === "คณะเกษตร"){
    this.setState({FacultyValueDestination:Agr})
    console.log('คณะเกษตรปลายทาง')
  }
 
  else if(this.state.FacultyDestination === "คณะอุตสาหกรรมเกษตร"){
    this.setState({FacultyValueDestination:Agro})

    console.log('คณะอุตสาหกรรมเกษตรปลายทาง')
  }
  
  else if(this.state.FacultyDestination === "รวม"){
    this.setState({FacultyValueDestination:All})
  
    console.log('รวม')
  }
  
  else if(this.state.FacultyDestination === "คณะสถาปัตยกรรมศาสตร์"){
    this.setState({FacultyValueDestination:Arch})
   
    console.log('คณะสถาปัตยกรรมศาสตร์ปลายทาง')
  }
  
  else if(this.state.FacultyDestination === "คณะบริหารธุรกิจ"){
    this.setState({FacultyValueDestination:Bus})
   
    console.log('คณะบริหารธุรกิจปลายทาง')
  }
  
  else if(this.state.FacultyDestination === "คณะเศรษฐศาสตร์"){
    this.setState({FacultyValueDestination:Eco})
 
    console.log('คณะเศรษฐศาสตร์ปลายทาง')
  }
 
  else if(this.state.FacultyDestination === "คณะศึกษาศาสตร์"){
    this.setState({FacultyValueDestination:Edu})
 
    console.log('คณะศึกษาศาสตร์ปลายทาง')
  }
  
  else if(this.state.FacultyDestination === "คณะวิศวกรรมศาสตร์"){
    this.setState({FacultyValueDestination:Eng})
  
    console.log('คณะวิศวกรรมศาสตร์ปลายทาง')
  }
 
  else if(this.state.FacultyDestination === "คณะสิ่งแวดล้อม"){
    this.setState({FacultyValueDestination:Env})
  
    console.log('คณะสิ่งแวดล้อมปลายทาง')
  }
  
  else if(this.state.FacultyDestination === "คณะประมง"){
    this.setState({FacultyValueDestination:Fish})
   
    console.log('คณะประมงปลายทาง')
  }
  
  else if(this.state.FacultyDestination === "คณะวนศาสตร์"){
    this.setState({FacultyValueDestination:Forest})
 
    console.log('คณะวนศาสตร์ปลายทาง')
  }
  
  else if(this.state.FacultyDestination === "คณะมนุษยศาสตร์"){
    this.setState({FacultyValueDestination:Hum})
  
    console.log('คณะมนุษยศาสตร์ปลายทาง')
  }
 
  else if(this.state.FacultyDestination === "คณะวิทยาศาสตร์"){
    this.setState({FacultyValueDestination:Sci})
   
    console.log('คณะวิทยาศาสตร์ปลายทาง')
  }
 
  else if(this.state.FacultyDestination === "คณะสังคมศาสตร์"){
    this.setState({FacultyValueDestination:Soc})
   
    console.log('คณะสังคมศาสตร์ปลายทาง')
  }
 
  else if(this.state.FacultyDestination === "คณะสัตวแพทยศาสตร์"){
    this.setState({FacultyValueDestination:Vet})
   
    console.log('คณะสัตวแพทยศาสตร์ปลายทาง')
  }
  
  else if(this.state.FacultyDestination === "คณะเทคนิคการสัตวแพทย์"){
    this.setState({FacultyValueDestination:VetTech})
   
    console.log('คณะเทคนิคการสัตวแพทย์รปลายทาง')
  }
}


    return (
      <View style={{ flex: 1}}>
        <View style={{position:'absolute',backgroundColor:'#ffffff',zIndex:1,width:'50%'}}>
        <Picker
        selectedValue={this.state.FacultyValue.Faculty}
        style={{height: 50}}
        onValueChange={(itemValue, itemIndex) =>{
          if(this.state.changeOrigin){
          this.setState({FacultyOrigin:itemValue})
        }
          else{
            this.setState({FacultyDestination:itemValue})
     
          }
        }
        }>
        {faculty.map(fac =>(
          <item label={fac} value={fac} key={fac}/>
        ))}
        
</Picker>
<Picker 
selectedValue = {this.state.changeOrigin ? this.state.TextOrigin:this.state.TextDestination}
style ={{height:50}}
onValueChange={(itemValue,itemIndex) =>{
  if(this.state.changeOrigin){
this.setState({TextOrigin:itemValue})
}
else {
  this.setState({TextDestination:itemValue})
}
}}>
  <item label='กรุณาเลือกสถานที่' value ='กรุณาเลือกสถานที่'/>
  <item label='ตำแหน่งของตัวเอง' value ='ตำแหน่งของตัวเอง'/>
  {this.state.FacultyValue.building.map((building) =>(
    <item label={building.name} value={building.name} key={building.name}/>
  ))}
</Picker> 
        <TextInput
        onChangeText={(TextOrigin) => { 
          this.setState({TextOrigin})
          
        }}
        onFocus={(focus)=>{
          if(focus){
            this.setState({changeOrigin:true})
          }
          else{
            this.setState({changeOrigin:false})
          }
        }}
        value={this.state.TextOrigin}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1
        }}
        placeholder="Type Origin or click on the map"
      />
      <TextInput
        onChangeText={TextDestination => {
          this.setState({TextDestination})
      
        }}
        onFocus={(focus)=>
        {
          if(focus){
            this.setState({changeOrigin:false})
          }
          else{
            this.setState({changeOrigin:true})
          }
        }}
        value={this.state.TextDestination}
        
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Type Destination or click on the map"
        // editable={TextOrigin!=="" ? true:false}
      />
      <Button onPress={this.DisplayAll
      } title="ค้นหา" 
      // disabled={true}
      />
        </View>
        <View style={{position:'absolute',backgroundColor:'#ffffff',zIndex:1,width:'50%',left:'50%'}}>
              <Picker
    selectedValue={line === null ? 'เลือกสายที่ใช้':line}
    style={{height:50}}
    onValueChange={(itemValue,itemIndex)=>{
      this.setState({line:itemValue,request:false,time:null,distance:null})
      if(itemValue === 'เลือกสายที่ใช้'){
        this.setState({BusStopLine:null,line:null})
      }
    }}>
      <item label='เลือกสายที่ใช้' value='เลือกสายที่ใช้'/>
      {Arrayline.map((ele)=>(
        <item label={ele} value={ele} key={ele}/>
      ))}
    </Picker>
        </View>
        <MapView style={{flex : 1,zIndex:-1}}
        ref = {el =>(this.mapRef=el)}
        initialRegion={{
          latitude: 13.847639,
          longitude: 100.569584,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0021
        }}
        toolbarEnabled={false}
        onPress={this.handlePressOnMap}
        showsUserLocation={true}
        >
          {this.state.coordinate.map((coor,index)=>(
            <Marker coordinate={coor} key={index} title={coordinate.length === 2? NameOfCoor[index]:null} ref={el =>(this.MarkRef=el)}>
              
            </Marker>
          ))}
        
            { this.state.request && coordinate.length === 2  && <Direction
            origin = {coordinate[0]}
            destination = {Waypoints[0]}
            apikey={'AIzaSyC7dMUMWICLlsoKMsf1c3ljrhiDdNgTl8U'}
            strokeWidth={4}
            strokeColor={LineColor}
            mode={'WALKING'}
            // optimizeWaypoints={true}
            // splitWaypoints={true}
            // resetOnChange={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`)
            }}
            onReady ={result =>{
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} minOrigin .`)
              console.log('direction 1')
              this.updateTime(result.duration,result.distance)
            }}
            onError={error=>{
              console.log(error)
            }}
            >
               
            </Direction>}
          
           { this.state.request && coordinate.length === 2 &&
           <Direction
            origin = {Waypoints[0]}
            destination = {Waypoints[Waypoints.length-1]}
            apikey={'AIzaSyC7dMUMWICLlsoKMsf1c3ljrhiDdNgTl8U'}
            strokeWidth={4}
            strokeColor={LineColor}
            waypoints = {Waypoints.slice(1,Waypoints.length-1)}
            // mode={'WALKING'}
            // optimizeWaypoints={true}
            // splitWaypoints={true}
            // resetOnChange={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`)
            }}
            onReady ={result =>{
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} minOrigin .`)
              console.log('direction 2')
              this.updateTime(result.duration,result.distance)
            }}
            onError={error=>{
              console.log(error)
            }}
            >
               
            </Direction>}

{/* {BusStopEqual && <Direction
            origin = {coordinate[0]}
            destination = {coordinate[1]}
            apikey={'AIzaSyC7dMUMWICLlsoKMsf1c3ljrhiDdNgTl8U'}
            strokeWidth={4}
            strokeColor={LineColor}
            mode={'WALKING'}
            // optimizeWaypoints={true}
            // splitWaypoints={true}
            // resetOnChange={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`)
            }}
            onReady ={result =>{
              const {time,distance} = this.state
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min .`)
              console.log('special condition direction 4')
              this.setState({time:result.duration})
              this.setState({distance:result.distance})
            }}
            onError={error=>{
              console.log(error)
            }}
            >
               
            </Direction>} */}

            {this.state.request && coordinate.length === 2 && <Direction
            origin = {Waypoints[Waypoints.length - 1]}
            destination = {coordinate[1]}
            apikey={'AIzaSyC7dMUMWICLlsoKMsf1c3ljrhiDdNgTl8U'}
            strokeWidth={4}
            strokeColor={LineColor}
            mode={'WALKING'}
            // optimizeWaypoints={true}
            // splitWaypoints={true}
            // resetOnChange={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`)
            }}
            onReady ={result =>{
              
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min .`)
              console.log('direction 3')
              this.updateTime(result.duration,result.distance)
            }}
            onError={error=>{
              console.log(error)
            }}
            >
            </Direction>}
            {/* {this.optimalRoute()} */}
          
   
        </MapView>
          <Text style={{left:'20%',zIndex:1}}>ระยะทาง: {Number.isNaN(Number.parseFloat(distance))? 0:Number.parseFloat(distance).toFixed(2)} กิโลเมตร  ใช้เวลา: {Math.round(time)} นาที</Text>
          <View style={NameWaypoints.length === 0 ? {height:'0%'}:{height:'12%'}}>
            <ScrollView>
          {NameWaypoints.map((ele ,index)=>(
            <Text key={index}>{index === 0 && index !== NameWaypoints.length-1 ? `ขึ้นที่ป้ายจอด : ${ele}`:null}
            {index!== 0 && index !== NameWaypoints.length-1 ? `ผ่านป้ายจอด : ${ele}`:null}
            {index === NameWaypoints.length-1 ? `ลงที่ป้ายจอด : ${ele}`:null}
            </Text>
            
          ))}
          </ScrollView>
          </View>
          {TextOrigin !== "" && !listItemOri && changeOrigin?
        <ScrollView style={{position:'absolute',top:140,backgroundColor:'#ffffff',zIndex:2,width:'50%',height:'35%'}}>
       {filterNameOrigin.map((item,index) => {
         return (
           <TouchableOpacity onPress={() => this.setState({TextOrigin:item.name})} key={index}>
             <View>
         <Text style={{padding:'3%'}}>{item.name}</Text>
             </View>
           </TouchableOpacity>
         )
       })}
       </ScrollView>
       :null}
        {TextDestination !== "" && !listItemDes && !changeOrigin?
        <ScrollView style={{position:'absolute',top:180,backgroundColor:'#ffffff',zIndex:2,width:'50%',height:'35%'}}>
       {filterNameDes.map((item,index) => {
         return (
           <TouchableOpacity onPress={() => this.setState({TextDestination:item.name})} key={index}>
             <View>
         <Text style={{padding:'3%'}}>{item.name}</Text>
             </View>
           </TouchableOpacity>
         )
       })}
       </ScrollView>
       :null}
     
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
