import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './home-screen.style';
import { translate } from '../../i18n';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text>
          {translate('appStackScreens.homeScreen')}
          Text
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
