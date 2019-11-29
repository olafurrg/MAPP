import React from 'react';
import { Image, Text } from 'react-native';
import styles from './styles';

const BoardThumbnail = ({photo}) => (
  <Image
    style={styles.image}
    resizeMode="cover"
    source={{ uri: photo}}/>

);

export default BoardThumbnail;
