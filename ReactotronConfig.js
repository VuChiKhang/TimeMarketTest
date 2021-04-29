import Reactotron from 'reactotron-react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeModules } from 'react-native';
// import { reactotronRedux } from 'reactotron-redux'



const scriptURL = NativeModules.SourceCode.scriptURL;
    const scriptHostname = scriptURL.split('://')[1].split(':')[0];

const reactotron = Reactotron
//   .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({ host: scriptHostname }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
//   .use(reactotronRedux())
  .connect() // let's connect!
   //  <- here i am!
  
  export default reactotron