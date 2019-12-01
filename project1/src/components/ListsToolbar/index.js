import React, { useContext, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ListsContext from '../../views/Lists/context';
import styles from './styles';

const ListsToolbar = () => {
  const listsContext = useContext(ListsContext);

  const openForm = useCallback(() => {
    listsContext.current.openCreateListForm();
  }, [])

  return(
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={openForm}>
        <Text style={styles.buttonText}>+ Add List</Text>
      </TouchableOpacity>
    </View>
  )
};

export default ListsToolbar;
