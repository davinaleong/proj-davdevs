import React from 'react';

import Header from './header/Header';
import IndexPage from './pages/IndexPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: {
        current: this.props.pages.INDEX,
        previous: this.props.pages.INDEX
      }
    };
  }
  
  breakLines = (string, keyPrefix) => {
    const lines = [];
    const split = string.split(/\r\n/g);
    split.forEach((segment, index) => {
      lines.push(
        <p key={keyPrefix + index}>{segment}</p>
      );
    });
    return lines;
  }

  gotoPage = (page) => {
    const previousPage = this.state.page.current;
    this.setState({
      page: {
        current: previousPage,
        previous: page
      }
    });
  }

  renderPage = () => {
    switch(this.state.page.current) {
      case this.props.pages.INDEX:
        return <IndexPage
          site={this.props.site}
          projects={this.props.projects}
          renderAsset={this.renderAsset} />;
      
      case this.props.page.PROJECTS:
        // return <ProjectsPage />;
        break;

      case this.props.page.PROJECT:
        // return <ProjectPage />;
        break;

      case this.props.page.SKILLS:
        // return <SkillsPage />;
        break;

      case this.props.page.CONTACT:
        // return <ContactPage />;
        break;

      default:
        // return <NotFoundPage />;
        break;
    }
  }

  renderAsset = (type, filename) => {
    return this.props.site.assets[type] + filename;
  }

  render() {
    return (
      <div className="App">
        <main>
          <Header
            pages={this.props.pages}
            items={this.props.items}/>
  
          {this.renderPage()}
        </main>
      </div>
    );
  }
}

export default App;
