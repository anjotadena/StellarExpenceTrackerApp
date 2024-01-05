// components/IconCard.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Icon, Title} from 'react-native-paper';

interface IconCardProps {
  icon: string; // Icon name (replace with your icon library or source)
  title: string;
}

const IconCard: React.FC<IconCardProps> = ({icon, title}) => {
  return (
    <View style={styles.cardContainer}>
      {/* Icon */}
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          {/* Replace with your icon component or library */}
          <Icon color="#27af62" size={35} source={icon} />
        </Card.Content>
      </Card>

      {/* Title */}
      <Title style={styles.title}>{title}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 70,
    margin: 8,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: 70,
    elevation: 0,
    borderRadius: 5,
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#3498db', // Replace with your desired icon color
    fontSize: 24, // Adjust the size as needed
  },
  title: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IconCard;
