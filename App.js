import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.imgLogo} />
        <Image source={require('./assets/splash.png')} style={styles.imgLogo} />

        <View style={styles.title}>
        </View>
        <View style={styles.hook}>
        </View>
        <Text style={styles.titleH2}>Sélection gourmande</Text>
        <View style={styles.selection}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    flex: 1,
    height: 50,
    backgroundColor: 'white'
  },
  hook: {
    flex: 2,
    height: 50,
    backgroundColor: 'maroon'
  },
  selection: {
    flex: 3,
    height: 50,
    backgroundColor: '#D4A489'
  },
  titleH2: {
    margin: 10,
    fontSize: 20,
    textTransform: 'uppercase'
  },
  imgLogo: {
    width: '80%',
    height: 40,
  }
});
