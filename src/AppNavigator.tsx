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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomSidebar = (props: any) => {
  const {state, ...rest} = props;
  const newState = {
    ...state,
    routes: state.routes.filter((item: any) => item.name !== 'Login'),
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home">
          {() => (
            <Drawer.Navigator
              drawerContent={props => <CustomSidebar {...props} />}>
              <Drawer.Screen name="Home" component={HomeScreen} />
              {/* Add other screens here */}
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
