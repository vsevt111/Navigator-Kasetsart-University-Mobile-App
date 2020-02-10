//This is an example of React Native Tab
import React from 'react';
//import react in our code.
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createMaterialTopTabNavigator,
//  createAppContainer,
//} from 'react-navigation';
 
//For React Navigation 4+
import { View, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator,createMaterialBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import HomeScreen from './Pages/Home';
import Search from './Pages/Direction';
import { ScrollView } from 'react-native-gesture-handler';
import HomeBus from './Pages/HomeBus';
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
 
// const TabScreen = createMaterialTopTabNavigator(
//   {
//     Home:  HomeScreen ,
//     Direction: Search ,
//   },
//   {
//     tabBarPosition: 'top',
//     swipeEnabled: true,
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: '#FFFFFF',
//       inactiveTintColor: '#F8F8F8',
//       style: {
//         backgroundColor: '#633689',
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
 
//making a StackNavigator to export as default
// const App = createStackNavigator({
//   TabScreen: {
//     screen: TabScreen,
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#633689',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Kasetsart University Map',
//     },
//   },
// });

// -------------------------------------------------
// Drawer Navigation
class NavigationDrawerStructure extends React.Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
    
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 35, height: 35, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'KUTravel',
      headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        height:60,
        backgroundColor: '#3d3c37',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: HomeBus,
    navigationOptions: ({ navigation }) => ({
      title: 'เส้นทางการเดินรถตะลัย',
      headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3d3c37',
      },
      headerTintColor: '#fff',
    }),
  },
});


const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Options and indexing |||RouteConfigs|||
  Screen1: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Screen2: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'รถตะลัย',
    },
  },
},
//|||DrawerNavigatorConfig|||
  {
    contentComponent: props => <CustomDrawerContentComponent {...props}/>,
    hideStatusBar : false,
 
 
  }
);

const CustomDrawerContentComponent = props => (
 <SafeAreaView style={{flex: 1}}>
   <View style={{ height: 60, backgroundColor: '#3d3c37', alignItems: 'center',justifyContent:'center'}}>
     <Image source={require('./image/logo.png')} style= {{height:35, width: 120, borderRadius: 60}}/>
   </View>
   <ScrollView>
     <DrawerItems {...props}/>
   </ScrollView>
 </SafeAreaView> 
)


export default createAppContainer(DrawerNavigatorExample);