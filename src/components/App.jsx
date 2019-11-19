import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import Home from './Home';
import Header from './Header';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [],
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
    this.handleUpVoteClick = this.handleUpVoteClick.bind(this);
    this.handleDownVoteClick = this.handleDownVoteClick.bind(this);
  }

  handleUpVoteClick(index) {
    var newMasterPostList = this.state.masterPostList;
    newMasterPostList[index].votes ++;
    this.setState({ masterPostList: newMasterPostList}); 
  }

  handleDownVoteClick(index) {
    console.log(this.state.masterPostList);
    var newMasterPostList = this.state.masterPostList;
    newMasterPostList[index].votes  --;
    this.setState({ masterPostList: newMasterPostList});
  }


  handleAddingNewPostToList(newPost) {
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({ masterPostList: newMasterPostList });
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/forum' render={() => <PostList postList={this.state.masterPostList} voteUp={this.handleUpVoteClick} voteDown={this.handleDownVoteClick}/>} />
          <Route path='/newpost' render={() => <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
