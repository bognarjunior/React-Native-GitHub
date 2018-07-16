import React, { Component } from 'react';
import { 
  View,
  Text,
  TextInput, 
  Modal, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

export default class NewRepoModal extends Component{
  state = {
    newRepoText: ''
  }

  render() {
    return (
      <Modal 
        animationType="fade" 
        transparent={true} 
        visible={this.props.visible}
        onRequestClose={()=>{}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxTitle}> Adicionar repositório </Text>
            <TextInput
              autoCapitalize="none"
              autoFocus
              style={styles.boxInput}
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              placeholder="organização/repositório"
              value={this.state.newRepoText}
              onChangeText={newRepoText => this.setState({ newRepoText })}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={this.props.onCancel}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={() => this.props.onAdd(this.state.newRepoText)}
              >
                <Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    width: 280,
  },

  boxTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  boxInput: {
    alignSelf: 'stretch',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    borderRadius: 3,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    height: 40,
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },

  cancelButton: {
    backgroundColor: '#E25F5F',
    marginRight: 5,
  },

  submitButton: {
    backgroundColor: '#70BD85',
    marginLeft: 5,
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 12,
  }

});