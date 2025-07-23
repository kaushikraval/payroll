import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Input from '../../Common/Input';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import { useTranslation } from 'react-i18next';

export default function CreateEmployeeStepFour() {
  const { t } = useTranslation();
  const paymentTypeOption = [
    { label: 'Cash', value: 'Cash' },
    { label: 'Cheque', value: 'Cheque' },
    { label: 'Bank', value: 'Bank' },
  ];
  const [paymentType, setpaymentType] = useState(paymentTypeOption[0].value);
  const paymentTypeHandleChange = e => {
    setpaymentType(e.value);
  };

  return (
    <div className="inner_wrapper">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
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
          <li className="completed">
            <div className="icon"></div>
            <span>{t('emp_step_form.basic_details')}</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>{t('emp_step_form.employee_work_post')}</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>{t('emp_step_form.statutory_details')}</span>
          </li>
          <li className="current">
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
                <label>{t('title.payment_type')}</label>
                <ReactSelectSingle
                  value={paymentType}
                  options={paymentTypeOption}
                  filter
                  onChange={e => {
                    paymentTypeHandleChange(e);
                  }}
                  placeholder={t('emp_step_form.select_payment_type')}
                />
              </div>
            </div>
            {paymentType === 'Bank' && (
              <>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="form_group">
                    <label>{t('bank_statutory.bank_name')}</label>
                    <Input
                      type="text"
                      placeholder={t('emp_step_form.bank_name_placeholder')}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="form_group">
                    <label>{t('emp_step_form.bank_branch')}</label>
                    <Input
                      type="text"
                      placeholder={t('emp_step_form.bank_branch_placeholder')}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="form_group">
                    <label>{t('emp_step_form.account_number')}</label>
                    <Input
                      type="text"
                      placeholder={t(
                        'emp_step_form.account_number_placeholder',
                      )}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </form>
        <div className="btn_group d-flex justify-content-end">
          <Link className="btn-secondary" to="/employees/masters/dashboard">
            {t('buttonTitle.cancel')}
          </Link>
          <Link
            className="btn-secondary mx-3"
            to="/employees/masters/create-employee-step-three"
          >
            {t('title.previous')}
          </Link>
          <Link className="btn-primary" to="/employees/masters/employee-list">
            {t('buttonTitle.finish')}
          </Link>
        </div>
      </div>
    </div>
  );
}
