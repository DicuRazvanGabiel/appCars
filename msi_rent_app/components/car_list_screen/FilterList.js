import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FilterListItem from './FilterListItem';

const styles = StyleSheet.create({

    elementFilter: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 15,
        marginBottom: 10
    }

    
  });

export default class FilterList extends Component {

  state = {

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
    ]

  }

  render() {
    return this.state.filterList.map(
      (filter) => (
          <FilterListItem key={filter.label} filter={filter} toggleModalFilterItem={this.props.toggleModalFilterItem}/>
      )) 
  }
}
