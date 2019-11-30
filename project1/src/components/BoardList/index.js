import React, { useState, useMemo } from 'react';
import * as PropTypes from 'prop-types';
import { View, Text, Modal } from 'react-native';
import Board from '../Board';
import PopUp from '../PopUp';
import BoardForm from '../BoardForm';
import styles from './styles';

const BoardList = ({ boards, boardOrder }) => {
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
            description={board.description}
            thumbnailUrl={board.thumbnailPhoto}
          />
        );
      })}
    </View>
  )
};

const boardShape = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnailPhoto: PropTypes.string,
}

BoardList.defaultProps = {
  boards: {},
  boardOrder: [],
};

BoardList.propTypes = {
  boards: PropTypes.objectOf(PropTypes.shape(boardShape)),
  boardOrder: PropTypes.arrayOf(PropTypes.string),
};


export default BoardList;
