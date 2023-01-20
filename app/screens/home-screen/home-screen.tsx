import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './home-screen.style';
import { translate } from '../../i18n';
import { useStore } from '../../models/root-store/root-store';

const HomeScreen = () => {
  const { userStore } = useStore();

  useEffect(() => {
    userStore.setName('Umang');
  }, [userStore]);

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text style={styles.text}>
          {translate('appStackScreens.homeScreen')}
        </Text>
        <Text style={styles.text}>{userStore.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
