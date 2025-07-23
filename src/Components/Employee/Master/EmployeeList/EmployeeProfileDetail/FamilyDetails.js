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

export default function FamilyDetails() {
  const { t } = useTranslation();
  const [familyDetails, setFamilyDetails] = useState(false);
  const [bloodGroup, setbloodGroup] = useState([]);
  const [gender, setgender] = useState([]);
  const [relationship, setRelationship] = useState([]);
  const [nationality, setnationality] = useState([]);
  const [educationDetails, setEducationDetails] = useState(false);
  const dialogFuncMap = {
    familyDetails: setFamilyDetails,
    educationDetails: setEducationDetails,
  };
  const bloodGroupoption = [
    { label: 'A+', value: 'A+' },
    { label: 'A-', value: 'A-' },
    { label: 'B+', value: 'B+' },
    { label: 'B-', value: 'B-' },
    { label: 'AB+', value: 'AB+' },
    { label: 'AB-', value: 'AB-' },
    { label: 'O+', value: 'O+' },
    { label: 'O-', value: 'O-' },
  ];
  const genderOption = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
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
  const nationalityoption = [
    { label: 'Indian', value: 'Indian' },
    { label: 'Other', value: 'Other' },
  ];
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const bloodGroupHandleChange = e => {
    setbloodGroup(e.value);
  };
  const genderHandleChange = e => {
    setgender(e.value);
  };
  const relationshipHandleChange = e => {
    setRelationship(e.value);
  };
  const nationalityHandleChange = e => {
    setnationality(e.value);
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
    <div className="family_detail_wrapper">
      <div className="bg_white_box">
        <div className="family_detail_hedaer p-3">
          <div className="row">
            <div className="col-6">
              <h6 className="m-0">{t('family_details.title')}</h6>
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
                header={t('family_details.add_family_details')}
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
                        <label>{t('myProfile.name')}</label>
                        <Input
                          type="text"
                          value=""
                          placeholder={t('myProfile.name_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.dateOfBirth')} </label>
                        <ReactCelender
                          value="date"
                          placeholder={t('title.dateFormat')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.gender')}</label>
                        <ReactSelectSingle
                          value={gender}
                          options={genderOption}
                          filter
                          onChange={e => {
                            genderHandleChange(e);
                          }}
                          placeholder={t('title.selectGender')}
                        />
                      </div>
                      <div className="form_group">
                        <label>
                          {t('employee_profile_detail.blood_group')}
                        </label>
                        <ReactSelectSingle
                          value={bloodGroup}
                          options={bloodGroupoption}
                          filter
                          onChange={e => {
                            bloodGroupHandleChange(e);
                          }}
                          placeholder={t(
                            'employee_profile_detail.blood_group_placeholder',
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
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
                        <label>{t('family_details.profession')}</label>
                        <Input
                          type="text"
                          placeholder={t(
                            'family_details.profession_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>
                          {t('employee_profile_detail.nationality')}
                        </label>
                        <ReactSelectSingle
                          value={nationality}
                          options={nationalityoption}
                          filter
                          onChange={e => {
                            nationalityHandleChange(e);
                          }}
                          placeholder={t(
                            'employee_profile_detail.nationality_placeholder',
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
                    <span>{t('myProfile.name')}</span>
                  </th>
                  <th>
                    <span>{t('myProfile.dob')}</span>
                  </th>
                  <th>
                    <span>{t('myProfile.gender')}</span>
                  </th>
                  <th>
                    <span>{t('employee_profile_detail.blood_group')}</span>
                  </th>
                  <th>
                    <span>{t('myProfile.relationship')}</span>
                  </th>
                  <th>
                    <span>{t('family_details.profession')}</span>
                  </th>
                  <th>
                    <span>{t('employee_profile_detail.nationality')}</span>
                  </th>
                  <th>
                    <span>{t('myProfile.address')}</span>
                  </th>
                  <th>{t('title.action')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('userDetail.firstName')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>{t('myProfile.genderMale')}</td>
                  <td>{t('employee_profile_detail.blood_group_value')}</td>
                  <td>{t('myProfile.relationship_value')}</td>
                  <td>{t('myProfile.department')}</td>
                  <td>{t('employee_profile_detail.nationality_value')}</td>
                  <td>{t('employee_profile_detail.place_of_birth_value')}</td>
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
                  <td>{t('userDetail.secondName')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>{t('myProfile.genderMale')}</td>
                  <td>{t('employee_profile_detail.blood_group_value')}</td>
                  <td>{t('myProfile.relationship_value')}</td>
                  <td>{t('myProfile.department')}</td>
                  <td>{t('employee_profile_detail.nationality_value')}</td>
                  <td>{t('employee_profile_detail.place_of_birth_value')}</td>
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
