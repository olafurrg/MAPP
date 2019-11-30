import React, { useReducer, useMemo } from 'react';
import * as PropTypes from 'prop-types';
import { ScrollView ,Text, View } from 'react-native';
import ListList from '../../components/ListList';
import { reducer, initialState, action } from './reducer';
import styles from './styles';

const Lists = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { boards } = state;
  const boardId = navigation.getParam('boardId');

  const listData =  useMemo(() => boards[boardId], [boards, boardId]);

  return (
    <ScrollView  style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>Lists</Text>
        <Text style={styles.text}>{'boardId: ' + boardId}</Text>
        <Text style={styles.text}>{'Lists: ' + listData.listOrder.length }</Text>
      </View>
      <ListList data={listData}/>
    </ScrollView >
  );
}

Lists.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default Lists;
