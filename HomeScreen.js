import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const HomeScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#ffffff' }]}>
      <Text style={{ color: isDarkMode ? '#ffffff' : '#000000', marginBottom: 20 }}>
      </Text>
      <View style={styles.buttonContainer}>
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
  buttonContainer: {
    marginTop: 20, // Adjust the margin as needed
  },
});

export default HomeScreen;
