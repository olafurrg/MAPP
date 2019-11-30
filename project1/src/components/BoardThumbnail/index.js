import React, { useContext, useCallback } from 'react';
import { Image, View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import BoardsContext from '../../views/Boards/context/';

const BoardThumbnail = ({ id, url }) => {
  const boardsContext = useContext(BoardsContext)

  const handlePress = useCallback(() => {
    boardsContext.current.openBoard(id);
  }, [id]);

  return (
    <View>
      <TouchableHighlight onPress={handlePress}>
        <Image
          style={styles.image}
          source={{uri: url}}
        />
      </TouchableHighlight>
    </View>
  );
}

export default BoardThumbnail;
