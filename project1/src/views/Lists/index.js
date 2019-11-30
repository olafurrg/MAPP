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

  const lists =  useMemo(() => boards[boardId], [boards, boardId]);
  const listIds = useMemo(() => Object.keys(lists), [lists]);

  return (
    <ScrollView  style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>Lists</Text>
        <Text style={styles.text}>{'boardId: ' + boardId}</Text>
        <Text style={styles.text}>{'Lists: ' + listIds.length }</Text>
        <ListList lists={lists}/>
      </View>
    </ScrollView >
  );
}

Lists.defaultProps = {
  boardId: undefined,
};

Lists.propTypes = {
  boardId: PropTypes.number,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default Lists;
