import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({

    elementFilter: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 15,
        marginBottom: 10
    },

    textItem: {
        fontSize: 20,
    }
});

export default class FilterListItem extends Component {
  render() {
    return (
      <View>
        <View style={styles.elementFilter}>
            <TouchableOpacity onPress={() => this.props.toggleModalFilterItem()}>
                <Text style={styles.textItem}> > {this.props.filter.label} </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
