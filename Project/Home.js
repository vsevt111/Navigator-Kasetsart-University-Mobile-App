import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Friends from './profile';
import { createAppContainer } from 'react-navigation';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>We have no friends!</Text>
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
      </View>
    );
  }
}

// const RootStack = createStackNavigator(
//   {
//     Home: Friends,
//   }
//   );

// const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });