import React, { Component } from 'react'
import { graphql } from 'react-apollo';


import getSong from '../queries/getSong';


class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) {
      return <div>Loading</div>
    }
    return (
      <div>{song.title}</div>
    )
  }
}

export default graphql(getSong, {
  options: (props) => { return {variables: { id: props.params.id }}}
})(SongDetail);