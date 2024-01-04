import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, Title, Button} from 'react-native-paper';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, always navigate to the Home screen
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Login</Title>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.loginButton}>
            Login
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    margin: 16,
    elevation: 4, // Adds a shadow
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  cardActions: {
    justifyContent: 'center',
  },
  loginButton: {
    width: '50%',
    alignSelf: 'center',
  },
});

export default LoginScreen;
