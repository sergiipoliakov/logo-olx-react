import React, { Component } from 'react';
import { connect } from 'react-redux';
import { error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

import { cardsOperations, cardsSelectors } from '../../../redux/userCards';
import styles from './editProductCard.module.css';
import AuthCard from '../../Forms/auth-card/AuthCard';
import Title from '../../UI/typography/title';
import Input from '../../UI/input';
import FileInput from '../../UI/fileInput';

import Select from '../../UI/select/Select';
import PrymaryButton from '../../UI/buttons';

import IconButton from '../../UI/IconButton';
import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';
defaults.width = '230px';
defaults.delay = '1500';

class editProductCard extends Component {
  state = {
    files: [],
    imagesPreviewUrls: [],
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
  deleteCard = id => {
    this.props.onDeleteCard(id);
    this.props.onModalClose();
  };

  handlSubmit = async e => {
    e.preventDefault();

    const { title, description, category, price, phone, _id, id } =
      this.state.formData;
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

    await this.props.onSubmit(_id ? _id : id, data);

    if (this.props.errorMessage !== null) {
      alert(this.props.errorMessage?.message);
      return;
    }

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
    const {
      title,
      description,
      category,
      price,
      phone,
      _id: cardId,
      id,
    } = this.state.formData;
    const { imagesPreviewUrls } = this.state;

    return (
      <AuthCard>
        <div className={styles.editFormContainer}>
          <Title className={styles.authTitle} level={2}>
            Редагувати оголошення
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
              placeholder="+380000000000"
              onChange={this.handleInputChange}
              value={phone}
            />
            <IconButton
              type="button"
              onClick={() => this.deleteCard(cardId ? cardId : id)}
              className={styles.delete}
              aria-label="Видалити оголошення"
            >
              <DeleteIcon /> Видалити оголошення
            </IconButton>

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
  errorMessage: cardsSelectors.getErrorMessage(state),
});

const mapDispatchToProps = {
  onSubmit: cardsOperations.editCard,
  onDeleteCard: cardsOperations.deleteCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(editProductCard);
