/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
// import HomeScreen from './Pages/Home'

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <Header />
    //       {global.HermesInternal == null ? null : (
    //         <View style={styles.engine}>
    //           <Text style={styles.footer}>Engine: Hermes</Text>
    //         </View>
    //       )}
    //       <View style={styles.body}>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Step One</Text>
    //           <Text style={styles.sectionDescription}>
    //             Edit <Text style={styles.highlight}>App.js</Text> to change this
    //             screen and then come back to see your edits.
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>See Your Changes</Text>
    //           <Text style={styles.sectionDescription}>
    //             <ReloadInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Debug</Text>
    //           <Text style={styles.sectionDescription}>
    //             <DebugInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Learn More</Text>
    //           <Text style={styles.sectionDescription}>
    //             Read the docs to discover what to do next:
    //           </Text>
    //         </View>
    //         <LearnMoreLinks />
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
    //  <HomeScreen ref ={ ref => (this.HomeScreen = ref)}/> 
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

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
// import {createMaterialTopTabNavigator,createMaterialBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import HomeScreen from './Pages/Home';
import Search from './Pages/Direction';
import { ScrollView } from 'react-native-gesture-handler';
import HomeBus from './Pages/HomeBus';
import HomeMotor from './Pages/HomeMotorcycle';
import pinpoint from './image/pinpoint.png'

//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
 
// const TabScreen = createMaterialTopTabNavigator(
//   {
//     ค้นหา:  {
//       screen :HomeScreen ,
//     navigationOptions:{
      
//     }},
//     รถตะลัย:{screen: HomeBus ,},
//     วินมอเตอร์ไซค์:{ screen:HomeMotor,}
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
 
// // making a StackNavigator to export as default
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
        backgroundColor: '#000000',
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
      title: 'รถตะลัย',
      headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }),
  },
});

// const Screen3_StackNavigator = createStackNavigator({
//   //All the screen from the Screen2 will be indexed here
//   Third: {
//     screen: HomeMotor,
//     navigationOptions: ({ navigation }) => ({
//       title: 'วินมอเตอร์ไซค์',
//       headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#000000',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

const TabNavigatorExample = createDrawerNavigator({
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
  // Screen3: {
  //   screen: Screen3_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'วินมอเตอร์ไซค์',
  //   },
  // }
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


export default createAppContainer(TabNavigatorExample);
