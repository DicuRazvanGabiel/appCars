import React, { Component } from 'react';
import { Container } from 'native-base';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import StatusBarBackground from './StatusBarBackground';
import OptionsHeader from './OptionsHeader';
import AppliedFilters from './AppliedFilters';
import Modal from "react-native-modal";
import Ionicons from '@expo/vector-icons';

const styles = StyleSheet.create({

  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1, 
    borderBottomColor: 'black',
    paddingBottom: 15
  }
  
});

export default class CarListScreen extends Component {

  state = {
    isModalVisible: false,
  };

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  _onPressProfileButton(){
    console.log("profile");
  }

  render() {
    return (
      <Container>
        <StatusBarBackground />
        <OptionsHeader toggleModal={this._toggleModal}/>
        <AppliedFilters />

        <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 1, backgroundColor: "white" }}>
              <View style={styles.headerModal} >
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TouchableOpacity onPress={this._toggleModal}>
                    <Text style={{fontSize: 30, marginLeft: 10}}>X</Text>
                  </TouchableOpacity>
                  <Text style={{fontSize: 30, marginLeft: 15}}>Aplica Filtre</Text>
                </View>
                <View style={{padding: 10, borderWidth: 1, borderColor: '#C4161C', borderRadius: 20, marginTop: 5, marginRight: 10}}>
                  <Text style={{color: "#C4161C"}}>Sterge Filtre</Text>
                </View>
              </View>
              
            </View>
        </Modal>
      </Container>
    )
  }
}