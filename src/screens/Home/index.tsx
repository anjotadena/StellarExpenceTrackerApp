import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import IconCard from '../../components/IconCard';
import RecentTransactionList from './RecentTransactionList';

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
    width: 300,
    height: 200,
    marginHorizontal: 10,
    marginBottom: 7,
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 8,
  },
  cardSubtitle: {
    fontSize: 14,
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
});

const HomeScreen: React.FC<HomeScreenProps> = () => {
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

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [5, 0, 5],
    });

    return (
      <Animated.View style={[styles.card, {transform: [{translateY}]}]}>
        <Image source={{uri: item.image}} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      </Animated.View>
    );
  };

  const recentTransactions = [
    {id: '1', description: 'Groceries', amount: -50.0},
    {id: '2', description: 'Salary', amount: 2000.0},
    {id: '3', description: 'Dinner', amount: -30.0},
    {id: '4', description: 'Dinner', amount: -30.0},
    {id: '5', description: 'Dinner', amount: -30.0},
    {id: '6', description: 'Dinner', amount: -30.0},
    {id: '7', description: 'Dinner', amount: -30.0},
    {id: '8', description: 'Dinner', amount: -30.0},
    {id: '9', description: 'Dinner', amount: -30.0},
    {id: '10', description: 'Dinner', amount: -30.0},
    // Add more transactions as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        <IconCard icon="🚀" title="Rocket" />
        <IconCard icon="💳" title="Credit Card" />
        <IconCard icon="💰" title="Money Bag" />
        <IconCard icon="📊" title="Charts" />
      </View>
      <RecentTransactionList transactions={recentTransactions} />
    </ScrollView>
  );
};

export default HomeScreen;
