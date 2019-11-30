import React, { useRef, useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { View, Text, Animated, PanResponder, Dimensions } from 'react-native';
import styles from './styles';

const width = Dimensions.get('window').width;

const List = ({ isEven, name, color, tasks, taskOrder  }) => {
  const [panResponder, setPanResponder] = useState({ panHandlers: {} });
  const [pan] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const [x] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  useEffect(() => {
    let timer = null;
    setPanResponder(PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if(e.nativeEvent.pageX < 35 || e.nativeEvent.pageX > width - 35) {
          console.log(timer === null);
          if (timer === null) {
            timer = setTimeout(() => {
              alert("trigger");
            }, 1000);
          }
        } else if (timer !== null){
          clearTimeout(timer);
          timer = null;
        }
        Animated.event([null,{
            dx: pan.x,
        }])(e, gestureState);
      },
      onPanResponderRelease: (e, gesture) => {
        clearTimeout(timer);
        timer = null;
        Animated.spring(pan,{toValue:{x:0,y:0}}).start();
      },
    }));
  }, []);

  return (
    <Animated.View
      { ...panResponder.panHandlers }
      style={[ styles.list, { transform: pan.getTranslateTransform() }, !isEven ? styles.listOdd : undefined]}
    >
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.name}>
        {pan.x.value}
      </Text>
      <View>
        {taskOrder.map((taskId) => (
          <View key={tasks[taskId].id}>
            <Text>
              {tasks[taskId].name}
            </Text>
          </View>
        ))}
      </View>
    </Animated.View>
  );
}

const taskShape = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  isFinished: PropTypes.bool,
  listId: PropTypes.number,
};

List.defaultProps = {
  isEven: false,
  name: 'List Name',
  color: '#fff',
  tasks: {},
  taskOrder: [],
};

List.propTypes = {
  isEven: PropTypes.bool,
  name: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.shape(taskShape),
  taskOrder: PropTypes.arrayOf(PropTypes.string),
};


export default List;
