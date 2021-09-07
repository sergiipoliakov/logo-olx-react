import './App.css';
import RoutePages from './router/Router';
import ModalPage from './Components/Modal';
import Header from './Components/Header';

const App = props => {
  return (
    <>
      <Header />
      <RoutePages />
      <ModalPage />
    </>
  );
};
export default App;
