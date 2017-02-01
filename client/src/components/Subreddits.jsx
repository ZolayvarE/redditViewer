import React from 'react';
import mindful from 'mindful';

class Subreddits extends React.Component {
  constructor(props) {
    super(props);
  }

  addSubreddit (e) {
    e.preventDefault();
    var textField = document.getElementById('subredditName');
    var name = textField.value;
    if (name) {
      var existingSubreddits = mindful.get('subreddits') || [];
      existingSubreddits.push(name);
      mindful.retain('subreddits', existingSubreddits);
      textField.value = '';
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.addSubreddit} >
          <input id='subredditName' type='text' />
          <input type='submit' />
        </form>
        <ul>
          { mindful.get('subreddits').map((name, index) => {
            return (
              <li key={index}>
                { name }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default mindful(Subreddits, 'subreddits');





