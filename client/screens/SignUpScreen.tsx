import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField';
import { useNavigation } from '@react-navigation/native';

const SignupScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  const isEmailValid = (email: string) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
  };

  const handleEmailValidation = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!isEmailValid(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSignUp = () => {
    handleEmailValidation();
    console.log(emailError);
    if(emailError != '') navigation.navigate('Apps' as never);
  };

  const handleLoggin = () => {
    navigation.navigate('Logging In' as never);
  };

  return (
    <View style={styles.container}>
      <InputField placeholder="full name" onChangeText={(text) => setName(text)} />
      <InputField placeholder="phone number" onChangeText={(text) => setPhoneNumber(text)} />
      <InputField placeholder="Email" onChangeText={(text) => {setEmail(text); setEmailError('');}} />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <InputField
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleLoggin}>
        <Text style={styles.infoMessage}>Already have an account? Log In</Text>
      </TouchableOpacity>
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  infoMessage: {
    color: '#0095F6',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default SignupScreen;
