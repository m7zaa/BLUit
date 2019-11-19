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
  }
  handleAddingNewPostToList(newPost) {
    console.log(newPost);
    console.log(this.newMasterPostList)
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
          <Route exact path='/forum' render={() => <PostList postList={this.state.masterPostList} />} />
          <Route path='/newpost' render={() => <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
