import Modal from './Modal';
import Login from '../../Components/Forms/auth/login';
import ReviewCard from '../../Components/Reviews';
import AddProduct from '../../Components/Forms/addProduct/AddProduct';
import withShowModal from '../hoc/withShowModal';

const ModalPage = props => {
  const { showModal, modalContent, onToggleModal } = props.value;

  return (
    <>
      {showModal && (
        <Modal onModalClose={onToggleModal}>
          {modalContent === '/login' && <Login onModalClose={onToggleModal} />}
          {modalContent === '/review' && (
            <ReviewCard onModalClose={onToggleModal} />
          )}
          {modalContent === '/addProduct' && (
            <AddProduct onModalClose={onToggleModal} />
          )}
        </Modal>
      )}
    </>
  );
};
export default withShowModal(ModalPage);
