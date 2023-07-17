import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import "./ignoreWarnings";
import { COLORS } from './src/constants/Color';
import AppRoot from './src/router/AppRoot';


SplashScreen.preventAutoHideAsync();

const App = () => {

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

const Inner = () => (
  <App />
)

export default Inner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor
  },
});
