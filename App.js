import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Navigator from './src/screens/Navigator'

//kitten ui
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Datepicker, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './src/themes/custom-theme.json'; // <-- Import app theme
import { EvaIconsPack } from '@ui-kitten/eva-icons';


const App = () => {

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light}}>
          <Navigator />
      </ApplicationProvider>
    </React.Fragment>

  )
}

export default App;