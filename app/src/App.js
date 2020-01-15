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
import BackButton from './buttons/BackButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: {
        current: this.props.states.INDEX, // TODO: set back to 'INDEX'
        previous: this.props.states.INDEX
      },
      project: null,
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

  selectProject = (name) => {
    this.setState({
      project: this.props.projects.filter(project => project.name === name)[0]
    });
  }

  gotoPage = (state) => {
    const previousPage = this.state.page.current;
    this.setState({
      page: {
        current: state,
        previous: previousPage
      }
    });
  }

  getPageInfo = (state) => {
    return this.props.pages[state];
  }

  renderPage = (state) => {
    switch(state) {
      case this.props.states.INDEX:
        return <IndexPage
          site={this.props.site}
          states={this.props.states}
          projects={this.props.projects}
          renderAsset={this.renderAsset}
          renderSkills={this.renderSkills}
          gotoPage={this.gotoPage}
          selectProject={this.selectProject} />;
      
      case this.props.states.PROJECTS:
        return <ProjectsPage
          page={this.state.page}
          site={this.props.site}
          projects={this.props.projects}
          renderAsset={this.renderAsset}
          gotoPage={this.gotoPage}
          getPageInfo={this.getPageInfo}
          selectProject={this.selectProject} />;

      case this.props.states.PROJECT_ITEM:
        return <ProjectItemPage
          page={this.state.page}
          getPageInfo={this.getPageInfo} />;

      case this.props.states.SKILLS:
        return <SkillsPage
          page={this.state.page}
          site={this.props.site}
          renderSkills={this.renderSkills}
          gotoPage={this.gotoPage}
          getPageInfo={this.getPageInfo} />;

      case this.props.states.CONTACT:
        return <ContactPage
          page={this.state.page}
          site={this.props.site}
          gotoPage={this.gotoPage}
          getPageInfo={this.getPageInfo} />;

      default:
        return <NotFoundPage
          page={this.state.page}
          gotoPage={this.gotoPAge} />;
    }
  }

  renderAsset = (type, filename) => {
    return this.props.site.assets[type] + filename;
  }

  renderSkills = (skills, separator, arrayType) => {
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
    let backButton = <BackButton page={this.state.page} gotoPage={this.gotoPage}/>;

    if (this.state.page.current == this.props.states.INDEX) {
      backButton = null;
    }

    return (
      <div className="App">
        <main>
          <Header
            pages={this.props.pages} // TODO: Remove
            states={this.props.states}
            items={this.props.items}
            gotoPage={this.gotoPage}
            showModal={this.showModal} />
  
          {this.renderPage(this.state.page.current)}

          {backButton}
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
