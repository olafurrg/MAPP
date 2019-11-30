import React from 'react';
import * as PropTypes from 'prop-types';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import PopUpHeader from '../PopUpHeader';

const PopUp = ({ title, active, closeFunction, children }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={active}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}>
      <View style={styles.backdrop}>
        <View style={styles.content}>
          <PopUpHeader
            title={title}
            closeFunction={closeFunction}
          />
          {children}
        </View>
      </View>
  </Modal>
);

PopUp.defaultProps = {
  title: 'PopUp',
  active: false,
};

PopUp.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  closeFunction: PropTypes.func.isRequired,
};

export default PopUp;
