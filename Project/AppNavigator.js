import { createStackNavigator } from 'react-navigation-stack';
import App from './App';
import profile from './profile';
import {createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
    App: { screen: App},
    profile:{ screen: profile},
});

const AppNav = createAppContainer(MainNavigator);
export default AppNav;