import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FilterModalItem extends Component {
  render() {
    return this.state.items.map(
        (item) => (
            <Text key={item}>{item}</Text>
        )) 
  }
}
