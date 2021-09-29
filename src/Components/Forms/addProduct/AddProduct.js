import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cardsOperations, cardsSelectors } from '../../../redux/userCards';
import styles from './AddProduct.module.css';
import AuthCard from '../../Forms/auth-card/AuthCard';
import Title from '../../UI/typography/title';
import Input from '../../UI/input';
import Select from '../../UI/select/Select';
import PrymaryButton from '../../UI/buttons';

import IconButton from '../../UI/IconButton';
import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import { authOperations, authSelectors } from '../../../redux/auth';

class AddProduct extends Component {
  state = {
    formData: {
      title: '',
      description: '',
      category: '',
      price: '0',
      phone: '',
      file: null,
    },
  };

  handlSubmit = async e => {
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

    await this.props.onSubmit(data);

    if (this.props.errorMessage !== null) {
      alert(this.props.errorMessage?.message);
      return;
    }

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
          />
          <Select
            label="Категорія товару"
            className={styles.addFormIput}
            name="category"
            placeholder=""
            onChange={this.handleInputChange}
          />
          <Input
            label="Ціна"
            className={styles.addFormIput}
            name="price"
            placeholder="0.00 грн"
            onChange={this.handleInputChange}
          />
          <Input
            label="Телефон"
            type="phone"
            className={styles.addFormIput}
            name="phone"
            placeholder="+380000000000"
            onChange={this.handleInputChange}
          />
          <div className={styles.buttonsContainer}>
            <PrymaryButton type="submit">Додати</PrymaryButton>
          </div>
        </form>
      </AuthCard>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  errorMessage: cardsSelectors.getErrorMessage(state),
});

const mapDispatchToProps = {
  onSubmit: cardsOperations.addCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
