import React, { Component } from 'react';
import styles from './RegisterForm.module.css';
import { connect } from 'react-redux';
import AuthCard from '../../auth-card/AuthCard';
import Input from '../../../UI/input';
import IconButton from '../../../UI/IconButton';
import PrymaryButton from '../../../UI/buttons';
import Title from '../../../UI/typography/title';
import { ReactComponent as CloseIcon } from '../../../../icons/close.svg';
import { authOperations, authSelectors } from '../../../../redux/auth/index';

class RegisterForm extends Component {
  state = {
    formData: {
      email: '',
      password: '',
    },
  };

  handlSubmit = async e => {
    e.preventDefault();

    await this.props.onRegister(this.state.formData);

    if (!this.props.isAuthenticated && this.props.errorMessage !== null) {
      alert(this.props.errorMessage?.message);
      return;
    }
    this.props.onLogin(this.state.formData);
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
        <IconButton
          onClick={this.props.onModalClose}
          className={styles.closeBtn}
          aria-label="Закрыть модалку"
        >
          <CloseIcon />
        </IconButton>

        <Title className={styles.authTitle} level={2}>
          зареєструйтесь за допомогою імейлу і пароля
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
            {/* <PrymaryButton type="submit">Увійти</PrymaryButton> */}
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
  onRegister: authOperations.register,
  onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
