import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import Sidebar from './components/Sidebar';
import IncomeOverviewScreen from './screens/IncomeOverview';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#3498db', // Set the background color as needed
          },
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main">
          {() => (
            <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
              <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
              />

              {/* Add other screens here */}
            </Drawer.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="IncomeOverview"
          options={{headerShown: false}}
          component={IncomeOverviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
