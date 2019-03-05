import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const styles = StyleSheet.create({

    container: {
        margin: 5,
        borderRadius: 20,
        backgroundColor: '#C4161C',
        width: 'auto',
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },  

    label: {
      marginLeft: 10,
      marginTop: 10,
      marginRight: 10,
      color: "white"
    },

    removeButton: {
      paddingTop: 10,
      marginRight: 5,
      alignItems: 'flex-end'
    }
});

export default class AppliedFilterItem extends Component {
  render() {
    return (
        <View style={styles.container}>
           <Text style={styles.label}>
                {this.props.label}
           </Text>

            <View style={styles.removeButton}> 
                <Ionicons name="ios-close-circle" size={20} color="white" />
            </View>
        </View>
    )
  }
}
