import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Platform
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GitHub Favoritos</Text>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
          <View style={styles.repo}/>
          <View style={styles.repo}/>
          <View style={styles.repo}/>
          <View style={styles.repo}/>
          <View style={styles.repo}/>
          <View style={styles.repo}/>
          <View style={styles.repo}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    height: (Platform.OS === 'ios') ? 90 : 70,
    paddingTop: (Platform.OS === 'ios') ? 40 : 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  repoList: {
    padding: 20,
  },
  repo:{
    padding: 20,
    backgroundColor: '#FFF',
    height: 120,
    borderRadius: 5,
    marginBottom: 20,
  }
});
