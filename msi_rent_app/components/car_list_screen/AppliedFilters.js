import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView  } from 'react-native'
import {  Container, Content } from 'native-base';
import AppliedFilterslist from "./AppliedFiltersList";
import CarList from './CarList'

const styles = StyleSheet.create({

    container:{
        flexDirection: 'column',
    },
      
    containerText:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 20,
    }, 

    filterAppliedLabel: {
        marginLeft: 15,
        marginTop: 0
    },

    resultsFilters: {
      marginRight: 15,
      marginTop: 0
  },

    filterListStyle: {
        height: 50
        
    }
});

export default class AppliedFilters extends Component {

    state = {
        appliedFiltersList : [
            {
                label: 'Mercedes'
            },
            {
                label: 'Benzina'
            },
            {
                label: 'Automata'
            }
        ]
    }

  render() {
    return (
        <Container style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.filterAppliedLabel}>Filtre Aplicate: {this.state.appliedFiltersList.length}</Text>
                <Text style={styles.resultsFilters}>Rezultate Obtinute: *to be</Text>
            </View>

            <View style={styles.filterListStyle}>
                <ScrollView  horizontal={true} >
                    <AppliedFilterslist  filterList={this.state.appliedFiltersList} />
                </ScrollView>
            </View>
            <CarList />
        </Container>
    )
  }
}
