import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/images/logo-blue.svg';
import AppStore from '../../Assets/images/app-store.svg';
import PlayStore from '../../Assets/images/play-store.svg';
import EmailInput from '../../Assets/images/email-input.svg';
import PasswordInput from '../../Assets/images/password-input.svg';
import Input from '../Common/Input';
import LoginSlider from './LoginSlider';
import { Formik, Form, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import validator from 'validator';

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  return (
    <div className="login_wrapper">
      <div className="row">
        <div className="col-xxl-6 col-xl-5">
          <div className="login_left_wrap">
            <div className="login_form_wrap">
              <div className="form_wrapper">
                <div className="form_logo_wrap">
                  <img src={Logo} alt="Logo" />
                </div>
                <div className="login_title">
                  <h4>{t('title.create_an_account')}</h4>
                  <p>{t('title.login_welcome')}</p>
                </div>
                <Formik
                  enableReinitialize={true}
                  initialValues={initialValues}
                  validate={values => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = '*Email is a required field';
                    } else if (!validator.isEmail(values.email)) {
                      errors.email = 'Invalid email address format';
                    }
                    if (!values.password) {
                      errors.password = '*Password is a required field';
                    } else if (values.password?.length < 6) {
                      errors.password = 'Password must be at least 6 character';
                    }
                    if (!values.confirmPassword) {
                      errors.confirmPassword =
                        '*Repeat Password is a required field';
                    } else if (
                      !values.password &&
                      values.confirmPassword?.length < 6
                    ) {
                      errors.confirmPassword =
                        'Repeat Password must be at least 6 character';
                    } else if (values.password !== values.confirmPassword) {
                      errors.confirmPassword =
                        "Password and Repeat Password doesn't match";
                    }
                    return errors;
                  }}
                  onSubmit={async (values, { resetForm }) => {
                    if (
                      values.email === 'admin@gmail.com' &&
                      values.password === '123456'
                    ) {
                      navigate('/login');
                    }
                  }}
                >
                  {({ handleSubmit, handleChange, setFieldValue, values }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="form_group with_icon">
                        <label>
                          {t('myProfile.emailAddress')} <span>*</span>
                        </label>
                        <Input
                          type="email"
                          name="c"
                          value={values.email}
                          className="form-control"
                          placeholder={t('myProfile.email_placeholder')}
                          onChange={e => {
                            handleChange('email')(e.target.value);
                          }}
                        />
                        <span className="input_icon">
                          <img src={EmailInput} alt="Email Icon" />
                        </span>
                        <span className="text-error">
                          <ErrorMessage name="email" />
                        </span>
                      </div>
                      <div className="form_group with_icon">
                        <label>
                          {t('myProfile.password')} <span>*</span>
                        </label>
                        <Input
                          type="password"
                          name="password"
                          value={values.password}
                          className="form-control"
                          placeholder={t('myProfile.password')}
                          onChange={e => {
                            handleChange('password')(e.target.value);
                          }}
                        />
                        <span className="input_icon">
                          <img src={PasswordInput} alt="Password Icon" />
                        </span>
                        <span className="text-error">
                          <ErrorMessage name="password" />
                        </span>
                      </div>
                      <div className="form_group with_icon">
                        <label>
                          {t('myProfile.repeat_password')}
                          <span>*</span>
                        </label>
                        <Input
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          value={values.confirmPassword}
                          placeholder={t('myProfile.password')}
                          onChange={e => {
                            handleChange('confirmPassword')(e.target.value);
                          }}
                        />
                        <span className="input_icon">
                          <img src={PasswordInput} alt="Password Icon" />
                        </span>
                        <span className="text-error">
                          <ErrorMessage name="confirmPassword" />
                        </span>
                      </div>
                      <div className="sign_in_btn">
                        <button type="submit" className="btn-primary">
                          {t('title.signUp')}
                        </button>
                      </div>
                      <div className="dont_have_account">
                        <p>
                          {t('title.already_account')}{' '}
                          <Link to="/login">{t('title.signIn')}</Link>
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="download_app_wrap">
              <ul>
                <li>
                  <Link className="d-block">
                    <img src={AppStore} alt="App Store" />
                  </Link>
                </li>
                <li>
                  <Link className="d-block">
                    <img src={PlayStore} alt="play Store" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
          <div className="login_slider_wrapper">
            <span className="round_shape"></span>
            <LoginSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
