import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import '@pnotify/confirm/dist/PNotifyConfirm.css';

import { connect } from 'react-redux';
import withShowModal from '../../../hoc/withShowModal';
import AuthCard from '../../auth-card/AuthCard';
import Input from '../../../UI/input';
import IconButton from '../../../UI/IconButton';
import PrymaryButton from '../../../UI/buttons';
import Title from '../../../UI/typography/title';
import { ReactComponent as CloseIcon } from '../../../../icons/close.svg';
import { ReactComponent as GoogleIconLogo } from '../../../../icons/googleIconLogo.svg';
import { authOperations, authSelectors } from '../../../../redux/auth/index';

class LoginForm extends Component {
  state = {
    isError: false,
    formData: {
      email: '',
      password: '',
    },
  };

  handlSubmit = async e => {
    e.preventDefault();
    if (this.state.formData.email === '') {
      return error({
        title: 'Email',
        text: 'Введіть Эмаил!',
      });
    }
    if (this.state.formData.password === '') {
      return error({
        title: 'Password',
        text: 'Введіть Пароль!',
      });
    }

    await this.props.onLogin(this.state.formData);

    if (!this.props.isAuthenticated && this.props.errorMessage !== null) {
      if (
        this.props.errorMessage?.message ===
        `User with ${this.state.formData.email} email doesn't exist`
      ) {
        return error({
          title: 'Ошибка Email',
          text: `Користувача з електронною поштою "${this.state.formData.email}" не існує`,
        });
      }
      return error({
        title: `${this.props.errorMessage?.message}`,
      });
    }
    this.props.onModalClose();
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
  onRegisterClick = e => {
    this.props.value.onRegisterClick();
  };

  render() {
    return (
      <AuthCard>
        <div className={styles.loginFormContainer}>
          <Title className={styles.authTitle} level={2}>
            Ви можете авторизуватися за допомогою Googlt Account:
          </Title>
          <IconButton
            onClick={this.props.onModalClose}
            className={styles.closeBtn}
            aria-label="Закрыть модалку"
          >
            <CloseIcon />
          </IconButton>
          <PrymaryButton
            className={styles.googleIcon}
            type="button"
            onClick={this.props.onGoogleLogin}
          >
            <GoogleIconLogo />
            Google
          </PrymaryButton>
          <Title className={styles.authTitle} level={2}>
            Або зайти за допомогою імейлу і пароля, попередньо зареєструвавшись:
          </Title>
          <form className={styles.form} onSubmit={this.handlSubmit}>
            <Input
              className={styles.authInput}
              name="email"
              placeholder="Email"
              type="email"
              onChange={this.handleInputChange}
            />
            <Input
              className={styles.authInput}
              name="password"
              placeholder="Password"
              type="password"
              onChange={this.handleInputChange}
            />
            <div className={styles.buttonsContainer}>
              <PrymaryButton type="submit">Увійти</PrymaryButton>
              <PrymaryButton type="button" onClick={this.onRegisterClick}>
                Зареєструватись
              </PrymaryButton>
            </div>
          </form>
        </div>
      </AuthCard>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  errorMessage: authSelectors.getErrorMessage(state),
});

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
  onGoogleLogin: authOperations.logInWithGoogle,
};

export default withShowModal(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm),
);
