import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  FlatList,
  Image,
  ScrollView,
  SectionList,
  StatusBar,
  SafeAreaView,
  // TouchableOpacity,
} from 'react-native';
import IconCard from '../../components/IconCard';
import RecentTransactionList from './RecentTransactionList';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Divider,
  Icon,
  IconButton,
  Menu,
  PaperProvider,
  Text,
} from 'react-native-paper';
import PieChart from 'react-native-pie-chart';

interface HomeScreenProps {
  navigation: any; // Type for navigation prop
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'space-between',
    // flex: 1,
  },
  card: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: 270,
    height: 150,
    marginHorizontal: 10,
    marginBottom: 7,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 14,
    // fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 8,
  },
  cardSubtitle: {
    fontSize: 11,
    marginVertical: 8,
    marginLeft: 8,
  },

  minContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    marginTop: 10,
    // backgroundColor: 'blue',
  },
  scrollContainer: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: 230,
    backgroundColor: '#1F8A4D', // Adjust the color and opacity as needed
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionHeader: {
    backgroundColor: '#f2f2f2',
    padding: 8,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
  },
});

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const navigation = useNavigation();

  const data = [
    {
      title: 'Income Overview',
      subtitle: 'Description for Item 1',
      image: 'https://example.com/item1.jpg', // Replace with your image URL
    },
    {
      title: 'Statistics',
      subtitle: 'Description for Item 2',
      image: 'https://example.com/item2.jpg', // Replace with your image URL
    },
    // Add more items as needed
  ];

  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({item, index}: {item: any; index: number}) => {
    const inputRange = [(index - 1) * 300, index * 300, (index + 1) * 300];
    const widthAndHeight = 70;
    const series = [321, 500];
    const sliceColor = ['#F4B15B', '#e3caa9'];

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [5, 0, 5],
    });

    const handleItemPress = () => {
      console.log('PRESS TITLE');
      // Navigate to the new screen when the item is pressed
      navigation.navigate('IncomeOverview', {itemId: item.id}); // Replace 'YourNewScreen' with your actual screen name
    };

    return (
      <Animated.View style={[styles.card, {transform: [{translateY}]}]}>
        <View>
          <Text
            variant="labelLarge"
            style={styles.cardTitle}
            onPress={handleItemPress}>
            {item.title}

            <Icon size={15} source="trending-up" />
          </Text>
          <Text variant="titleSmall" style={styles.cardSubtitle}>
            {item.subtitle}
          </Text>
        </View>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.45}
          coverFill={'#FFF'}
        />
      </Animated.View>
    );
  };

  const recentTransactions = [
    {id: '1', description: 'Groceries', amount: -50.0},
    {id: '2', description: 'Salary', amount: 2000.0, cashIn: true},
    {id: '3', description: 'Dinner', amount: -30.0},
    {id: '4', description: 'Dinner', amount: -5.0},
    {id: '5', description: 'Dinner', amount: -3.0},
    {id: '6', description: 'Dinner', amount: -10.0},
    {id: '7', description: 'Dinner', amount: -3.4},
    {id: '8', description: 'Dinner', amount: -10.0},
    {id: '9', description: 'Dinner', amount: -8.5},
    {id: '10', description: 'Dinner', amount: -9.8},
    // Add more transactions as needed
  ];

  const data1 = [
    {
      title: 'Last Year',
    },
    {
      title: 'Last Month',
    },
    {
      title: 'Last Week',
    },
  ];

  const renderItemx = ({item}: {item: any}) => (
    <View style={styles.item}>
      <Text>{item.item}</Text>
    </View>
  );

  const renderSectionHeader = ({section: {title}}: {section: any}) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PaperProvider>
        <StatusBar backgroundColor="#27af62" barStyle="light-content" />

        <View style={styles.overlay} />
        <View
          style={{
            padding: 14,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: 'white'}} variant="displaySmall">
              Welcome
            </Text>
            <Text style={{color: 'white'}} variant="bodyMedium">
              John Doe
            </Text>
          </View>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <IconButton
                size={20}
                iconColor="#FFF"
                icon="dots-vertical"
                onPress={openMenu}
              />
            }>
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.title}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          pagingEnabled
        />
        <View style={styles.minContainer}>
          <IconCard icon="transfer" title="Transfer" />
          <IconCard icon="credit-card" title="Payment" />
          <IconCard icon="wallet" title="Wallet" />
          <IconCard icon="chart-timeline" title="Statistics" />
        </View>
        <RecentTransactionList transactions={recentTransactions} />
      </PaperProvider>
    </ScrollView>
  );
};

export default HomeScreen;
