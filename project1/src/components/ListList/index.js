import React, { useMemo, useRef, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Animated, Easing } from 'react-native';
import styles from './styles';

const width = Dimensions.get('window').width;

const ListList = ({ lists }) => {
  const listsId = useMemo(() => Object.keys(lists), [lists]);
  const activeList = useRef(0);
  const [moveAnimation] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const selectList = useCallback((index) => {
    Animated.spring(moveAnimation, {
      toValue: { x: -(width * index), y: 0 },
    }).start()
  }, [moveAnimation]);

  const selectLeft = useCallback(() => {
    activeList.current = activeList.current > 0 ? activeList.current - 1 : 0;
    selectList(activeList.current);
  }, [selectList]);

  const selectRight = useCallback(() => {
    activeList.current = activeList.current + 1 < listsId.length
      ? activeList.current + 1 : listsId.length - 1;
    selectList(activeList.current);
  }, [selectList, listsId]);

  return(
    <View style={styles.container}>
      <Animated.View style={[styles.listList, moveAnimation.getLayout()]}>
        {listsId.map((listId, index) => (
          <View key={lists[listId].id} style={index % 2 === 1 ? styles.list : styles.listOdd}>
            <Text style={styles.name}>
              {lists[listId].name}
            </Text>
          </View>
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
