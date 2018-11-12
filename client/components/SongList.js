import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Link } from 'react-router'

class SongList extends Component {
  render() {
    const {loading, songs} = this.props.data;
    if (loading) return null
    return (
      <div>
        <ul className="collection">
          {songs.map(song => (
            <li className="collection-item" key={song.id}>{song.title}</li>
          ))}
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right"></Link>
      </div>
    ) 
  }
}

const query = gql `
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);