import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../../Common/Input';
import ReactSelectSingle from '../../../../Common/ReactSelectSingle';
import ReactCelender from '../../../../Common/ReactCelender';
import PlusIcon from '../../../../../Assets/images/plus.svg';
import EditIcon from '../../../../../Assets/images/edit.svg';
import DeleteBtn from '../../../../../Assets/images/DeleteBtn.svg';
import { useTranslation } from 'react-i18next';

export default function InsuranceDetails() {
  const { t } = useTranslation();
  const [familyDetails, setFamilyDetails] = useState(false);
  const [insuranceType, setInsuranceType] = useState([]);
  const [relationship, setRelationship] = useState([]);
  const [educationDetails, setEducationDetails] = useState(false);
  const dialogFuncMap = {
    familyDetails: setFamilyDetails,
    educationDetails: setEducationDetails,
  };
  const insuranceTypeOption = [
    { label: 'Life Insurance', value: 'LifeInsurance' },
    { label: 'Health Insurance', value: 'HealthInsurance' },
    { label: 'Car Insurance', value: 'CarInsurance' },
    { label: 'Home Insurance', value: 'HomeInsurance' },
  ];
  const relationshipOption = [
    { label: 'Brother', value: 'Brother' },
    { label: 'Sister', value: 'Sister' },
    { label: 'Son', value: 'Son' },
    { label: 'Father', value: 'Father' },
    { label: 'Mother', value: 'Mother' },
    { label: 'Husband', value: 'Husband' },
    { label: 'Spouse', value: 'Spouse' },
    { label: 'Daughter', value: 'Daughter' },
  ];
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const insuranceTypeHandleChange = e => {
    setInsuranceType(e.value);
  };
  const relationshipHandleChange = e => {
    setRelationship(e.value);
  };
  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-end">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary me-3"
        />
        <Button
          label="Save"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const renderFooterConfirm = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary me-3"
        />
        <Button
          label="Delete"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  return (
    <div className="insurance_wrapper">
      <div className="bg_white_box">
        <div className="family_detail_hedaer p-3">
          <div className="row">
            <div className="col-6">
              <h6 className="m-0">{t('insuarance_detail.title')}</h6>
            </div>
            <div className="col-6 text-end">
              <Link
                className="btn-border small"
                onClick={() => onClick('familyDetails')}
              >
                <img src={PlusIcon} alt="PlusIcon" className="me-1" />{' '}
                {t('title.add')}
              </Link>
              <Dialog
                header={t('insuarance_detail.add_insurance_details')}
                visible={familyDetails}
                draggable={false}
                resizable={false}
                className="medium_popup"
                footer={renderFooter('familyDetails')}
                onHide={() => onHide('familyDetails')}
              >
                <div className="emergency_contact_wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('insuarance_detail.insurance_type')}</label>
                        <ReactSelectSingle
                          value={insuranceType}
                          options={insuranceTypeOption}
                          filter
                          onChange={e => {
                            insuranceTypeHandleChange(e);
                          }}
                          placeholder={t(
                            'insuarance_detail.insurance_type_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('insuarance_detail.name_of_insured')}</label>
                        <Input
                          type="text"
                          placeholder={t(
                            'insuarance_detail.name_of_insured_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.relationship')}</label>
                        <ReactSelectSingle
                          value={relationship}
                          options={relationshipOption}
                          filter
                          onChange={e => {
                            relationshipHandleChange(e);
                          }}
                          placeholder={t('myProfile.relationship_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>
                          {t('insuarance_detail.insurance_provider')}
                        </label>
                        <Input
                          type="text"
                          placeholder={t(
                            'insuarance_detail.insurance_provider_placeholder',
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('insuarance_detail.policy_number')}</label>
                        <Input
                          type="text"
                          placeholder={t(
                            'insuarance_detail.policy_number_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('insuarance_detail.sum_insured')}</label>
                        <Input
                          type="text"
                          placeholder={t(
                            'insuarance_detail.sum_insured_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('insuarance_detail.issue_date')} </label>
                        <ReactCelender
                          value="date"
                          placeholder={t('myProfile.select_date')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('insuarance_detail.expiry_date')} </label>
                        <ReactCelender
                          value="date"
                          placeholder={t('myProfile.select_date')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="data_table_one">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>
                    <span>{t('insuarance_detail.insurance_type')}</span>
                  </th>
                  <th>
                    <span>{t('insuarance_detail.name_of_insured')}</span>
                  </th>
                  <th>
                    <span>{t('myProfile.relationship')}</span>
                  </th>
                  <th>
                    <span>{t('insuarance_detail.insurance_provider')}</span>
                  </th>
                  <th>
                    <span>{t('insuarance_detail.policy_number')}</span>
                  </th>
                  <th>
                    <span>{t('insuarance_detail.sum_insured')}</span>
                  </th>
                  <th>
                    <span>{t('insuarance_detail.issue_date')}</span>
                  </th>
                  <th>
                    <span>{t('insuarance_detail.expiry_date')}</span>
                  </th>
                  <th>{t('title.action')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('insuarance_detail.insurance_type_value')}</td>
                  <td>{t('myProfile.name_value')}</td>
                  <td>{t('myProfile.relationship_value')}</td>
                  <td>{t('insuarance_detail.insurance_provider_value')}</td>
                  <td>{t('bank_statutory.uan_value')}</td>
                  <td>{t('insuarance_detail.sum_insured_value')}</td>
                  <td>{t('myProfile.birthday')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>
                    <ul className="edit_wrap d-flex">
                      <li>
                        <img src={EditIcon} alt="edit icon" />
                      </li>
                      <li onClick={() => onClick('educationDetails')}>
                        <img src={DeleteBtn} alt="delate icon" />
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>{t('insuarance_detail.insurance_type_value')}</td>
                  <td>{t('myProfile.name_value')}</td>
                  <td>{t('myProfile.relationship_value')}</td>
                  <td>{t('insuarance_detail.insurance_provider_value')}</td>
                  <td>{t('bank_statutory.uan_value')}</td>
                  <td>{t('insuarance_detail.sum_insured_value')}</td>
                  <td>{t('myProfile.birthday')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>
                    <ul className="edit_wrap d-flex">
                      <li>
                        <img src={EditIcon} alt="edit icon" />
                      </li>
                      <li onClick={() => onClick('educationDetails')}>
                        <img src={DeleteBtn} alt="delate icon" />
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Dialog
            header={t('title.confirm')}
            visible={educationDetails}
            draggable={false}
            resizable={false}
            className="small_popup confirm_popup"
            footer={renderFooterConfirm('educationDetails')}
            onHide={() => onHide('educationDetails')}
          >
            <div className="delate_popup_wrap text-center">
              <p>{t('title.confirm_message')}</p>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
