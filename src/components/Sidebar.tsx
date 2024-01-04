import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Title, Caption, Drawer, Icon} from 'react-native-paper';

const Sidebar: React.FC = props => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image
              source={{
                uri: 'https://example.com/avatar.jpghttps://e7.pngegg.com/pngimages/328/599/png-clipart-male-avatar-user-profile-profile-heroes-necktie.png',
              }}
              size={50}
            />
            <View style={{marginLeft: 15, flexDirection: 'column'}}>
              <Title style={styles.title}>John Doe</Title>
              <Caption style={styles.caption}>@johndoe</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Home"
            onPress={() => navigation.navigate('Home')}
            icon={({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
          />
          <DrawerItem
            label="Profile"
            onPress={() => navigation.navigate('Profile')}
            icon={({color, size}) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
});

export default Sidebar;
