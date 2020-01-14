import React from 'react';

import Header from './header/Header';
import IndexPage from './pages/IndexPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectItemPage from './pages/ProjectItemPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './footer/Footer';

import Modal from './modal/Modal';
import Social from './social/Social';
import BackToTopButton from './buttons/BackToTopButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: {
        current: this.props.pages.INDEX, // TODO: Back to index
        previous: this.props.pages.INDEX
      },
      modal: false
    };
  }

  showModal = (show) => {
    this.setState({
      modal: show
    });
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
    console.log('gotoPage', page);
    const previousPage = this.state.page.current;
    this.setState({
      page: {
        current: page,
        previous: previousPage
      }
    });
  }

  renderPage = (page) => {
    switch(page.name) {
      case this.props.pages.INDEX.name:
        return <IndexPage
          site={this.props.site}
          pages={this.props.pages}
          projects={this.props.projects}
          renderAsset={this.renderAsset}
          renderSkills={this.renderSkills}
          gotoPage={this.gotoPage} />;
      
      case this.props.pages.PROJECTS.name:
        return <ProjectsPage />;

      case this.props.pages.PROJECT_ITEM.name:
        return <ProjectItemPage />;

      case this.props.pages.SKILLS.name:
        return <SkillsPage
          site={this.props.site}
          page={this.state.page}
          renderSkills={this.renderSkills}
          gotoPage={this.gotoPage} />;

      case this.props.pages.CONTACT.name:
        return <ContactPage />;

      default:
        return <NotFoundPage />;
    }
  }

  renderAsset = (type, filename) => {
    return this.props.site.assets[type] + filename;
  }

  renderSkills = (skills, separator, arrayType, keyPrefix) => {
    let joined = '';
    switch(arrayType) {
      case this.props.arrayTypes['1d']:
        skills.forEach((skill, i) => {
          joined += i < skills.length - 1 ? skill + separator : skill;
        });
        break;

      case this.props.arrayTypes['2d']:
        joined = [];
        skills.forEach((row, i) => {
          let joinedSnippet = '';

          row.forEach((column, j) => {
            joinedSnippet += j < row.length - 1 ? column + separator : column;
          });

          joined.push(
            <div>{joinedSnippet}</div>
          );
        });
        break;

      default:
        joined = '';
        break;
    }
    return joined;
  }

  render() {
    return (
      <div className="App">
        <main>
          <Header
            pages={this.props.pages}
            items={this.props.items}
            gotoPage={this.gotoPage}
            showModal={this.showModal} />
  
          {this.renderPage(this.state.page.current)}
        </main>

        <Footer site={this.props.site} />

        <Modal
          modal={this.state.modal}
          jokes={this.props.jokes}
          showModal={this.showModal}
          breakLines={this.breakLines} />

        <Social
          social={this.props.site.social} />

        <BackToTopButton />
      </div>
    );
  }
}

export default App;
