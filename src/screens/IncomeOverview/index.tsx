import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, IconButton, IconButtonm, Text} from 'react-native-paper';

const incomeData = [
  {id: '1', category: 'Salary', amount: 3000.0},
  {id: '2', category: 'Freelance', amount: 500.0},
  {id: '3', category: 'Investments', amount: 200.0},
  // Add more income data as needed
];

const IncomeOverviewScreen: React.FC<any> = () => {
  const navigation = useNavigation();

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity onPress={() => handleIncomeDetailPress(item)}>
      <View style={styles.incomeItem}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.amount}>{`$${item.amount.toFixed(2)}`}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleIncomeDetailPress = (incomeItem: any) => {
    // Navigate to the income detail screen or perform other actions
    // You can pass data to the next screen using navigation.navigate('IncomeDetail', { incomeItem });
    // Replace 'IncomeDetail' with the actual screen name
  };

  return (
    <View style={styles.container}>
      <IconButton
        icon="keyboard-backspace"
        size={20}
        onPress={() => navigation.goBack()}
      />
      <Text variant="headlineMedium" style={styles.title}>
        Income Overview
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Button textColor="black" onPress={() => console.log('Pressed')}>
          Last Year
        </Button>
        <Button textColor="gray" onPress={() => console.log('Pressed')}>
          Last Month
        </Button>
        <Button textColor="gray" onPress={() => console.log('Pressed')}>
          Last Week
        </Button>
      </View>
      <View
        style={{
          backgroundColor: '#1F8A4D',
          padding: 30,
          height: 120,
          borderRadius: 7,
        }}>
        <View>
          <Text style={{color: 'white'}} variant="headlineSmall">
            + $4500
          </Text>
          <Text style={{color: '#ebebeb'}} variant="labelLarge">
            Something here...
          </Text>
        </View>
        {/* TODO */}
      </View>
      <FlatList
        data={incomeData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  listContainer: {
    flexGrow: 1,
  },
  incomeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  category: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    fontSize: 16,
    color: 'blue',
  },
});

export default IncomeOverviewScreen;
