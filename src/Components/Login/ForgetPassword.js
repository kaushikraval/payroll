import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/images/logo-blue.svg';
import AppStore from '../../Assets/images/app-store.svg';
import PlayStore from '../../Assets/images/play-store.svg';
import EmailInput from '../../Assets/images/email-input.svg';
import Input from '../Common/Input';
import LoginSlider from './LoginSlider';
import { useTranslation } from 'react-i18next';
import validator from 'validator';

export default function ForgetPassword() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isValidateEmail, setIsValidateEmail] = useState('');
  const handleSubmit = () => {
    if (!email) {
      setIsValidateEmail('*Email is a required field');
    }
  };
  return (
    <div className="login_wrapper">
      <div className="row">
        <div className="col-xxl-6 col-xl-5">
          <div className="login_left_wrap">
            <div className="login_form_wrap">
              <div className="form_wrapper">
                <div className="form_logo_wrap">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="login_title">
                  <h4>{t('myProfile.forgotPassword')}</h4>
                  <p>{t('title.forgot_password_title')}</p>
                </div>
                <div className="form_group with_icon">
                  <label>
                    {t('myProfile.emailAddress')} <span>*</span>
                  </label>
                  <Input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={e => {
                      console.log('e.target.value', e.target.value);
                      if (!e.target.value) {
                        setIsValidateEmail('*Email is a required field');
                      } else if (!validator.isEmail(e.target.value)) {
                        setIsValidateEmail('Invalid email address format');
                      } else {
                        setIsValidateEmail('');
                      }
                      setEmail(e.target.value);
                    }}
                    placeholder={t('myProfile.email_placeholder')}
                  />
                  <span className="text-error">{isValidateEmail}</span>
                  <span className="input_icon">
                    <img src={EmailInput} alt="Email Icon" />
                  </span>
                </div>

                <div className="sign_in_btn">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => handleSubmit()}
                  >
                    {t('buttonTitle.continue')}
                  </button>
                </div>
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
