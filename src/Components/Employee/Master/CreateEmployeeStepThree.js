import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Input from '../../Common/Input';
import ReactCheckbox from '../../Common/ReactCheckbox';
import { useTranslation } from 'react-i18next';

export default function CreateEmploteeStepThree() {
  const { t } = useTranslation();
  const [cities, setCities] = useState([]);
  const onCityChange = e => {
    let selectedCities = [...cities];

    if (selectedCities.length <= 0 && e.checked) {
      selectedCities.push(e.value);
    } else {
      if (!cities.includes(e.value)) {
        selectedCities.push(e.value);
      } else {
        selectedCities.splice(selectedCities.indexOf(e.value), 1);
      }
    }
    setCities(selectedCities);
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
          <li className="current">
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
            <div className="col-md-3">
              <div className="form_group">
                <label>{t('compensation.pan_no_label')}</label>
                <Input
                  type="text"
                  placeholder={t('emp_step_form.pan_number_placeholder')}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="form_group checkbox_wrap">
                <ReactCheckbox
                  inputId="PFApplicable"
                  name="Applicable"
                  value={t('compensation.pf_applicable')}
                  onChange={onCityChange}
                  checked={cities.indexOf('PF Applicable') !== -1}
                />

                <label htmlFor="PFApplicable">
                  {t('compensation.pf_applicable')}
                </label>
              </div>
              {cities.includes('PF Applicable') && (
                <div className="collapse_wrapper ">
                  <div className="form_group">
                    <label>{t('emp_step_form.pf_number')}</label>
                    <Input type="text" placeholder={t('compensation.pan_no')} />
                    <small className="fw-500 mt-3 d-inline-block">
                      {t('emp_step_form.pf_no_format')}
                    </small>
                    <small className="fw-500 d-inline-block">
                      {t('emp_step_form.pf_example_format')}
                    </small>
                  </div>
                  <div className="form_group">
                    <label>{t('emp_step_form.uan_number_label')}</label>
                    <Input
                      type="text"
                      placeholder={t('bank_statutory.uan_value')}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-3">
              <div className="form_group checkbox_wrap">
                <ReactCheckbox
                  inputId="ESIApplicable"
                  name="Applicable"
                  value={t('compensation.esi_applicable')}
                  onChange={onCityChange}
                  checked={cities.indexOf('ESI Applicable') !== -1}
                />
                <label htmlFor="ESIApplicable">
                  {t('compensation.esi_applicable')}
                </label>
              </div>
              {cities.includes('ESI Applicable') && (
                <div className="collapse_wrapper">
                  <div className="form_group">
                    <label>{t('emp_step_form.esi_number_label')}</label>
                    <Input
                      type="text"
                      placeholder={t('bank_statutory.esi_no_value')}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-3">
              <div className="form_group checkbox_wrap">
                <ReactCheckbox
                  inputId="LWFApplicable"
                  name="Applicable"
                  value={t('emp_step_form.lwf_applicable')}
                  onChange={onCityChange}
                  checked={cities.indexOf('LWF Applicable') !== -1}
                />
                <label htmlFor="LWFApplicable">
                  {t('emp_step_form.lwf_applicable')}
                </label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form_group checkbox_wrap">
                <ReactCheckbox
                  inputId="PTApplicable"
                  name="Applicable"
                  value={t('compensation.pt_applicable')}
                  onChange={onCityChange}
                  checked={cities.indexOf('PT Applicable') !== -1}
                />
                <label htmlFor="PTApplicable">
                  {t('compensation.pt_applicable')}
                </label>
              </div>
            </div>
          </div>
        </form>
        <div className="btn_group d-flex justify-content-end">
          <Link className="btn-secondary" to="/employees/masters/dashboard">
            {t('buttonTitle.cancel')}
          </Link>
          <Link
            className="btn-secondary mx-3"
            to="/employees/masters/create-employee-step-two"
          >
            {t('title.previous')}
          </Link>
          <Link
            className="btn-primary"
            to="/employees/masters/create-employee-step-four"
          >
            {t('title.next')}
          </Link>
        </div>
      </div>
    </div>
  );
}
