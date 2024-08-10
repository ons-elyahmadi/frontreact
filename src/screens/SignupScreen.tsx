import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const SignupScreen = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    age: '',
  });
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      await axios.post('http://192.168.1.100:5000/signup', formData); // replace with your machine's IP
      navigation.navigate('Login');
    } catch (err) {
      console.error('Signup error:', err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={text => setFormData({ ...formData, firstName: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={text => setFormData({ ...formData, lastName: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={text => setFormData({ ...formData, email: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={text => setFormData({ ...formData, password: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Address"
        value={formData.address}
        onChangeText={text => setFormData({ ...formData, address: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChangeText={text => setFormData({ ...formData, phoneNumber: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={formData.age}
        onChangeText={text => setFormData({ ...formData, age: text })}
        style={styles.input}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default SignupScreen;

