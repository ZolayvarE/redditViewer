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
        <div className='row'>
          <div className='col-xs-0 col-sm-2'></div>
          <h3 className='col-xs-12 col-sm-8'>
            <center> 
              Which subreddits would you like to browse?
            </center>
          </h3>
          <div className='col-xs-0 col-sm-2'></div>
        </div>

        <div className='row'>
          <div className='col-xs-1 col-sm-3'></div>
          <form onSubmit={this.addSubreddit} className='col-xs-10 col-sm-6 input-group'>        
            <span className="input-group-addon" id="basic-addon1">
              reddit.com/r/
            </span>
            <input type="text" id="subredditName" className="form-control" placeholder="Any subreddit name goes here..." aria-describedby="sizing-addon1"></input>
          </form>
          <div className='col-xs-1 col-sm-3'></div>
        </div>

        <br />
        <br />

        <div className='row'>
          <div className='col-xs-0 col-sm-2'></div>
          <h4 className='col-xs-12 col-sm-8'>
            <center> 
              You are currently browsing:
              {
                globalState.get('subreddits').length ?
                globalState.get('subreddits').map((name, index) => {
                  return (
                    <div className="subredditListItem">
                      <h4 key={index} >
                        { '/r/' + name.toLowerCase() }
                      </h4>
                      <h5 className="removeButton" onClick={() => { this.removeSubreddit(name); }}>
                        <a href='#' className="removeButton">
                          X
                        </a>
                      </h5>
                    </div>
                  );
                }) :

                <div className="subredditListItem">
                  <h4>
                    The Front Page
                  </h4>
                </div>
              }
            </center>
          </h4>
          <div className='col-xs-0 col-sm-2'></div>
        </div>
      </div>
    );
  }
}

export default globalState.subscribe(Subreddits, 'subreddits');





