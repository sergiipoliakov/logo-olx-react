import './App.css';
import RoutePages from './router/Router';
import ModalPage from './Components/Modal';
import Header from './Components/Header';
import ShowModalContext from './context/ShowModal/ShowModal';

const App = props => {
  return (
    <>
      <ShowModalContext>
        <Header />
        <RoutePages />
        <ModalPage />
      </ShowModalContext>
    </>
  );
};
export default App;
