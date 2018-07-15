import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native';

import Repo from './src/components/Repo';

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        thumbnail: 'https://avatars0.githubusercontent.com/u/7838303?s=460&v=4',
        title: 'Repositórios do Bognar',
        author: 'bognarjunior'
      },
      {
        id: 2,
        thumbnail: 'https://avatars0.githubusercontent.com/u/7838303?s=460&v=4',
        title: 'Repositórios do Bognar 2',
        author: 'bognarjunior2'
      }
    ]
  };

  renderRepos = () => {
    return this.state.repos.map(repo => <Repo key={repo.id} data={repo} />)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GitHub Favoritos</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
          {this.renderRepos()}
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  repoList: {
    padding: 20,
  },
});
