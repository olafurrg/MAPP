import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BoardsContext from '../../views/Boards/context';
import styles from './styles';

const BoardsToolbar = () => {
  const boardsContext = useContext(BoardsContext);

  return(
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={() => boardsContext.current.openCreateBoardForm()}>
        <Text style={styles.buttonText}>+ Add Board</Text>
      </TouchableOpacity>
    </View>
  )
};

export default BoardsToolbar;
