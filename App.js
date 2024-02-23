import React from 'react';
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from './ThemeContext';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar />
      <View style={{ flex: 1 }}>
        <HomeScreen />
        <SettingsScreen />
      </View>
    </ThemeProvider>
  );
};

export default App;
