import React, { useContext, useState, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { ColorPicker } from 'react-native-color-picker';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import ListsContext from '../../views/Lists/context';
import styles from './styles';

const ListFoprm = () => {
  const listsContext = useContext(ListsContext);
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000');

  const handleNameInput = useCallback((text) => {
    setName(text);
  }, [setName]);

  const handleColorInput = useCallback((text) => {
    setColor(color);
  }, [setColor]);

  const handleSubmit = useCallback((text) => {
    if (name.length > 0) {
      listsContext.current.createList(name, color)
    }
  }, [name, color]);

  return (
    <View style={styles.container}>
      <View style={styles.property}>
        <Text style={styles.propertyText}>
          Name:
        </Text>
        <TextInput
          dataDetectorTypes="link"
          style={styles.input}
          value={name}
          onChangeText={handleNameInput}
        />
      </View>
      <View style={styles.property}>
        <Text style={styles.propertyText}>
          Name:
        </Text>
        <View style={[styles.colorPreview, { backgroundColor: color }]} />
        <ColorPicker
          onColorChange={handleColorInput}
        />
      </View>
      <View style={[styles.submit, name.length < 1 ? { opacity: 0.4} : undefined ]}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.submitText}>+ Add List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ListFoprm;
