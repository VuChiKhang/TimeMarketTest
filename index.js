/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if(__DEV__) {
    console.log('connect ------- Reactotron Configured')
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
  }else{
    console.log('not ------- Reactotron Configured')
  }

AppRegistry.registerComponent(appName, () => App);
