import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './home-screen.style';
import { translate } from '../../i18n';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text style={{ color: 'black' }}>
          {translate('appStackScreens.homeScreen')}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
