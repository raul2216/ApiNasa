import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import Home from './src/Views/Home/Home';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import {store} from "./redux/store"
export default function App() {
  return (
  <Provider store={store}>
    <SafeAreaView  style={[styles.container, {paddingTop: Platform.OS === "android" && 30}]}>
        <Home/>
      <StatusBar style="auto" />
    </SafeAreaView>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(7, 26, 93, 255)',
    flex: 1,
  },
});
