import React, { Component } from 'react';
import styles from './LoginForm.module.css';

// import { loginUser } from '../../../../services/auth/auth-login';
import { connect } from 'react-redux';
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
    formData: {
      email: '',
      password: '',
    },
  };

  handlSubmit = async e => {
    e.preventDefault();

    await this.props.onLogin(this.state.formData);

    if (!this.props.isAuthenticated && this.props.errorMessage !== null) {
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
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <AuthCard>
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
        <PrymaryButton className={styles.googleIcon} type="button">
          <GoogleIconLogo />
          Google
        </PrymaryButton>
        <Title className={styles.authTitle} level={2}>
          Або зайти за допомогою імейлу і пароля, попередньо зареєструвавшись:
        </Title>
        <form onSubmit={this.handlSubmit}>
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
            <PrymaryButton type="submit">Зареєструватись</PrymaryButton>
          </div>
        </form>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
