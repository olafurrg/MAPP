import React, { useMemo, useRef, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Animated, Easing } from 'react-native';
import List from '../List';
import styles from './styles';

const width = Dimensions.get('window').width;

const ListList = ({ lists }) => {
  const activeList = useRef(0);
  const [moveAnimation] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const selectList = useCallback((index) => {
    Animated.timing(moveAnimation, {
      toValue: { x: -((width - 70) * index), y: 0 },
      duration: 650,
    }).start();
  }, [moveAnimation]);

  const selectLeft = useCallback(() => {
    if (activeList.current > 0) {
      activeList.current = activeList.current - 1;
      selectList(activeList.current);
    }
  }, [selectList]);

  const selectRight = useCallback(() => {
    if (activeList.current + 1 < lists.listOrder.length) {
      activeList.current = activeList.current + 1;
      selectList(activeList.current);
    }
  }, [selectList, lists.listOrder]);

  return(
    <View style={styles.container}>
      <Animated.View style={[styles.listList, { transform: moveAnimation.getTranslateTransform() } ]}>
        {lists.listOrder.map((listId, index) => (
          <List
            key={lists.lists[listId].id}
            isEven={index % 2 === 1}
            name={lists.lists[listId].name}
            color={lists.lists[listId].color}
            tasks={lists.lists[listId].tasks}
            taskOrder={lists.lists[listId].taskOrder}
          />
        ))}
      </Animated.View>
      <TouchableOpacity
         style={styles.prevList}
         onPress={selectLeft}
      >
        <Text>Yo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nextList}
        onPress={selectRight}
      >
        <Text>Yo</Text>
      </TouchableOpacity>
    </View>
  )
};

export default ListList;
