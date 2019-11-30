import React, { useContext, useState, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import BoardThumbnail from '../BoardThumbnail';
import BoardsContext from '../../views/Boards/context';
import styles from './styles';

const BoardForm = () => {
  const boardsContext = useContext(BoardsContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [validImage, setValidImage] = useState(false);

  const handleValidUrl = useCallback(() => {
    setValidImage(true);
  }, [setValidImage]);
  const handleInvalidUrl = useCallback(() => {
    setValidImage(false);
  }, [setValidImage]);

  const handleNameInput = useCallback((text) => {
    setName(text);
  }, [setName]);

  const handleDescriptionInput = useCallback((text) => {
    setDescription(text);
  }, [setName]);

  const handleUrlInput = useCallback((text) => {
    setPhotoUrl(text);
  }, [setPhotoUrl]);

  const handleSubmit = useCallback((text) => {
    if (name !== '', validImage) {
      boardsContext.current.createBoard(name, description, photoUrl)
    }
  }, [name, description, validImage, photoUrl]);

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
          Description: (optional)
        </Text>
        <TextInput
          multiline
          numberOfLines={3}
          dataDetectorTypes="link"
          style={styles.input}
          value={description}
          onChangeText={handleDescriptionInput}
        />
      </View>
      <View style={styles.property}>
        <Text style={styles.propertyText}>
          thumbnail Photo:
        </Text>
        <TextInput
          dataDetectorTypes="link"
          style={styles.input}
          value={photoUrl}
          onChangeText={handleUrlInput}
        />
        <View style={[styles.image, validImage ? { display: 'none'} : undefined ]}>
          <Text style={styles.preview}>
            Preview {photoUrl}
          </Text>
        </View>
        <Image
          style={[styles.image, !validImage ? { display: 'none'} : undefined ]}
          source={{ uri: photoUrl === '' ? '!' : photoUrl }}
          onLoad={handleValidUrl}
          onError={handleInvalidUrl}
        />
      </View>
      <View style={[styles.submit, !validImage ? { opacity: 0.4} : undefined ]}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.submitText}>+ Add Board</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BoardForm;
