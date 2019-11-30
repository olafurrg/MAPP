import React, { useState, useMemo } from 'react';
import * as PropTypes from 'prop-types';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import Board from '../Board';
import PopUp from '../PopUp';
import BoardForm from '../BoardForm';
import styles from './styles';

const BoardList = ({ boards, boardOrder }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const boardIds = useMemo(() => Object.keys(boards), [boards]);

  const listStyle = useMemo(() => {
    return [styles.boardList, {opacity: modalVisible ? .5 : 1}];
  }, [modalVisible]);

  return(
    <>
      <View style={styles.boardList}>
        <TouchableHighlight
          onPress={() => {
          setModalVisible(true);
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
      <View style={listStyle}>
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
      <PopUp active={modalVisible} />
    </>
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
