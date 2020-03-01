import * as React from 'react';
import { Button, View, Text,TextInput,StyleSheet,PermissionsAndroid, TouchableHighlightBase,Picker} from 'react-native';

import MapView,{Polyline, PROVIDER_GOOGLE,Marker} from 'react-native-maps';
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
      if(prevState.change){
        if(prevState.FacultyOrigin !== this.state.FacultyOrigin){
          console.log('faculty origin change')
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
        console.log('faculty Destination change')
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
        this.setState({change:false}) 
      }
      
  
}
  constructor(props){
    super(props);
    this.state={
      TextOrigin:"",
      TextDestination:"",
      coordinate:[],
      setOrigin:true,
      FacultyOrigin:"",
      FacultyDestination:"",
      FacultyValue:All,
      change:false,
      changeOrigin:true,
      FacultyValueOrigin:All,
      FacultyValueDestination:All,
      prevTextOrigin:'',
      prevTextDestination:''
    };
    this.Search = this.Search.bind(this);
    this.DisplayAll = this.DisplayAll.bind(this);
  }

  DisplayAll(){
    const array = []
    this.Search(this.state.TextOrigin,array,this.state.FacultyValueOrigin)
    this.Search(this.state.TextDestination,array,this.state.FacultyValueDestination)
  }

  Search(text,array,faculty){
    const texts = text.toUpperCase()
    faculty.building.filter(item => {
      if(item.name === texts){
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

    const faculty=["รวม","คณะเกษตร","คณะบริหารธุรกิจ","คณะประมง","คณะมนุษยศาสตร์","คณะวนศาสตร์"
  ,"คณะวิทยาศาสตร์","คณะวิศวกรรมศาสตร์","คณะศึกษาศาสตร์","คณะเศรษฐศาสตร์","คณะสถาปัตยกรรมศาสตร์",
"คณะสังคมศาสตร์","คณะสัตวแพทยศาสตร์","คณะอุตสาหกรรมเกษตร","คณะเทคนิคการสัตวแพทย์","คณะสิ่งแวดล้อม"]
if(!this.state.change){
  this.setState({change:true})
  this.setState({prevTextOrigin:this.state.TextOrigin})
  this.setState({prevTextDestination:this.state.TextDestination})
}
else if(this.state.prevTextOrigin !== this.state.TextOrigin){
  console.log('change facultyvalueorigin')
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
  console.log('change facultyvaluedestination')
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
        <View style={{position:'absolute',backgroundColor:'#ffffff',zIndex:1}}>
        <Picker
        selectedValue={this.state.changeOrigin ?  this.state.FacultyOrigin:this.state.FacultyDestination}
        style={{height: 50, width: 170}}
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
          <Picker.Item label={fac} value={fac}/>
        ))}
        
</Picker>
<Picker 
selectedValue = {this.state.changeOrigin ? this.state.TextOrigin:this.state.TextDestination}
style ={{height:50,width:170}}
onValueChange={(itemValue,itemIndex) =>{
  if(this.state.changeOrigin){
this.setState({TextOrigin:itemValue})

}
else {
  this.setState({TextDestination:itemValue})
}
}}>
  <Picker.item label='กรุณาเลือกสถานที่' value ='กรุณาเลือกสถานที่ '/>
  {this.state.FacultyValue.building.map((building) =>(
    <Picker.item label={building.name} value={building.name}/>
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
        placeholder="Type Origin"
      />
      <TextInput
        onChangeText={TextDestination => this.setState({TextDestination})}
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
            <Marker coordinate={coor}>
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
