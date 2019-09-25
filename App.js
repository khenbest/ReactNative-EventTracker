import React from 'react';
import EventList from './EventList'
import EventForm from './EventForm'

import { YellowBox } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated'
])


const AppNavigator = createStackNavigator({
  List: {
    screen: EventList,
    navigationOptions: () => ({
      title: "Your Events",
    }),
  },
  Form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: "Add Events",
    }),
  },
},
  {
    initialRouteName: "List"
  }
);

export default createAppContainer(AppNavigator);



