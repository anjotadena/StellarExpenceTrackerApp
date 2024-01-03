import {useNavigation} from '@react-navigation/native';
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
  },
});

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Open Sidebar"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default HomeScreen;
