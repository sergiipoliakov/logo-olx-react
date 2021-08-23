import React, { Component } from 'react';
import styles from './AddProduct.module.css';

// import PropTypes from 'prop-types';
import AuthCard from '../../Forms/auth-card/AuthCard';
import Title from '../../UI/typography/title';
import Input from '../../UI/input';
import Select from '../../UI/select/Select';
import PrymaryButton from '../../UI/buttons';

import IconButton from '../../UI/IconButton';
import { ReactComponent as CloseIcon } from '../../../icons/close.svg';

export default class AddProduct extends Component {
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

  handlSubmit = e => {
    e.preventDefault();

    console.log('submited');
    console.log(this.state.formData);
  };

  handleInputChange = e => {
    const { value, name } = e.target;

    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value,
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
            placeholder="+38 (0--) --- -- --"
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
