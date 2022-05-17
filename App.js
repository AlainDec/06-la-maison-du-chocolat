import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
      </View>
      <View style={styles.hook}>
      </View>
      <Text style={styles.titleH2}>Sélection gourmande</Text>
      <View style={styles.selection}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    backgroundColor: 'white'
  },
  hook: {
    flex: 2,
    backgroundColor: 'maroon'
  },
  selection: {
    flex: 3,
    backgroundColor: '#D4A489'
  },
  titleH2: {
    margin: 10,
    fontSize: 20,
    textTransform: 'uppercase'
  }
});
