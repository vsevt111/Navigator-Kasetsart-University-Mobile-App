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
    if(prevState.coordinateOrigin !== this.state.coordinateOrigin){
      this.DisplayAll
    }
    else if(prevState.coordinateDestination !== this.state.coordinateDestination){
      this.DisplayAll
    }
    else if(prevState.FacultyOrigin !== this.state.FacultyOrigin || 
      prevState!== this.state.FacultyDestination){
      if(prevState.change){
        if(this.state.FacultyOrigin === "คณะเกษตร" 
        || this.state.FacultyDestination === "คณะเกษตร"){
          this.setState({FacultyValue:Agr})
          console.log('คณะเกษตร')
        }
        else if(this.state.FacultyOrigin === "คณะอุตสาหกรรมเกษตร" ||
        this.state.FacultyDestination === "คณะอุตสาหกรรมเกษตร"){
          this.setState({FacultyValue:Agro})
          console.log('คณะอุตสาหกรรมเกษตร')
        }
        else if(this.state.FacultyOrigin === "รวม" ||
        this.state.FacultyDestination === "รวม"){
          this.setState({FacultyValue:All})
          console.log('รวม')
        }
        else if(this.state.FacultyOrigin === "คณะสถาปัตยกรรมศาสตร์" ||
        this.state.FacultyDestination === "คณะสถาปัตยกรรมศาสตร์"){
          this.setState({FacultyValue:Arch})
          console.log('คณะสถาปัตยกรรมศาสตร์')
        }
        else if(this.state.FacultyOrigin === "คณะบริหารธุรกิจ" ||
        this.state.FacultyDestination === "คณะบริหารธุรกิจ"){
          this.setState({FacultyValue:Bus})
          console.log('คณะบริหารธุรกิจ')
        }
        else if(this.state.FacultyOrigin === "คณะเศรษฐศาสตร์" ||
        this.state.FacultyDestination === "คณะเศรษฐศาสตร์"){
          this.setState({FacultyValue:Eco})
          console.log('คณะเศรษฐศาสตร์')
        }
        else if(this.state.FacultyOrigin === "คณะศึกษาศาสตร์" ||
        this.state.FacultyDestination === "คณะศึกษาศาสตร์"){
          this.setState({FacultyValue:Edu})
          console.log('คณะศึกษาศาสตร์')
        }
        else if(this.state.FacultyOrigin === "คณะวิศวกรรมศาสตร์" ||
        this.state.FacultyDestination === "คณะวิศวกรรมศาสตร์"){
          this.setState({FacultyValue:Eng})
          console.log('คณะวิศวกรรมศาสตร์')
        }
        else if(this.state.FacultyOrigin === "คณะสิ่งแวดล้อม" ||
        this.state.FacultyDestination === "คณะสิ่งแวดล้อม"){
          this.setState({FacultyValue:Env})
          console.log('คณะสิ่งแวดล้อม')
        }
        else if(this.state.FacultyOrigin === "คณะประมง" ||
        this.state.FacultyDestination === "คณะประมง"){
          this.setState({FacultyValue:Fish})
          console.log('คณะประมง')
        }
        else if(this.state.FacultyOrigin === "คณะวนศาสตร์" ||
        this.state.FacultyDestination === "คณะวนศาสตร์"){
          this.setState({FacultyValue:Forest})
          console.log('คณะวนศาสตร์')
        }
        else if(this.state.FacultyOrigin === "คณะมนุษยศาสตร์" ||
        this.state.FacultyDestination === "คณะมนุษยศาสตร์"){
          this.setState({FacultyValue:Hum})
          console.log('คณะมนุษยศาสตร์')
        }
        else if(this.state.FacultyOrigin === "คณะวิทยาศาสตร์" ||
        this.state.FacultyDestination === "คณะวิทยาศาสตร์"){
          this.setState({FacultyValue:Sci})
          console.log('คณะวิทยาศาสตร์')
        }
        else if(this.state.FacultyOrigin === "คณะสังคมศาสตร์" ||
        this.state.FacultyDestination === "คณะสังคมศาสตร์"){
          this.setState({FacultyValue:Soc})
          console.log('คณะสังคมศาสตร์')
        }
        else if(this.state.FacultyOrigin === "คณะสัตวแพทยศาสตร์" ||
        this.state.FacultyDestination === "คณะสัตวแพทยศาสตร์"){
          this.setState({FacultyValue:Vet})
          console.log('คณะสัตวแพทยศาสตร์')
        }
        else if(this.state.FacultyOrigin === "คณะเทคนิคการสัตวแพทย์" ||
        this.state.FacultyDestination === "คณเทคนิคการสัตวแพทย์"){
          this.setState({FacultyValue:VetTech})
          console.log('คณะเทคนิคการสัตวแพทย์')
        }
        this.setState({change:false}) 
      }
      
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
      setOrigin:true,
      FacultyOrigin:"",
      FacultyDestination:"",
      FacultyValue:null,
      change:false
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
    const faculty=["รวม","คณะเกษตร","คณะบริหารธุรกิจ","คณะประมง","คณะมนุษยศาสตร์","คณะวนศาสตร์"
  ,"คณะวิทยาศาสตร์","คณะวิศวกรรมศาสตร์","คณะศึกษาศาสตร์","คณะเศรษฐศาสตร์","คณะสถาปัตยกรรมศาสตร์",
"คณะสังคมศาสตร์","คณะสัตวแพทยศาสตร์","คณะอุตสาหกรรมเกษตร","คณะเทคนิคการสัตวแพทย์","คณะสิ่งแวดล้อม"]
if(!this.state.change){
  this.setState({change:true})
}
    return (
      <View style={{ flex: 1}}>
        <View style={{position:'absolute',backgroundColor:'#ffffff',zIndex:1}}>
        <Picker
        selectedValue={this.state.FacultyOrigin}
       
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({FacultyOrigin:itemValue})
        }>
        {faculty.map(fac =>(
          <Picker.Item label={fac} value={fac}/>
        ))}
</Picker>
{console.log(this.state.change)}
<Picker
        selectedValue={this.state.FacultyDestination}
       
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({FacultyDestination:itemValue})
        }>
        {faculty.map(fac =>(
          <Picker.Item label={fac} value={fac}/>
        ))}
</Picker>

        <TextInput
    
        onChangeText={TextOrigin => this.setState({TextOrigin})}
        value={this.state.TextOrigin}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1
        }}
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
            <Marker coordinate={coor}>

            </Marker>
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
