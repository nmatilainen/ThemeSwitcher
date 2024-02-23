import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#ffffff' }]}>
      <View style={styles.content}>
        <Text style={{ color: isDarkMode ? '#ffffff' : '#000000', marginBottom: 20 }}>
          Current Theme: {isDarkMode ? 'Dark' : 'Light'}
        </Text>
        <TouchableOpacity onPress={toggleTheme}>
          <Icon name={isDarkMode ? 'brightness-5' : 'brightness-3'} size={30} color={isDarkMode ? '#ffffff' : '#000000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
