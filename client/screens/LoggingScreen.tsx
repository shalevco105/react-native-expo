import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Apps' as never);
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp' as never);
  };

  return (
    <View style={styles.container}>
      <InputField placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <InputField
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.infoMessage}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  infoMessage: {
    color:  '#0095F6',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default LoginScreen;
