import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer,  createStackNavigator, createSwitchNavigator} from 'react-navigation';
import CarScreen from './components/CarScreen';
import ProfileScreen from './components/ProfileScreen';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import CarDetails from "./components/CarDetails";
import AuthenticationScreen from './components/AuthenticationScreen'
import AuthLoadingScreen from './components/AuthLoadingScreen'
import StatusBarBackground from './components/car_list_screen/StatusBarBackground'
import CarListScreen from'./components/car_list_screen/CarListScreen'

const CarDetailsStack = createStackNavigator({
  Cars: {
    screen: CarScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle:"Cars"
      }
    }
  },

  CarDetails: {
    screen: CarDetails
  }
});

const TabNavigator = createBottomTabNavigator({
  Cars: { screen: CarDetailsStack,
    navigationOptions: {
      tabBarLabel: 'Cars',
      tabBarIcon : ({tintColor}) => (
        <Ionicons name="ios-car" size={25}/>
      )
    }
  },

  Profile: { screen: ProfileScreen, 
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon : ({tintColor}) => (
        <FontAwesome name="user" size={24}/>
      )
    }
  },
});

const switchNavigator = createSwitchNavigator(
  {
    //Screen for auto log in, needs to read from memory the tocken and redirect to App screen
    AuthLoading: AuthLoadingScreen,
    
    //Main App tabNavigator
    App: TabNavigator,
    
    //Screen for introducing user and pass 
    AuthenticationScreen: CarListScreen
  },
  {
    initialRouteName: 'AuthenticationScreen',
  }
);

const AppContainer = createAppContainer(switchNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}