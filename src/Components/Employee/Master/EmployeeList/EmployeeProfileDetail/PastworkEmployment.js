import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import Input from '../../../../Common/Input';
import ReactCelender from '../../../../Common/ReactCelender';
import PlusIcon from '../../../../../Assets/images/plus.svg';
import EditIcon from '../../../../../Assets/images/edit.svg';
import DeleteBtn from '../../../../../Assets/images/DeleteBtn.svg';
import { useTranslation } from 'react-i18next';

export default function PastworkEmployment() {
  const { t } = useTranslation();
  const [familyDetails, setFamilyDetails] = useState(false);
  const [educationDetails, setEducationDetails] = useState(false);
  const dialogFuncMap = {
    familyDetails: setFamilyDetails,
    educationDetails: setEducationDetails,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
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
    <div className="past_work_wrapper">
      <div className="bg_white_box">
        <div className="family_detail_hedaer p-3">
          <div className="row">
            <div className="col-6">
              <h6 className="m-0">{t('pastwork_employment.title')}</h6>
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
                header="Add Past Work Employment"
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
                        <label>{t('pastwork_employment.company_name')}</label>
                        <Input
                          type="text"
                          placeholder={t(
                            'pastwork_employment.company_name_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('pastwork_employment.designation')}</label>
                        <Input
                          type="text"
                          placeholder={t(
                            'pastwork_employment.designation_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('employee_profile_detail.from_date')} </label>
                        <ReactCelender
                          value="date"
                          placeholder={t('myProfile.select_date')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('employee_profile_detail.to_date')} </label>
                        <ReactCelender
                          value="date"
                          placeholder={t('myProfile.select_date')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>
                          {t('pastwork_employment.tyof_experience')}
                        </label>
                        <Input
                          type="text"
                          placeholder={t(
                            'pastwork_employment.tyof_experience_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.address')}</label>
                        <Input
                          type="text"
                          placeholder={t('myProfile.address_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('pastwork_employment.leaving_reason')}</label>
                        <Input
                          type="text"
                          placeholder={t(
                            'pastwork_employment.leaving_reason_placeholder',
                          )}
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
                    <span>{t('pastwork_employment.company_name')}</span>
                  </th>
                  <th>
                    <span>{t('pastwork_employment.designation')}</span>
                  </th>
                  <th>
                    <span>{t('employee_profile_detail.from_date')}</span>
                  </th>
                  <th>
                    <span>{t('employee_profile_detail.to_date')}</span>
                  </th>
                  <th>
                    <span>{t('pastwork_employment.tyof_experience')}</span>
                  </th>
                  <th>
                    <span>{t('myProfile.address')}</span>
                  </th>
                  <th>
                    <span>{t('pastwork_employment.leaving_reason')}</span>
                  </th>
                  <th>{t('title.action')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('pastwork_employment.company_name_value')}</td>
                  <td>{t('userDetail.designation')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>{t('pastwork_employment.tyof_experience_value')}</td>
                  <td>
                    {t('employee_profile_detail.place_of_birth_value')} ,{' '}
                    {t('myProfile.state_value')}
                  </td>
                  <td>{t('pastwork_employment.leaving_reason_value')}</td>
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
                  <td>{t('pastwork_employment.company_name_value')}</td>
                  <td>{t('userDetail.designation')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>{t('pastwork_employment.tyof_experience_value')}</td>
                  <td>
                    {t('employee_profile_detail.place_of_birth_value')} ,{' '}
                    {t('myProfile.state_value')}
                  </td>
                  <td>{t('pastwork_employment.leaving_reason_value')}</td>
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
