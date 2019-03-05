import React, { Component } from 'react'
import AppliedFilterItem from './AppliedFilterItem'

export default class AppliedFiltersList extends Component {
  render() {
    return this.props.filterList.map(
            (filter) => (
                <AppliedFilterItem key={filter.label} label={filter.label}/>
            )
        ); 
  }
}
