import React from 'react';
import mindful from 'mindful';

class Subreddits extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var subredditArray = [];
    var subredditSet = mindful.get('subreddits');

    for (var key in subredditSet) {
      subredditArray.push(key);
    }

    mindful.set('subredditArray', subredditArray);
  }

  addSubreddit (e) {
    e.preventDefault();
    var textField = document.getElementById('subredditName');
    var name = textField.value;
    if (name) {
      var existingSubreddits = mindful.get('subreddits') || {};
      existingSubreddits[name] = true;
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
          { mindful.get('subredditArray').map((name, index) => {
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





