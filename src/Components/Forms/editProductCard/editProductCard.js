import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cardsOperations } from '../../../redux/userCards';
import styles from './editProductCard.module.css';
import AuthCard from '../../Forms/auth-card/AuthCard';
import Title from '../../UI/typography/title';
import Input from '../../UI/input';
import Select from '../../UI/select/Select';
import PrymaryButton from '../../UI/buttons';

import IconButton from '../../UI/IconButton';
import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';

import { authOperations } from '../../../redux/auth';

class editProductCard extends Component {
  state = {
    formData: {
      title: '',
      description: '',
      category: '',
      price: '',
      phone: '',
      file: null,
    },
  };
  componentDidMount() {
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        ...this.props.card,
      },
    }));
  }
  deleteCard = id => {
    this.props.onDeleteCard(id);
    this.props.onModalClose();
  };

  handlSubmit = e => {
    e.preventDefault();
    const { file, title, description, category, price, phone } =
      this.state.formData;

    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('category', category);
    data.append('price', price);
    data.append('phone', phone);
    data.append('file', file);

    this.props.onSubmit(data);
    // this.props.getCurrentUser();
    this.props.onModalClose();
  };

  handleInputChange = e => {
    const { value, name } = e.target;

    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: e.target.type === 'file' ? e.target.files[0] : value,
      },
    }));
  };

  render() {
    const {
      title,
      description,
      category,
      price,
      phone,
      _id: cardId,
    } = this.state.formData;

    return (
      <AuthCard>
        <Title className={styles.authTitle} level={2}>
          Додати оголошення
        </Title>
        <IconButton
          onClick={this.props.onModalClose}
          className={styles.closeBtn}
          aria-label="Закрыть модалку"
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={this.handlSubmit}>
          <Input
            label="Назва товару"
            className={styles.addFormIput}
            name="title"
            placeholder=""
            onChange={this.handleInputChange}
            value={title}
          />
          <Input
            label="Фото"
            type="file"
            className={styles.addFormIput}
            name="file"
            placeholder=""
            onChange={this.handleInputChange}
          />
          <Input
            label="Опис товару"
            className={styles.addFormIput}
            name="description"
            placeholder=""
            onChange={this.handleInputChange}
            value={description}
          />
          <Select
            label="Категорія товару"
            className={styles.addFormIput}
            name="category"
            placeholder=""
            onChange={this.handleInputChange}
            value={category}
          />
          <Input
            label="Ціна"
            className={styles.addFormIput}
            name="price"
            placeholder="0.00 грн"
            onChange={this.handleInputChange}
            value={price}
          />
          <Input
            label="Телефон"
            type="phone"
            className={styles.addFormIput}
            name="phone"
            placeholder="+38 (0--) --- -- --"
            onChange={this.handleInputChange}
            value={phone}
          />
          <IconButton
            type="button"
            onClick={() => this.deleteCard(cardId)}
            className={styles.delete}
            aria-label="Видалити оголошення"
          >
            <DeleteIcon /> Видалити оголошення
          </IconButton>

          <div className={styles.buttonsContainer}>
            <PrymaryButton type="submit">Додати</PrymaryButton>
          </div>
        </form>
      </AuthCard>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: cardsOperations.editCard,
  getCurrentUser: authOperations.getCurrentUser,
  onDeleteCard: cardsOperations.deleteCard,
};

export default connect(null, mapDispatchToProps)(editProductCard);
