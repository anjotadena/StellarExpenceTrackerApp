import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/Home';
import Sidebar from './components/Sidebard';

const Drawer = createDrawerNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props: any) => <Sidebar {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* Add other screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
