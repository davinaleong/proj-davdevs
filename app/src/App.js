import React from 'react';
import moment from 'moment';

import Header from './header/Header';
import IndexPage from './pages/IndexPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectItemPage from './pages/ProjectItemPage';
import AboutPage from './pages/AboutPage';
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
        current: this.props.states.INDEX,
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
        <p key={keyPrefix + index} className="mb-1">{segment}</p>
      );
    });
    return lines;
  }

  getCategory = (type) => {
    return this.props.categories.filter(category => category.name === type)[0];
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

  gotoProjectItem = (uuid) => {
    const previousPage = this.state.page.current;
    this.setState({
      page: {
        current: this.props.states.PROJECT_ITEM,
        previous: previousPage
      },
      project: this.props.projects.filter(project => project.uuid === uuid)[0]
    });
  }

  getPageInfo = (state) => {
    return this.props.pages.filter(page => page.state === state)[0];
  }

  renderPage = (state) => {
    switch(state) {
      case this.props.states.INDEX:
        return <IndexPage
          site={this.props.site}
          states={this.props.states}
          projects={this.props.projects}
          getCategory={this.getCategory}
          renderAsset={this.renderAsset}
          renderItems={this.renderItems}
          gotoPage={this.gotoPage}
          gotoProjectItem={this.gotoProjectItem} />;
      
      case this.props.states.PROJECTS:
        return <ProjectsPage
          page={this.state.page}
          site={this.props.site}
          projects={this.props.projects}
          getCategory={this.getCategory}
          renderAsset={this.renderAsset}
          gotoPage={this.gotoPage}
          getPageInfo={this.getPageInfo}
          gotoProjectItem={this.gotoProjectItem} />;

      case this.props.states.PROJECT_ITEM:
        return <ProjectItemPage
          page={this.state.page}
          project={this.state.project}
          breakLines={this.breakLines}
          getCategory={this.getCategory}
          renderDate={this.renderDate}
          renderAsset={this.renderAsset}
          renderItems={this.renderItems}
          getPageInfo={this.getPageInfo} />;

      case this.props.states.ABOUT:
        return <AboutPage
          page={this.state.page}
          site={this.props.site}
          renderItems={this.renderItems}
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

  renderDate = (date) => {
    return moment(date).format(this.props.site.dateFormat);
  }

  renderAsset = (type, filename) => {
    return this.props.site.assets[type] + filename;
  }

  renderItems = (items, separator, arrayType, keyPrefix) => {
    let joined = '';
    switch(arrayType) {
      case this.props.arrayTypes['1d']:
        items.forEach((item, i) => {
          joined += i < items.length - 1 ? item + separator : item;
        });
        break;

      case this.props.arrayTypes['2d']:
        joined = [];
        items.forEach((row, i) => {
          let joinedSnippet = '';

          row.forEach((column, j) => {
            joinedSnippet += j < row.length - 1 ? column + separator : column;
          });

          joined.push(
            <p key={keyPrefix+i}>{joinedSnippet}</p>
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

    if (this.state.page.current === this.props.states.INDEX) {
      backButton = null;
    }

    return (
      <div className="App">
        <main>
          <Header
            pages={this.props.pages}
            states={this.props.states}
            items={this.props.items}
            gotoPage={this.gotoPage}
            showModal={this.showModal} />
  
          {this.renderPage(this.state.page.current)}

          {backButton}
        </main>

        <Footer
          states={this.props.states}
          site={this.props.site}
          gotoPage={this.gotoPage} />

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
