import React from 'react';
import globalState from 'mindful';

class Subreddits extends React.Component {
  constructor(props) {
    super(props);
  }

  addSubreddit (e) {
    e.preventDefault();
    var textField = document.getElementById('subredditName');
    var name = textField.value;
    if (name) {
      var existingSubreddits = globalState.get('subreddits') || [];
      existingSubreddits.push(name);
      globalState.retain('subreddits', existingSubreddits);
      textField.value = '';
    }

    globalState.get('getPosts')();
  }

  removeSubreddit (subredditName) {
    var subreddits = globalState.get('subreddits');
    var targetIndex = subreddits.indexOf(subredditName);
    subreddits.splice(targetIndex, 1);
    globalState.retain('subreddits', subreddits);

    globalState.get('getPosts')();
  }

  render () {
    return (
      <div>
        <form onSubmit={this.addSubreddit} >
          <input id='subredditName' type='text' />
          <input type='submit' />
        </form>
        <ul>
          { globalState.get('subreddits').map((name, index) => {
            return (
              <li key={index} onClick={() => { this.removeSubreddit(name); }}>
                { name }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default globalState.subscribe(Subreddits, 'subreddits');





