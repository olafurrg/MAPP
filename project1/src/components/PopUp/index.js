import React from 'react';
import * as PropTypes from 'prop-types';
import { View, Text, Modal } from 'react-native';
import styles from './styles';

const PopUp = ({active}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={active}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}>
      <View style={styles.backdrop}>
        <Text>PopUp</Text>
      </View>
  </Modal>
);

PopUp.defaultProps = {
  active: false,
};

PopUp.propTypes = {
  active: PropTypes.bool,
};

export default PopUp;
