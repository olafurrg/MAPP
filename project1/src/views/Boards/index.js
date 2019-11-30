import React, { useRef, useReducer, useCallback } from 'react';
import { StyleSheet, ScrollView , Text } from 'react-native';
import BoardsContext from './context';
import BoardList from '../../components/BoardList';
import { reducer, initialState, action } from './reducer';
import styles from './styles';

const Boards = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValueHolde = useRef({});
  const { boards } = state;
  const { navigate, state: navState } = navigation;

  const openBoard = useCallback((id) => {
    navigate('Board', { boardId: id, boardName: boards[id].name })
  }, []);

  const deleteBoard = useCallback((id) => {
    alert(id);
    dispatch({ type: action.DELETE, payload: { id } })
  }, [dispatch]);

  contextValueHolde.current.deleteBoard = deleteBoard;
  contextValueHolde.current.openBoard = openBoard;

  return (
    <BoardsContext.Provider value={contextValueHolde}>
      <ScrollView  style={styles.container}>
        <BoardList boards={boards}/>
      </ScrollView >
    </BoardsContext.Provider>
  );
}

export default Boards;
