// Home.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) before navigating
    const fetchData = async () => {
      // Simulate a delay (e.g., 2000 milliseconds)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Navigate to the main screen (replace 'MainScreen' with your actual main screen)
      navigation.replace('Signup');
    };

    fetchData();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Student Learning App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set your splash screen background color
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Home;
