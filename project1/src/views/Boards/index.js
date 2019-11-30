import React, { useRef, useReducer, useState, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { StyleSheet, ScrollView , Text, TouchableHighlight } from 'react-native';
import BoardsContext from './context';
import BoardsToolbar from '../../components/BoardsToolbar';
import BoardList from '../../components/BoardList';
import BoardForm from '../../components/BoardForm';
import PopUp from '../../components/PopUp';
import { reducer, initialState, action } from './reducer';
import styles from './styles';

const Boards = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValueHolder = useRef({});
  const { boards, boardOrder } = state;
  const { navigate, state: navState } = navigation;
  const [modalVisible, setModalVisible] = useState(false);

  const openCreateBoardForm = useCallback(() => {
    setModalVisible(true);
  }, [setModalVisible]);

  const openBoard = useCallback((id) => {
    navigate('Board', { boardId: id, boardName: boards[id].name })
  }, [navigate]);

  const createBoard = useCallback((name, description, thumbnailPhoto) => {
    dispatch({ type: action.CREATE, payload: { name, description, thumbnailPhoto} })
    setModalVisible(false);
  }, [setModalVisible, dispatch]);

  const deleteBoard = useCallback((id) => {
    dispatch({ type: action.DELETE, payload: { id } })
  }, [dispatch]);

  contextValueHolder.current.openCreateBoardForm = openCreateBoardForm;
  contextValueHolder.current.openBoard = openBoard;
  contextValueHolder.current.createBoard = createBoard;
  contextValueHolder.current.deleteBoard = deleteBoard;

  return (
    <BoardsContext.Provider value={contextValueHolder}>
      <ScrollView  style={styles.container}>
        <BoardsToolbar />
        <BoardList boards={boards} boardOrder={boardOrder} />
      </ScrollView >
      <PopUp
        title="New Board"
        active={modalVisible}
        closeFunction={() => setModalVisible(false)}
      >
        <BoardForm />
      </PopUp>
    </BoardsContext.Provider>
  );
}

Boards.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default Boards;
