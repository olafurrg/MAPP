import React, { useMemo } from 'react';
import { View } from 'react-native';
import Board from '../Board';
import styles from './styles';

const BoardList = ({ boards }) => {
  const boardIds = useMemo(() => Object.keys(boards), [boards]);
  return(
    <View style={styles.boardList}>
      {boardIds.map((id, index) => {
        const board = boards[id];
        return (
          <Board
            key={board.name + board.index}
            id={board.id}
            name={board.name}
            thumbnailUrl={board.thumbnailPhoto}
          />
        );
      })}
    </View>
  )
};

export default BoardList;
