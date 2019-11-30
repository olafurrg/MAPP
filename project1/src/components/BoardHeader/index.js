import React, { useContext, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import BoardsContext from '../../views/Boards/context';
import styles from './styles';

const image = require('./closeBtn.jpg');

const BoardHeader = ({ title, id }) => {
  const boardsContext = useContext(BoardsContext);

  const handleDeleteLongPress = useCallback(() => {
    boardsContext.current.deleteBoard(id);
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {title}
        </Text>
      </View>
      <View style={styles.close}>
        <TouchableOpacity style={styles.closeButton} onLongPress={handleDeleteLongPress}>
          <Image
            style={styles.image}
            source={image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

BoardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BoardHeader;
