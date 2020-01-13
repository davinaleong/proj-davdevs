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
        current: this.props.pages.SKILLS, // TODO: Back to index
        previous: this.props.pages.SKILLS
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
    const previousPage = this.state.page.current;
    this.setState({
      page: {
        current: page,
        previous: previousPage
      }
    });
  }

  renderPage = (page) => {
    switch(page) {
      case this.props.pages.INDEX:
        return <IndexPage
          site={this.props.site}
          pages={this.props.pages}
          projects={this.props.projects}
          renderAsset={this.renderAsset}
          renderSkills={this.renderSkills}
          gotoPage={this.gotoPage} />;
      
      case this.props.pages.PROJECTS:
        return <ProjectsPage />;

      case this.props.pages.PROJECT_ITEM:
        return <ProjectItemPage />;

      case this.props.pages.SKILLS:
        return <SkillsPage
          site={this.props.site}
          page={this.state.page.current}
          renderSkills={this.renderSkills}
          gotoPage={this.gotoPage} />;

      case this.props.pages.CONTACT:
        return <ContactPage />;

      default:
        return <NotFoundPage />;
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
        //
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
