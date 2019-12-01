import React, { useRef, useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { View, Text, Animated, PanResponder, Dimensions } from 'react-native';
import styles from './styles';

const Task = ({ id, name, description, isFinished  }) => {
  return (
    <View style={styles.task}>
      <Text style={styles.text}>
        {name}
      </Text>
      <Text style={styles.isFinished}>
        {isFinished ? 'Finished' : 'Not Finished'}
      </Text>
    </View>
  );
};

Task.defaultProps = {
  description: undefined,
  isFinished: false,
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFinished: PropTypes.bool,
};


export default Task;
