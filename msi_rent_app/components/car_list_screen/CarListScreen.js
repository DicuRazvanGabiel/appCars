import React, { Component } from 'react';
import { Container } from 'native-base';
import { StyleSheet, View, TouchableOpacity, Text, Icon } from 'react-native';
import StatusBarBackground from './StatusBarBackground';
import OptionsHeader from './OptionsHeader';
import AppliedFilters from './AppliedFilters';
import Modal from "react-native-modal";
import FilterList from "./FilterList"
import { AntDesign } from '@expo/vector-icons';
import FilterModalItem from './FilterModalItem';

const styles = StyleSheet.create({

  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1, 
    borderBottomColor: 'black',
    paddingBottom: 15,
    marginBottom: 10
  },
  
});

export default class CarListScreen extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    isModalFilterListVisible: false,
    isModalFilterItemVisible: false,
    filterList: [
      {
        label: 'Brand',
        child: [
          'BWM',
          'Mercedes'
        ]
      }, {
        label: 'Combustibil',
        child: [
          'BWM',
          'Mercedes'
        ]
      }, {
        label: 'Volum',
        child: [
          'BWM',
          'Mercedes'
        ]
      }, {
        label: 'Numar de locuri',
        child: [
          'BWM',
          'Mercedes'
        ]
      }, {
        label: 'Cutie de viteze',
        child: [
          'BWM',
          'Mercedes'
        ]
      }, {
        label: 'Pachet',
        child: [
          'BWM',
          'Mercedes'
        ]
      }
    ],

    appliedFiltersList: [
      {
          label: 'Mercedes'
      },
      {
          label: 'Benzina'
      },
      {
          label: 'Automata'
      }
    ],

    carList: [
      { pachet: "GREEN", title: "Mercedes cls", url: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-mercedes-benz-cls450-sedan-grey-richard-berry-1200x800-%283%29.JPG", content: "Lorem ipsum dolor sit amet" },
      { pachet: "GREEN", title: "Mercedes cls", url: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-mercedes-benz-cls450-sedan-grey-richard-berry-1200x800-%283%29.JPG", content: "Lorem ipsum dolor sit amet" },
      { pachet: "GREEN", title: "Mercedes cls", url: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-mercedes-benz-cls450-sedan-grey-richard-berry-1200x800-%283%29.JPG", content: "Lorem ipsum dolor sit amet" },
      { pachet: "GREEN", title: "Mercedes cls", url: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-mercedes-benz-cls450-sedan-grey-richard-berry-1200x800-%283%29.JPG", content: "Lorem ipsum dolor sit amet" },
      { pachet: "GREEN", title: "Mercedes cls", url: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-mercedes-benz-cls450-sedan-grey-richard-berry-1200x800-%283%29.JPG", content: "Lorem ipsum dolor sit amet" },
      { pachet: "GREEN", title: "Mercedes cls", url: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-mercedes-benz-cls450-sedan-grey-richard-berry-1200x800-%283%29.JPG", content: "Lorem ipsum dolor sit amet" },
      { pachet: "GREEN", title: "Mercedes cls", url: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-mercedes-benz-cls450-sedan-grey-richard-berry-1200x800-%283%29.JPG", content: "Lorem ipsum dolor sit amet" },
      { pachet: "GREEN", title: "Mercedes cls", url: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-mercedes-benz-cls450-sedan-grey-richard-berry-1200x800-%283%29.JPG", content: "Lorem ipsum dolor sit amet" },
      { pachet: "GREEN", title: "Mercedes cls", url: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-mercedes-benz-cls450-sedan-grey-richard-berry-1200x800-%283%29.JPG", content: "Lorem ipsum dolor sit amet" },
      { pachet: "GREEN", title: "Mercedes cls", url: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-mercedes-benz-cls450-sedan-grey-richard-berry-1200x800-%283%29.JPG", content: "Lorem ipsum dolor sit amet" },
      { pachet: "GREEN", title: "Mercedes cls", url: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-mercedes-benz-cls450-sedan-grey-richard-berry-1200x800-%283%29.JPG", content: "Lorem ipsum dolor sit amet" },
    ]
  };

  _toggleModalFilterList = () => {
    this.setState({ isModalFilterListVisible: !this.state.isModalFilterListVisible });
  }

  _onPressProfileButton(){
    console.log("profile");
  }

  _renderModalFilterListContent= () => (
    <View style={{ flex: 1, backgroundColor: "white" }}>

      <View style={styles.headerModal} >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={this._toggleModalFilterList}>
            <AntDesign name="closecircleo" size={40} style={{marginLeft: 10, marginTop: 10}} color="black" />
          </TouchableOpacity>
          <Text style={{fontSize: 30, marginLeft: 15, marginTop: 10}}>Aplica Filtre</Text>
        </View>
        <View style={{padding: 12, borderWidth: 1, borderColor: '#C4161C', borderRadius: 20, marginTop: 5, marginRight: 10}}>
          <Text style={{color: "#C4161C"}}>Sterge Filtre</Text>
        </View>
      </View>

      <FilterList toggleModalFilterItem={this._toggleModalFilterItem} filterList={this.state.filterList}/>

    </View> 
  );

  _toggleModalFilterItem = () => {
    this.setState({ isModalFilterItemVisible: !this.state.isModalFilterItemVisible });
  }

  _renderModalFilterItemContent= () => (
    <View style={{ flex: 1, backgroundColor: "white"}}>
      <TouchableOpacity onPress={this._toggleModalFilterItem}>
        <AntDesign name="closecircleo" size={40} style={{marginLeft: 10, marginTop: 10}} color="black" />
      </TouchableOpacity>

      <FilterModalItem items={this.state.filterList}/>
      
    </View>
  );

  render() {
    return (
      <Container>
        <StatusBarBackground />
        <OptionsHeader toggleModal={this._toggleModalFilterList} navigation={this.props.navigation}/>
        <AppliedFilters appliedFiltersList={this.state.appliedFiltersList} carList={this.state.carList}/>
        <Modal isVisible={this.state.isModalFilterListVisible}>
          {this._renderModalFilterListContent()}
        </Modal>

        <Modal isVisible={this.state.isModalFilterItemVisible}>
          {this._renderModalFilterItemContent()}
        </Modal>

      </Container>
    )
  }
}