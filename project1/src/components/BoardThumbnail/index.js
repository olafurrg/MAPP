import React, { useContext, useCallback } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import BoardsContext from '../../views/Boards/context/';

const BoardThumbnail = ({ id, url }) => {
  const boardsContext = useContext(BoardsContext)

  const handlePress = useCallback(() => {
    boardsContext.current.openBoard(id);
  }, [id]);

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={styles.image}
          source={{uri: url}}
        />
      </TouchableOpacity>
    </View>
  );
}

export default BoardThumbnail;
