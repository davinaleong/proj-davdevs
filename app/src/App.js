import React from 'react';

import Header from './header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main>
          <Header
            pages={this.props.pages}
            items={this.props.items}/>
  
          Main
        </main>
      </div>
    );
  }
}

export default App;
