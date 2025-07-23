import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/images/logo-blue.svg';
import AppStore from '../../Assets/images/app-store.svg';
import PlayStore from '../../Assets/images/play-store.svg';
import EmailInput from '../../Assets/images/email-input.svg';
import PasswordInput from '../../Assets/images/password-input.svg';
import Input from '../Common/Input';
import ReactCheckbox from '../Common/ReactCheckbox';
import LoginSlider from './LoginSlider';
import { useTranslation } from 'react-i18next';
import { Formik, Form, ErrorMessage } from 'formik';
import validator from 'validator';
import { setSessionDataValue } from './../../utils/common';

export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const initialValues = {
    email: '',
    password: '',
    isRemember: false,
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
                  <h4>{t('title.logIn')}</h4>
                  <p>
                    {t('title.welcomeTitle')} <Link>{t('projectTitle')}</Link>.
                  </p>
                </div>
                <Formik
                  enableReinitialize={true}
                  initialValues={initialValues}
                  validate={values => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = '*Email is a required field';
                    } else if (!validator.isEmail(values.email)) {
                      errors.email = '*Invalid email address format';
                    }
                    if (!values.password) {
                      errors.password = '*Password is a required field';
                    } else if (values.password?.length < 6) {
                      errors.password = 'Password must be at least 6 character';
                    }
                    return errors;
                  }}
                  onSubmit={async (values, { resetForm }) => {
                    if (
                      values.email === 'admin@gmail.com' &&
                      values.password === '123456'
                    ) {
                      setSessionDataValue('isLogin', true);
                      navigate('/');
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
                          type="text"
                          className="form-control"
                          name="email"
                          value={values.email}
                          placeholder={t('myProfile.emailAddress')}
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
                      <div className="forgot_wrap">
                        <div className="row">
                          <div className="col-6">
                            <div className="form_group checkbox_wrap m-0">
                              <ReactCheckbox
                                inputId="Rememberme"
                                name="isRemember"
                                value="Remember me"
                                checked={values.isRemember}
                                onChange={e => {
                                  setFieldValue('isRemember', e.checked);
                                }}
                              />
                              <label
                                htmlFor="Rememberme"
                                className="text-light"
                              >
                                {t('myProfile.rememberMe')}
                              </label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="forgot_link">
                              <Link to="/forget-password">
                                {t('myProfile.forgotPassword')}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sign_in_btn">
                        <button type="submit" className="btn-primary">
                          {t('title.signIn')}
                        </button>
                      </div>
                      <div className="dont_have_account">
                        <p>
                          {t('title.askAccount')}{' '}
                          <Link to="/register">{t('title.signUp')}</Link>
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
            <div className="slider_content d-flex justify-content-end h-100">
              <LoginSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
