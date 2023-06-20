import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRoot from './src/router/AppRoot';
import Constants from 'expo-constants';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from './src/constants/Color';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const HIGHT = Constants.statusBarHeight

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(AntDesign.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={[styles.container, { paddingTop: HIGHT }]} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <AppRoot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor
  },
});
