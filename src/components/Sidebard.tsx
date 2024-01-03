import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

interface SidebarProps {
  navigation: any;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  navItemStyle: {
    padding: 10,
    fontSize: 18,
  },
});

const Sidebar: React.FC<SidebarProps> = ({navigation}) => {
  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text style={styles.navItemStyle}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
        <Text style={styles.navItemStyle}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sidebar;
