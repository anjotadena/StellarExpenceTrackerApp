import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Icon, List, Text, Title} from 'react-native-paper';

interface Transaction {
  id: string;
  description: string;
  amount: number;
}

interface RecentTransactionListProps {
  transactions: Transaction[];
}

const RecentTransactionList: React.FC<RecentTransactionListProps> = ({
  transactions,
}) => {
  const renderTransactionItem = (item: Transaction) => (
    <List.Item
      key={item.id}
      title={item.description}
      description={'2022-01-01'}
      style={styles.transactionItem}
      left={() => <List.Icon icon="arrow-down" />}
      right={() => (
        <Text variant="titleMedium">{`$${item.amount.toFixed(2)}`}</Text>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Recent Transactions</Title>
      {transactions.map(renderTransactionItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  transactionItem: {
    flexDirection: 'column', // Set content direction to column
    alignItems: 'flex-start', // Align items to the start of the container
  },
});

export default RecentTransactionList;
