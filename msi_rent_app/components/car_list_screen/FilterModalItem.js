import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FilterModalItem extends Component {
  render() {
    return  this.props.items.map((items) => (
        <Text key={items}>{items.label}</Text>
    ))
  }
}
