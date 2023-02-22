import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { translate } from '../../i18n';
import { useStore } from '../../models/root-store/root-store';
import styles from './home-screen.style';

const HomeScreen = () => {
  const { userStore } = useStore();

  useEffect(() => {
    userStore.setName('Umang');

    setTimeout(() => {
      userStore.getName();
    }, 2000);
  }, [userStore]);

  // useEffect(() => {
  //   console.log(
  //     '🚀 ~ file: home-screen.tsx:21 ~ useEffect ~ userStore.status',
  //     userStore.status,
  //   );
  // }, [userStore.status]);

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
