import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router'

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: ''}
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    }).then(() => hashHistory.push('/'))
  }
  render() {
    return (
      <div>
        
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input onChange={event => this.setState({ title: event.target.value})} value={this.state.title}/>
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);