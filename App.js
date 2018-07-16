import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import Repo from './src/components/Repo';
import NewRepoModal from './src/components/NewRepoModal';

export default class App extends Component {
  state = {
    modalVisible: false,
    repos: []
  };

  async componentDidMount() {
    const repos = JSON.parse( await AsyncStorage.getItem('@GitFavoritos:repositories')) || [];
    this.setState({ repos })
  }
  

  addRepository = async (newRepoText) => {
    const repoCall = await fetch(`http://api.github.com/repos/${newRepoText}`);
    const response = await repoCall.json();

    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login
    }

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository
      ]
    });

    await AsyncStorage.setItem('@GitFavoritos:repositories', JSON.stringify(this.state.repos))
  }

  renderRepos = () => {
    return this.state.repos.map(repo => <Repo key={repo.id} data={repo} />)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GitHub Favoritos</Text>
          <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
          {this.renderRepos()}
        </ScrollView>
        <NewRepoModal 
          onCancel={() => this.setState({modalVisible: false})} 
          onAdd={this.addRepository}
          visible={this.state.modalVisible}/>
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
