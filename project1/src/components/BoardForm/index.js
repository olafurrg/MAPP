import React from 'react';
import * as PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import BoardThumbnail from '../BoardThumbnail';
import styles from './styles';

const BoardForm = ({id, name, thumbnailUrl}) => (
  <View style={styles.container}>
    <Text style={styles.text}>The form</Text>
  </View>
);

BoardForm.defaultProps = {
  id: undefined,
  name: undefined,
  thumbnailPhoto: undefined,
};

BoardForm.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnailPhoto: PropTypes.string,
};

export default BoardForm;
