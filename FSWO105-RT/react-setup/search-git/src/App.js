import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onHandleChange = (e) => {
    let {dispatch} = this.props;
    dispatch({type: 'UPDATE_USERNAME', username: e.target.value})
  }

  onUserSearch = () => {
    let {dispatch} = this.props;
    let {username} = this.props;
    fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      return response.json()
    })
    .then(res => {
      dispatch({type: 'UPDATE_USERPROFILE', userprofile: res})
    })
  }

  onRepoFetch = () => {
    let {dispatch} = this.props;
    let {repos_url} = this.props.userprofile;

    fetch(repos_url)
      .then(res => {
        return res.json()
      })
      .then(res =>{
        dispatch({type: 'UPDATE_REPOS', repos: res})
      })
  }

  render() {
    let{userprofile} = this.props;
    let repos = this.props.repos.map((repo, i) => {
      return <ul key={i}> {repo.name}</ul>
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={userprofile.avatar_url} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my git repo retriever</h1>
          <h3 className="App-sub-title">Type in your git user name in the input field</h3>
        </header>
        <h1>{this.props.username}</h1>
        <input type="text" 
          onChange={this.onHandleChange}
          value={this.props.user} />
        <button onClick={this.onUserSearch}>Search</button>
        <hr/>
        <h3>{userprofile.login}</h3>
        <button onClick={this.onRepoFetch}>Fetch Repos</button>
        {repos}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    userprofile: state.userprofile,
    repos: state.repos
  }
}

export default connect(mapStateToProps)(App);
