import React from 'react';
import {Text, View} from 'react-native';
import styles from './home-screen.style';
import {translate} from '../../i18n';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>{translate('appStackScreens.homeScreen')}</Text>
    </View>
  );
};

export default HomeScreen;
