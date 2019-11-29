import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import BoardThumbnail from '../BoardThumbnail';

const BoardList = ({ images }) => (
  <View style={{ flex: 1 }}>
    <BoardThumbnail photo={images[0].thumbnailPhoto}/>
    <BoardThumbnail photo={images[1].thumbnailPhoto}/>
    <BoardThumbnail photo={images[2].thumbnailPhoto}/>
  </View>
);

export default BoardList;
