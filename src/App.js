import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import './App.css';
import RoutePages from './router/Router';
import ModalPage from './Components/Modal';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ShowModalContext from './context/ShowModal/ShowModal';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <div className="App-wrapper">
        <ShowModalContext>
          <div className="App-content">
            <Header />
            <RoutePages />
          </div>
          <Footer />
          <ModalPage />
        </ShowModalContext>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
