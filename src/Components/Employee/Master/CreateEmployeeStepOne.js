import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import Input from '../../Common/Input';
import ReactCelender from '../../Common/ReactCelender';
import { useTranslation } from 'react-i18next';

export default function CreateEmployee() {
  const { t } = useTranslation();
  const [code, setCode] = useState([]);
  const [genderSelct, setGender] = useState([]);
  const employeeCode = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' },
  ];
  const gender = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
  ];
  const codeHandleChange = e => {
    setCode(e.value);
  };
  const genderHandleChange = e => {
    setGender(e.value);
  };

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', function () {
      var SVGInjector = window.SVGInjector.SVGInjector;
      SVGInjector(document.querySelectorAll('[data-inject-svg]'));
    });
  }, []);

  return (
    <div className="inner_wrapper">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} data-inject-svg alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>{t('title.employees')}</b>
          </li>
          <li>
            <b>{t('title.masters')}</b>
          </li>
          <li>{t('title.addEmployee')}</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="current">
            <div className="icon"></div>
            <span>{t('emp_step_form.basic_details')}</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>{t('emp_step_form.employee_work_post')}</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>{t('emp_step_form.statutory_details')}</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>{t('emp_step_form.payment_details')}</span>
          </li>
        </ul>
      </div>
      <div className="create_employee bg_white_box p-md-4 p-3">
        <form>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="form_group">
                <label>{t('emp_step_form.employee_code_selection')}*</label>
                <ReactSelectSingle
                  value={code}
                  options={employeeCode}
                  filter
                  onChange={e => {
                    codeHandleChange(e);
                  }}
                  placeholder={t(
                    'employee_profile_detail.blood_group_placeholder',
                  )}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="form_group">
                <label>{t('title.employeeCode')}*</label>
                <Input
                  type="text"
                  placeholder={t('emp_step_form.employee_code_placeholder')}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="form_group">
                <label>{t('myProfile.punchCodeText')}*</label>
                <Input
                  type="text"
                  placeholder={t('emp_step_form.punch_code_placeholder')}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="form_group">
                <label>{t('myProfile.fullName')}*</label>
                <Input
                  type="text"
                  placeholder={t('emp_step_form.fullname_placeholder')}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="form_group">
                <label>{t('myProfile.dateOfBirth')}</label>
                <ReactCelender
                  value="date"
                  placeholder={t('title.dateFormat')}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="form_group">
                <label>{t('myProfile.gender')}*</label>
                <ReactSelectSingle
                  value={genderSelct}
                  filter
                  options={gender}
                  onChange={e => {
                    genderHandleChange(e);
                  }}
                  placeholder={t(
                    'employee_profile_detail.blood_group_placeholder',
                  )}
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="form_group">
                <label>{t('emp_step_form.date_of_joining')}* </label>
                <ReactCelender
                  value="date"
                  placeholder={t('title.dateFormat')}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="form_group">
                <label>{t('emp_step_form.probation_period')}</label>
                <Input
                  type="text"
                  placeholder={t('emp_step_form.probation_period_placeholder')}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="form_group">
                <label>{t('emp_step_form.confirmation_date')}</label>
                <ReactCelender
                  value="date"
                  placeholder={t('title.dateFormat')}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="form_group">
                <label>{t('myProfile.emailIdTitle')}* </label>
                <Input
                  type="email"
                  placeholder={t('myProfile.email_placeholder')}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="form_group">
                <label>{t('myProfile.mobileNumber')}* </label>
                <Input
                  type="tel"
                  placeholder={t('myProfile.mobile_placeholder')}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="btn_group d-flex justify-content-end">
          <Link
            className="btn-secondary mx-3"
            to="/employees/masters/dashboard"
          >
            {t('buttonTitle.cancel')}
          </Link>
          <Link
            className="btn-primary"
            to="/employees/masters/create-employee-step-two"
          >
            {t('title.next')}
          </Link>
        </div>
      </div>
    </div>
  );
}
