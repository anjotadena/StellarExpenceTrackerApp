import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

interface HomeScreenProps {
  navigation: any; // Type for navigation prop
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Open Sidebar" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default HomeScreen;
