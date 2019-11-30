import React from 'react';
import * as PropTypes from 'prop-types';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const image = require('./closeBtn.jpg');

const PopUpHeader = ({ title, closeFunction }) => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>
        {title}
      </Text>
    </View>
    <View style={styles.close}>
      <TouchableOpacity style={styles.closeButton} onPress={closeFunction}>
        <Image
          style={styles.image}
          source={image}
        />
      </TouchableOpacity>
    </View>
  </View>
);

PopUpHeader.propTypes = {
  title: PropTypes.string.isRequired,
  closeFunction: PropTypes.func.isRequired,
};

export default PopUpHeader;
