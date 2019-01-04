import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
    Scene,
    Router,
} from 'react-native-router-flux';

import SurveyScreen from './src/screens/SurveyScreen';
import ResultScreen from './src/screens/ResultScreen';
import SelectScreen from './src/screens/SelectScreen';

export default class App extends React.Component {
  render() {
    return (
      <Router>
          <Scene key="root">
              <Scene key="survey" initial component={SurveyScreen} title="survey" />
              <Scene key="select" component={SelectScreen} title="select" />
              <Scene key="result" component={ResultScreen} title="result" />
          </Scene>
      </Router>
    )
  }
}
