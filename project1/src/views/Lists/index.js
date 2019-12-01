import React, { useRef, useState, useCallback, useReducer, useMemo } from 'react';
import * as PropTypes from 'prop-types';
import { ScrollView ,Text, View } from 'react-native';
import ListsContext from './context';
import ListList from '../../components/ListList';
import ListsToolbar from '../../components/ListsToolbar';
import PopUp from '../../components/PopUp';
import ListForm from '../../components/ListForm';
import { reducer, initialState, action } from './reducer';
import styles from './styles';

const Lists = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValueHolder = useRef({});
  const { boards } = state;
  const boardId = navigation.getParam('boardId');
  const [modalVisible, setModalVisible] = useState(false);

  const listData =  useMemo(() => boards[boardId], [boards, boardId]);

  const openCreateListForm = useCallback(() => {
    setModalVisible(true);
  }, [setModalVisible]);

  const closeCreateListForm = useCallback(() => {
    setModalVisible(false);
  }, [setModalVisible]);

  const createList = useCallback((name, color) => {
    dispatch({ type: action.CREATE, payload: { boardId, name, color} })
    setModalVisible(false);
  }, [boardId, setModalVisible, dispatch]);

  const deleteList = useCallback((id) => {
    dispatch({ type: action.DELETE, payload: { id } })
  }, [dispatch]);

  contextValueHolder.current.openCreateListForm = openCreateListForm;
  contextValueHolder.current.createList = createList;
  contextValueHolder.current.deleteList = deleteList;

  return (
    <ListsContext.Provider value={contextValueHolder}>
      <ScrollView  style={styles.container}>
        <ListsToolbar />
        <View style={styles.textView}>
          <Text style={styles.text}>Lists</Text>
          <Text style={styles.text}>{'boardId: ' + boardId}</Text>
          <Text style={styles.text}>{'Lists: ' + listData.listOrder.length }</Text>
        </View>
        <ListList data={listData}/>
      </ScrollView >
      <PopUp
        title="New Board"
        active={modalVisible}
        closeFunction={closeCreateListForm}
      >
        <ListForm />
      </PopUp>
    </ListsContext.Provider>
  );
}

Lists.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default Lists;
