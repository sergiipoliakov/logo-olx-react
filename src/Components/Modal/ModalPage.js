import { connect } from 'react-redux';
import { cardsSelectors } from '../../redux/userCards';
import { allCardsSelectors } from '../../redux/cards';

import Modal from './Modal';
import Login from '../../Components/Forms/auth/login';
import RegisterForm from '../Forms/auth/registr/RegisterForm';
import ReviewCard from '../../Components/Reviews';
import AddProduct from '../../Components/Forms/addProduct/AddProduct';
import EditProductCard from '../../Components/Forms/editProductCard';
import SearchForm from '../Forms/SearchForm/SearchForm';

import withShowModal from '../hoc/withShowModal';

const ModalPage = props => {
  const { showModal, modalContent, onToggleModal } = props.value;

  const { cardToEdit, cardToReview } = props;

  return (
    <>
      {showModal && (
        <Modal onModalClose={onToggleModal}>
          {modalContent === '/login' && <Login onModalClose={onToggleModal} />}
          {modalContent === '/register' && (
            <RegisterForm onModalClose={onToggleModal} />
          )}
          {modalContent === '/search' && (
            <SearchForm onModalClose={onToggleModal} />
          )}

          {modalContent === '/review' && (
            <ReviewCard onModalClose={onToggleModal} card={cardToReview} />
          )}
          {modalContent === '/addProduct' && (
            <AddProduct onModalClose={onToggleModal} />
          )}
          {modalContent === '/editProductCard' && (
            <EditProductCard onModalClose={onToggleModal} card={cardToEdit} />
          )}
        </Modal>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  cardToEdit: cardsSelectors.getEditCard(state),
  cardToReview: allCardsSelectors.getReviewCard(state),
});

export default withShowModal(connect(mapStateToProps)(ModalPage));
