import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/base';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>We have to be millioners already</Text>
      <Pressable style={styles.button} onPress={() => alert('Money on the floor')}>
        <Text style={{ color: 'white' }}>Press me</Text>
      </Pressable>
      <Text><Button title="בראון גיי"/></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
