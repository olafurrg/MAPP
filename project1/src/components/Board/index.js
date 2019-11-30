import React, { useContext, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import BoardThumbnail from '../BoardThumbnail';
import BoardHeader from '../BoardHeader';
import styles from './styles';

const Board = ({id, name, description, thumbnailUrl}) => {
  return (
    <View style={styles.board}>
      <BoardHeader title={name} id={id} />
      <View>
        <Text>
          {description}
        </Text>
      </View>
      <BoardThumbnail id={id} url={thumbnailUrl} />
    </View>
  );
};

Board.defaultProps = {
  id: undefined,
  name: undefined,
  thumbnailPhoto: undefined,
};

Board.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnailPhoto: PropTypes.string,
};


export default Board;
