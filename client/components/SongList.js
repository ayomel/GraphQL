import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';

class SongList extends Component {
  render() {
    const {loading, songs} = this.props.data;
    if (loading) return null
    return (
      <div>
        {songs.map(song => (
          <div>{song.title}</div>
        ))}
      </div>
    )
  }
}

const query = gql `
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);