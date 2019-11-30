import React from 'react';
import { View, Text } from 'react-native';
import BoardThumbnail from '../BoardThumbnail';
import styles from './styles';

const Board = ({id, name, thumbnailUrl}) => (
  <View style={styles.board}>
    <BoardThumbnail id={id} url={thumbnailUrl} />
    <Text style={styles.text}>{name}</Text>
  </View>
);

export default Board;
