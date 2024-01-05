import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Icon, List, Text, Title} from 'react-native-paper';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  cashIn?: boolean;
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
      title={() => <Text style={{ color: '#1e1e1e' }} variant='labelLarge'>{item.description}</Text>}
      description={() => <Text style={{ color: '#757575' }} variant='labelSmall'>2021-01-01</Text>}
      style={styles.transactionItem}
      left={() => (
        <View
          style={{
            padding: 5,
            backgroundColor: !item?.cashIn ? '#f5dcb3' : '#d7e9d8',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <List.Icon
            color={item.cashIn ? '#065019' : '#FFA312'}
            icon={item.cashIn ? 'trending-up' : 'trending-down'}
          />
        </View>
      )}
      right={() => (
        <Text variant="titleSmall">{`$${item.amount.toFixed(2)}`}</Text>
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
