import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Boards from '../views/Boards';

export default createAppContainer(createStackNavigator({
  Boards
}));
