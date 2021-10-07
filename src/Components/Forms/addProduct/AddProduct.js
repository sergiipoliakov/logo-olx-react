import React, { Component } from 'react';
import { connect } from 'react-redux';

import { error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

import { cardsOperations, cardsSelectors } from '../../../redux/userCards';
import styles from './AddProduct.module.css';
import AuthCard from '../../Forms/auth-card/AuthCard';
import Title from '../../UI/typography/title';
import Input from '../../UI/input';
import FileInput from '../../UI/fileInput';
import Select from '../../UI/select/Select';
import PrymaryButton from '../../UI/buttons';

import IconButton from '../../UI/IconButton';
import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import { authSelectors } from '../../../redux/auth';

defaults.width = '290px';
defaults.delay = '1000';

class AddProduct extends Component {
  state = {
    files: [],
    imagesPreviewUrls: [],
    error: false,
    formData: {
      title: '',
      description: '',
      category: '',
      price: '0',
      phone: '',
      file: [],
    },
  };

  onDeleteImageClick = () => {
    if (this.state?.files.length > 0) {
      this.setState(prevState => {
        return {
          files: [],
          imagesPreviewUrls: [],
        };
      });
    }
  };

  handlSubmit = async e => {
    e.preventDefault();
    const { title, description, category, price, phone } = this.state.formData;
    const { files } = this.state;
    if (title === '') {
      return error({
        title: 'Назва',
        text: 'Введіть Назву товару!',
      });
    }
    if (description === '') {
      return error({
        title: 'Опис',
        text: 'Введіть Опис товару!',
      });
    }
    if (category === '') {
      return error({
        title: 'Категорію',
        text: 'Вибиріть Категорію товару!',
      });
    }
    if (price === '') {
      return error({
        title: 'Ціна',
        text: 'Введіть Ціну товару!',
      });
    }
    if (phone === '') {
      return error({
        title: 'Телефон',
        text: 'Введіть Ваш телефон! формат +380961231212',
      });
    }
    if (files.length === 0) {
      return error({
        title: 'Фото',
        text: 'Загрузіть Фото Товару!',
      });
    }

    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('category', category);
    data.append('price', price);
    data.append('phone', phone);
    if (files.length > 0) {
      console.log('weq');
      for (let i = 0; i < files.length; i += 1) {
        console.log(files[i]);
        data.append('file', files[i]);
      }
    } else {
      data.append('file', files);
    }

    await this.props.onSubmit(data);

    if (this.props.errorMessage !== null) {
      if (
        this.props.errorMessage?.message ===
        "Can't set price for free category. Must be 0"
      ) {
        return error({
          title: 'Ціна',
          text: 'Ціна для "Безкоштовної категорії" повинно бути 0',
        });
      }
      if (
        this.props.errorMessage?.message ===
        "Can't set price for trade category. Must be 0"
      ) {
        return error({
          title: 'Ціна',
          text: 'Ціна для "Обміна" повинно бути 0',
        });
      }
      if (
        this.props.errorMessage?.message ===
        "Can't set price for work category. Must be 0"
      ) {
        return error({
          title: 'Ціна',
          text: 'Ціна для "Работа" повинно бути 0',
        });
      }
      if (this.props.errorMessage?.message === 'Only image files are allowed') {
        return error({
          title: 'Фото',
          text: 'Допускаються лише файли зображень',
        });
      }
      return error({
        title: 'Помилка!',
        text: `${this.props.errorMessage?.message}`,
      });
    }
    this.props.onGetUserCards();

    this.props.onModalClose();
  };

  handleInputChange = e => {
    if (e.target.type === 'file') {
      let files = Array.from(e.target.files);

      files.forEach(file => {
        let reader = new FileReader();
        reader.onloadend = () => {
          this.setState({
            files: [...this.state.files, file],
            imagesPreviewUrls: [...this.state.imagesPreviewUrls, reader.result],
          });
        };
        reader.readAsDataURL(file);
      });
    }

    const { value, name } = e.target;

    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: e.target.type === 'file' ? e.target.files[0] : value,
      },
    }));
  };

  render() {
    const { imagesPreviewUrls } = this.state;

    return (
      <AuthCard>
        <div className={styles.addFormContainer}>
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

            <FileInput
              label="Фото"
              type="file"
              className={styles.addFormIput}
              name="file"
              placeholder=""
              onChange={this.handleInputChange}
              previewFiles={imagesPreviewUrls}
              onDeleteImageClick={this.onDeleteImageClick}
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
        </div>
      </AuthCard>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  errorMessage: cardsSelectors.getErrorMessage(state),
});

const mapDispatchToProps = {
  onGetUserCards: cardsOperations.fetchUserCards,
  onSubmit: cardsOperations.addCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
