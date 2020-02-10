import { View, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator,createMaterialBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import React from 'react';
import DisplayBus from './DisplayBus'
import { ScrollView } from 'react-native-gesture-handler';
import HomeScreen from './Home.js';

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
              source={require('../image/drawer.png')}
              style={{ width: 35, height: 35, marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }
  const Bus1_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Bus 1',
        headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          height:60,
          backgroundColor: '#3d3c37',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  const Bus2_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Second: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Bus 2',
        headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          height:60,
          backgroundColor: '#3d3c37',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  const Bus3_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Second: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Bus 3',
        headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          height:60,
          backgroundColor: '#3d3c37',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  const BusDrawer = createDrawerNavigator({
    //Drawer Options and indexing |||RouteConfigs|||
    Screen1: {
      screen: Bus1_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Bus 1',
      },
    },
    Screen2: {
      screen: Bus2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Bus 2',
      },
    },
    Screen3: {
        screen: Bus3_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Bus 3',
        },
    },
  },
  //|||DrawerNavigatorConfig|||
    {
      contentComponent: props => <CustomDrawerContentComponent {...props}/>,
      hideStatusBar : true,
   
    }
  );

  const CustomDrawerContentComponent = props => (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ height: 60, backgroundColor: '#3d3c37', alignItems: 'center',justifyContent:'center'}}>
        <Image source={require('../image/logo.png')} style= {{height:35, width: 120, borderRadius: 60}}/>
      </View> 
      <ScrollView>
        <DrawerItems {...props}/>
      </ScrollView>
     </SafeAreaView> 
   )


export default createAppContainer(BusDrawer);