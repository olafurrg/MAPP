import React, { useMemo, useRef, useState, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TouchableHighlight, Dimensions, Animated, Easing, Modal } from 'react-native';
import List from '../List';
import styles from './styles';

const width = Dimensions.get('window').width;

const ListList = ({ data: { lists, listOrder } }) => {
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
    if (activeList.current + 1 < listOrder.length) {
      activeList.current = activeList.current + 1;
      selectList(activeList.current);
    }
  }, [selectList, listOrder]);

  return(
    <View style={styles.container}>
      <Animated.View style={[styles.listList, { transform: moveAnimation.getTranslateTransform() } ]}>
        {listOrder.map((listId, index) => (
          <List
            key={lists[listId].id}
            isEven={index % 2 === 1}
            name={lists[listId].name}
            color={lists[listId].color}
            tasks={lists[listId].tasks}
            taskOrder={lists[listId].taskOrder}
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

const taskShape = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  isFinished: PropTypes.bool,
  listId: PropTypes.number,
};

const listShape = {
  name: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.shape(taskShape),
};

ListList.defaultProps = {
  data: { lists: [], listOrder: [] },
};

ListList.propTypes = {
  data: PropTypes.shape({
    lists: PropTypes.objectOf(PropTypes.shape(listShape)),
    listOrder: PropTypes.arrayOf(PropTypes.string)
  }),
};


export default ListList;
