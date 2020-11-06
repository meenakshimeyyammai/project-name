import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase';
import { Firebase } from './config/firebase.js';
import AuthNavigator from './screens/AuthNavigator';
import HomeScreen from './screens/HomeScreen.js';
import ProfileScreen from './screens/ProfileScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: HomeScreen,
      Profile: { screen: ProfileScreen }
    },
    {
      initialRouteName: 'Auth'
    }
  )
);