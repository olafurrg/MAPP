import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Boards from '../views/Boards';
import Lists from '../views/Lists';

export default createAppContainer(createStackNavigator(
  {
    Boards: {
      screen: Boards,
      navigationOptions: ({navigation}) => ({
        title: 'Boards',
      }),
    },
    Board: {
      screen: Lists,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam('boardName'),
      }),
    },
  }, {
    mode: 'card',
    defaultNavigationOptions: {
      headerTitleStyle: { color: '#9a9a9a' },
      headerStyle: {
        backgroundColor: '#0c0c0c',
        borderBottomWidth: 3,
        borderColor: '#9a9a9a',
      },
      headerTintColor: '#9a9a9a',
    },
  }
));
