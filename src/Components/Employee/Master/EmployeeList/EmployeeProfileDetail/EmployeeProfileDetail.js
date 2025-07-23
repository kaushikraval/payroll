import React, { useState } from 'react';
import EditIcon from '../../../../../Assets/images/edit.svg';
import { Link } from 'react-router-dom';
import PlusIcon from '../../../../../Assets/images/plus.svg';
import ReactSelectSingle from '../../../../Common/ReactSelectSingle';
import ReactCelender from '../../../../Common/ReactCelender';
import Input from '../../../../Common/Input';
import ReactRadioButton from '../../../../Common/ReactRadioButton';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import ReactCheckbox from '../../../../Common/ReactCheckbox';
import { useTranslation } from 'react-i18next';
export default function EmployeeProfileDetail() {
  const { t } = useTranslation();
  const [nationality, setnationality] = useState([]);
  const [relationship, setRelationship] = useState([]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [relationshipSecondary, setRelationshipSecondary] = useState([]);
  const [country, setCountry] = useState([]);
  const [bloodGroup, setbloodGroup] = useState([]);
  const [maritalStatus, setmaritalStatus] = useState([]);
  const [residentialStatus, setresidentialStatus] = useState([]);
  const [isInternationalEmp, setIsInternational] = useState('No');
  const [isPhysicallyChallenged, setPhysicallyChallenged] = useState('No');
  const [isDirector, setDirector] = useState('No');
  const [religion, setreligion] = useState([]);
  const [emergencyContact, setEmergencyContact] = useState(false);
  const [personalInformation, setPersonalInformation] = useState(false);
  const [presentAddress, setPresentAddress] = useState(false);
  const [educationDetails, setEducationDetails] = useState(false);
  const [permenantAddress, setPermenantAddress] = useState(false);
  const dialogFuncMap = {
    emergencyContact: setEmergencyContact,
    personalInformation: setPersonalInformation,
    presentAddress: setPresentAddress,
    permenantAddress: setPermenantAddress,
    educationDetails: setEducationDetails,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const qualificationOption = [
    { label: 'B.E', value: 'B.E' },
    { label: 'B. Tech', value: 'B. Tech' },
    { label: 'BCA', value: 'BCA' },
    { label: 'M. Tech', value: 'M. Tech' },
    { label: 'MBA', value: 'MBA' },
    { label: 'MCA', value: 'MCA' },
    { label: 'SSC', value: 'SSC' },
    { label: 'HSC', value: 'HSC' },
  ];
  const nationalityoption = [
    { label: 'Indian', value: 'Indian' },
    { label: 'Other', value: 'Other' },
  ];
  const cityOption = [
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Bangalore', value: 'Bangalore' },
    { label: 'Hyderabad', value: 'Hyderabad' },
    { label: 'Ahmedabad', value: 'Ahmedabad' },
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Kolkata', value: 'Kolkata' },
    { label: 'Surat', value: 'Surat' },
  ];
  const stateOption = [
    { label: 'Andhra Pradesh', value: 'AndhraPradesh' },
    { label: 'Haryana', value: 'Haryana' },
    { label: 'Manipur', value: 'Manipur' },
    { label: 'Sikkim', value: 'Sikkim' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Goa', value: 'Goa' },
    { label: 'Gujarat', value: 'Gujarat' },
    { label: 'Maharashtra', value: 'Maharashtra' },
  ];
  const countryOption = [
    { label: 'Israel', value: 'Israel' },
    { label: 'Switzerland', value: 'Switzerland' },
    { label: 'Turkey', value: 'Turkey' },
    { label: 'Iran', value: 'Iran' },
    { label: 'Germany', value: 'Germany' },
    { label: 'Togo', value: 'Togo' },
    { label: 'Holy See', value: 'Holy See' },
    { label: 'India', value: 'India' },
  ];
  const relationshipSecondaryOption = [
    { label: 'Brother', value: 'Brother' },
    { label: 'Sister', value: 'Sister' },
    { label: 'Son', value: 'Son' },
    { label: 'Father', value: 'Father' },
    { label: 'Mother', value: 'Mother' },
    { label: 'Husband', value: 'Husband' },
    { label: 'Spouse', value: 'Spouse' },
    { label: 'Daughter', value: 'Daughter' },
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
  const residentialStatusoption = [
    { label: 'Indian Resident', value: 'IndianResident' },
    { label: 'Non Indian Resident ', value: 'NonIndianResident ' },
  ];
  const maritalStatusoption = [
    { label: 'Married', value: 'Married' },
    { label: 'Single', value: 'Single' },
    { label: 'Widowed', value: 'Widowed' },
    { label: 'Seperated', value: 'Seperated' },
  ];
  const religionoption = [
    { label: 'Hindu', value: 'Hindu' },
    { label: 'Christian', value: 'Christian' },
    { label: 'Muslim', value: 'Muslim' },
    { label: 'Sikh', value: 'Sikh' },
  ];
  const nationalityHandleChange = e => {
    setnationality(e.value);
  };
  const qualificationHandleChange = e => {
    setQualification(e.value);
  };
  const relationshipHandleChange = e => {
    setRelationship(e.value);
  };
  const relationshipSecondaryHandleChange = e => {
    setRelationshipSecondary(e.value);
  };
  const cityHandleChange = e => {
    setCity(e.value);
  };
  const stateHandleChange = e => {
    setState(e.value);
  };
  const countryHandleChange = e => {
    setCountry(e.value);
  };
  const bloodGroupHandleChange = e => {
    setbloodGroup(e.value);
  };
  const residentialStatusHandleChange = e => {
    setresidentialStatus(e.value);
  };
  const maritalStatusHandleChange = e => {
    setmaritalStatus(e.value);
  };
  const religionHandleChange = e => {
    setreligion(e.value);
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
  const [SameasPresentAddress, setSameasPresentAddress] = useState([]);
  const onAddressChange = e => {
    let selectedCities = [...SameasPresentAddress];

    if (selectedCities.length <= 0 && e.checked) {
      selectedCities.push(e.value);
    } else {
      if (!SameasPresentAddress.includes(e.value)) {
        selectedCities.push(e.value);
      } else {
        selectedCities.splice(selectedCities.indexOf(e.value), 1);
      }
    }
    setSameasPresentAddress(selectedCities);
  };
  return (
    <div className="employee_profile_wrapper">
      <div className="employee_profile_content">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="employee_profile_info bg_white_box p-3 h-100">
              <h6>{t('employee_profile_detail.personal_information')}</h6>
              <ul>
                <li>
                  <b>{t('employee_profile_detail.place_of_birth')} :</b>
                  <span>
                    {t('employee_profile_detail.place_of_birth_value')}
                  </span>
                </li>
                <li>
                  <b>{t('employee_profile_detail.blood_group')} :</b>
                  <span>{t('employee_profile_detail.blood_group_value')}</span>
                </li>
                <li>
                  <b>{t('employee_profile_detail.marital_status')} :</b>
                  <span>
                    {t('employee_profile_detail.marital_status_value')}
                  </span>
                </li>
                <li>
                  <b>{t('employee_profile_detail.marriage_date')} :</b>
                  <span>{t('myProfile.dateOfJoin')}</span>
                </li>
                <li>
                  <b>{t('employee_profile_detail.residential_status')} :</b>
                  <span>
                    {t('employee_profile_detail.residential_status_value')}
                  </span>
                </li>
                <li>
                  <b>{t('employee_profile_detail.religion')} :</b>
                  <span>{t('employee_profile_detail.religion_value')}</span>
                </li>
                <li>
                  <b>{t('employee_profile_detail.father_name')} :</b>
                  <span>{t('employee_profile_detail.father_name_value')}</span>
                </li>
                <li>
                  <b>{t('employee_profile_detail.spouse_name')} :</b>
                  <span>{t('employee_profile_detail.spouse_name_value')}</span>
                </li>
                <li>
                  <b>{t('employee_profile_detail.international_employee')} :</b>
                  <span>{t('title.no')}</span>
                </li>
                <li>
                  <b>{t('employee_profile_detail.physically_challenged')} :</b>
                  <span>{t('title.yes')}</span>
                </li>
                <li>
                  <b>{t('employee_profile_detail.director')} :</b>
                  <span>{t('title.no')}</span>
                </li>
              </ul>
              <button
                type="button"
                className="edit_btn_small"
                onClick={() => onClick('personalInformation')}
              >
                <img src={EditIcon} alt="Edit Button" />
              </button>
              <Dialog
                header={t('employee_profile_detail.personal_information')}
                visible={personalInformation}
                draggable={false}
                resizable={false}
                className="medium_popup"
                footer={renderFooter('personalInformation')}
                onHide={() => onHide('personalInformation')}
              >
                <div className="row">
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>
                        {t('employee_profile_detail.place_of_birth')}{' '}
                      </label>
                      <Input
                        type="text"
                        value=""
                        placeholder={t(
                          'employee_profile_detail.place_of_birth_placeholder',
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('employee_profile_detail.nationality')}</label>
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
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('employee_profile_detail.spouse_name')}</label>
                      <Input
                        type="text"
                        value=""
                        placeholder={t(
                          'employee_profile_detail.spouse_name_placeholder',
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('employee_profile_detail.blood_group')}</label>
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
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>
                        {t('employee_profile_detail.residential_status')}
                      </label>
                      <ReactSelectSingle
                        value={residentialStatus}
                        options={residentialStatusoption}
                        filter
                        onChange={e => {
                          residentialStatusHandleChange(e);
                        }}
                        placeholder={t(
                          'employee_profile_detail.residential_status_placeholder',
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label className="mb-3">
                        {t('employee_profile_detail.international_employee')}
                      </label>
                      <div className="radio_button_wrapper d-flex">
                        <div className="radio_button">
                          <ReactRadioButton
                            inputId="internationalEmp"
                            name="internationalEmp"
                            value={t('title.yes')}
                            onChange={e => setIsInternational(e.value)}
                            checked={isInternationalEmp === t('title.yes')}
                          />
                          <label className="m-0" htmlFor="internationalEmp">
                            {t('title.yes')}
                          </label>
                        </div>
                        <div className="radio_button">
                          <ReactRadioButton
                            inputId="internationalEmp1"
                            name="internationalEmp1"
                            value={t('title.no')}
                            onChange={e => setIsInternational(e.value)}
                            checked={isInternationalEmp === t('title.no')}
                          />
                          <label className="m-0" htmlFor="internationalEmp1">
                            {t('title.no')}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>
                        {t('employee_profile_detail.marital_status')}
                      </label>
                      <ReactSelectSingle
                        value={maritalStatus}
                        options={maritalStatusoption}
                        filter
                        onChange={e => {
                          maritalStatusHandleChange(e);
                        }}
                        placeholder={t(
                          'employee_profile_detail.marital_status_placeholder',
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('employee_profile_detail.religion')}</label>
                      <ReactSelectSingle
                        value={religion}
                        options={religionoption}
                        filter
                        onChange={e => {
                          religionHandleChange(e);
                        }}
                        placeholder={t(
                          'employee_profile_detail.religion_placeholder',
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label className="mb-3">
                        {t('employee_profile_detail.physically_challenged')}
                      </label>
                      <div className="radio_button_wrapper d-flex">
                        <div className="radio_button">
                          <ReactRadioButton
                            inputId="physicallyChallenged"
                            name="physicallyChallenged"
                            value={t('title.yes')}
                            onChange={e => setPhysicallyChallenged(e.value)}
                            checked={isPhysicallyChallenged === t('title.yes')}
                          />
                          <label className="m-0" htmlFor="physicallyChallenged">
                            {t('title.yes')}
                          </label>
                        </div>
                        <div className="radio_button">
                          <ReactRadioButton
                            inputId="physicallyChallenged1"
                            name="physicallyChallenged1"
                            value={t('title.no')}
                            onChange={e => setPhysicallyChallenged(e.value)}
                            checked={isPhysicallyChallenged === t('title.no')}
                          />
                          <label
                            className="m-0"
                            htmlFor="physicallyChallenged1"
                          >
                            {t('title.no')}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>
                        {t('employee_profile_detail.marriage_date')}
                      </label>
                      <ReactCelender
                        value="date"
                        placeholder={t('title.dateFormat')}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('employee_profile_detail.father_name')}</label>
                      <Input
                        type="text"
                        value=""
                        placeholder={t(
                          'employee_profile_detail.father_name_placeholder',
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label className="mb-3">
                        {t('employee_profile_detail.director')}
                      </label>
                      <div className="radio_button_wrapper d-flex">
                        <div className="radio_button">
                          <ReactRadioButton
                            inputId="Director"
                            name="Director"
                            value={t('title.yes')}
                            onChange={e => setDirector(e.value)}
                            checked={isDirector === t('title.yes')}
                          />
                          <label className="m-0" htmlFor="Director">
                            {t('title.yes')}
                          </label>
                        </div>
                        <div className="radio_button">
                          <ReactRadioButton
                            inputId="Director1"
                            name="Director1"
                            value={t('title.no')}
                            onChange={e => setDirector(e.value)}
                            checked={isDirector === t('title.no')}
                          />
                          <label className="m-0" htmlFor="Director1">
                            {t('title.no')}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="employee_profile_info bg_white_box p-3 h-100">
              <h6>{t('employee_profile_detail.emergency_contact')}</h6>
              <div className="emergency_contact_wrap">
                <div className="emergency_contact">
                  <h4>{t('employee_profile_detail.primary')}</h4>
                  <ul>
                    <li>
                      <b>{t('myProfile.name')} :</b>
                      <span>{t('myProfile.name_value')}</span>
                    </li>
                    <li>
                      <b>{t('myProfile.relationship')} :</b>
                      <span>{t('myProfile.relationship_value')}</span>
                    </li>
                    <li>
                      <b>{t('myProfile.mobileTitle')} :</b>
                      <span>{t('myProfile.mobile')}</span>
                    </li>
                    <li>
                      <b>{t('myProfile.address')} :</b>
                      <span>{t('myProfile.address_value')}</span>
                    </li>
                    <li>
                      <b>{t('myProfile.emailTitle')} :</b>
                      <span>{t('myProfile.email')}</span>
                    </li>
                  </ul>
                </div>
                <div className="emergency_contact">
                  <h4>{t('employee_profile_detail.secondary')}</h4>
                  <ul>
                    <li>
                      <b>{t('myProfile.name')} :</b>
                      <span>{t('myProfile.nickName')}</span>
                    </li>
                    <li>
                      <b>{t('myProfile.relationship')} :</b>
                      <span>{t('myProfile.relationship_value')}</span>
                    </li>
                    <li>
                      <b>{t('myProfile.mobileTitle')} :</b>
                      <span>{t('myProfile.mobile')}</span>
                    </li>
                    <li>
                      <b>{t('myProfile.address')} :</b>
                      <span>{t('myProfile.address_value')}</span>
                    </li>
                    <li>
                      <b>{t('myProfile.emailTitle')} :</b>
                      <span>{t('myProfile.email')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                type="button"
                className="edit_btn_small"
                onClick={() => onClick('emergencyContact')}
              >
                <img src={EditIcon} alt="Edit Button" />
              </button>
              <Dialog
                header={t('employee_profile_detail.emergency_contact')}
                visible={emergencyContact}
                draggable={false}
                resizable={false}
                className="medium_popup"
                footer={renderFooter('emergencyContact')}
                onHide={() => onHide('emergencyContact')}
              >
                <div className="emergency_contact_wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="text-secondary">
                        {t('employee_profile_detail.primary')}
                      </h6>
                      <div className="form_group">
                        <label>{t('myProfile.name')}</label>
                        <Input
                          type="text"
                          value={t('myProfile.name_value')}
                          placeholder={t('myProfile.name_placeholder')}
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
                        <label>{t('myProfile.mobileTitle')}</label>
                        <Input
                          type="tel"
                          value={t('myProfile.mobile')}
                          placeholder={t('myProfile.mobile_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.address')}</label>
                        <Input
                          type="text"
                          value={t('myProfile.address_value')}
                          placeholder={t('myProfile.address_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.emailTitle')}</label>
                        <Input
                          type="email"
                          value={t('myProfile.email')}
                          placeholder={t('myProfile.email_placeholder')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h6 className="text-secondary">
                        {t('employee_profile_detail.secondary')}
                      </h6>
                      <div className="form_group">
                        <label>{t('myProfile.name')}</label>
                        <Input
                          type="text"
                          value={t('myProfile.name_value')}
                          placeholder={t('myProfile.name_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.relationship')}</label>
                        <ReactSelectSingle
                          value={relationshipSecondary}
                          options={relationshipSecondaryOption}
                          filter
                          onChange={e => {
                            relationshipSecondaryHandleChange(e);
                          }}
                          placeholder={t('myProfile.relationship_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.mobileTitle')}</label>
                        <Input
                          type="tel"
                          value={t('myProfile.mobile')}
                          placeholder={t('myProfile.mobile_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.address')}</label>
                        <Input
                          type="text"
                          value={t('myProfile.address_value')}
                          placeholder={t('myProfile.address_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.emailTitle')}</label>
                        <Input
                          type="email"
                          value={t('myProfile.email')}
                          placeholder={t('myProfile.email_placeholder')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="employee_profile_info bg_white_box p-3 h-100">
              <h6>{t('employee_profile_detail.present_address')}</h6>
              <ul>
                <li>
                  <b>{t('myProfile.name')} :</b>
                  <span>{t('employee_profile_detail.spouse_name_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.address_line1')}</b>
                  <span>{t('myProfile.address_line1_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.address_line2')}</b>
                  <span>{t('myProfile.address_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.city')} :</b>
                  <span>
                    {t('employee_profile_detail.place_of_birth_value')}
                  </span>
                </li>
                <li>
                  <b>{t('myProfile.state')} :</b>
                  <span>{t('myProfile.state_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.country')} :</b>
                  <span>{t('myProfile.country_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.pincode')} :</b>
                  <span>{t('myProfile.pincode_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.mobileTitle')} :</b>
                  <span>{t('myProfile.mobile')}</span>
                </li>
                <li>
                  <b>{t('myProfile.emailTitle')} :</b>
                  <span>{t('myProfile.email')}</span>
                </li>
              </ul>
              <button
                type="button"
                className="edit_btn_small"
                onClick={() => onClick('presentAddress')}
              >
                <img src={EditIcon} alt="Edit Button" />
              </button>
              <Dialog
                header={t('employee_profile_detail.present_address')}
                visible={presentAddress}
                draggable={false}
                resizable={false}
                className="medium_popup"
                footer={renderFooter('presentAddress')}
                onHide={() => onHide('presentAddress')}
              >
                <div className="emergency_contact_wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('myProfile.name')}</label>
                        <Input
                          type="text"
                          value={t('employee_profile_detail.spouse_name_value')}
                          placeholder={t('myProfile.name_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.address_line1')}</label>
                        <Input
                          type="text"
                          value={t('myProfile.address_line1_value')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.address_line2')}</label>
                        <Input
                          type="text"
                          value={t('myProfile.address_value')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.mobileTitle')}</label>
                        <Input
                          type="tel"
                          value={t('myProfile.mobile')}
                          placeholder={t('myProfile.mobile_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.emailIdTitle')}</label>
                        <Input
                          type="email"
                          value={t('myProfile.email')}
                          placeholder={t('myProfile.email_placeholder')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('myProfile.city')}</label>
                        <ReactSelectSingle
                          value={city}
                          options={cityOption}
                          filter
                          onChange={e => {
                            cityHandleChange(e);
                          }}
                          placeholder={t('myProfile.city_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.state')}</label>
                        <ReactSelectSingle
                          value={state}
                          options={stateOption}
                          filter
                          onChange={e => {
                            stateHandleChange(e);
                          }}
                          placeholder={t('myProfile.state_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.country')}</label>
                        <ReactSelectSingle
                          value={country}
                          options={countryOption}
                          filter
                          onChange={e => {
                            countryHandleChange(e);
                          }}
                          placeholder={t('myProfile.country_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.pincode')}</label>
                        <Input
                          type="text"
                          value={t('myProfile.pincode_value')}
                          placeholder={t('myProfile.pincode_placeholder')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="employee_profile_info bg_white_box p-3 h-100">
              <h6>{t('employee_profile_detail.permenant_address')}</h6>
              <ul>
                <li>
                  <b>{t('myProfile.name')} :</b>
                  <span>{t('employee_profile_detail.spouse_name_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.address_line1')}</b>
                  <span>{t('myProfile.address_line1_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.address_line2')}</b>
                  <span>{t('myProfile.address_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.city')} :</b>
                  <span>
                    {t('employee_profile_detail.place_of_birth_value')}
                  </span>
                </li>
                <li>
                  <b>{t('myProfile.state')} :</b>
                  <span>{t('myProfile.state_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.country')} :</b>
                  <span>{t('myProfile.country_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.pincode')} :</b>
                  <span>{t('myProfile.pincode_value')}</span>
                </li>
                <li>
                  <b>{t('myProfile.mobileTitle')} :</b>
                  <span>{t('myProfile.mobile')}</span>
                </li>
                <li>
                  <b>{t('myProfile.emailTitle')} :</b>
                  <span>{t('myProfile.email')}</span>
                </li>
              </ul>
              <button
                type="button"
                className="edit_btn_small"
                onClick={() => onClick('permenantAddress')}
              >
                <img src={EditIcon} alt="Edit Button" />
              </button>
              <Dialog
                header={t('employee_profile_detail.permenant_address')}
                visible={permenantAddress}
                draggable={false}
                resizable={false}
                className="medium_popup"
                footer={renderFooter('permenantAddress')}
                onHide={() => onHide('permenantAddress')}
              >
                <div className="emergency_contact_wrap">
                  <div className="form_group checkbox_wrap">
                    <ReactCheckbox
                      inputId="SameasPresentAddress"
                      name="SameasPresentAddress"
                      value="Same as Present Address"
                      onChange={onAddressChange}
                      checked={
                        SameasPresentAddress.indexOf(
                          'Same as Present Address',
                        ) !== -1
                      }
                    />

                    <label htmlFor="SameasPresentAddress">
                      {t('employee_profile_detail.same_as_present_address')}
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('myProfile.name')}</label>
                        <Input
                          type="text"
                          value={t('employee_profile_detail.spouse_name_value')}
                          placeholder={t('myProfile.name_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.address_line1')}</label>
                        <Input
                          type="text"
                          value={t('myProfile.address_line1_value')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.address_line2')}</label>
                        <Input
                          type="text"
                          value={t('myProfile.address_value')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.mobileTitle')}</label>
                        <Input
                          type="tel"
                          value={t('myProfile.mobile')}
                          placeholder={t('myProfile.mobile_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.emailIdTitle')}</label>
                        <Input
                          type="email"
                          value={t('myProfile.email')}
                          placeholder={t('myProfile.email_placeholder')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('myProfile.city')}</label>
                        <ReactSelectSingle
                          value={city}
                          options={cityOption}
                          filter
                          onChange={e => {
                            cityHandleChange(e);
                          }}
                          placeholder={t('myProfile.city_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.state')}</label>
                        <ReactSelectSingle
                          value={state}
                          options={stateOption}
                          filter
                          onChange={e => {
                            stateHandleChange(e);
                          }}
                          placeholder={t('myProfile.state_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.country')}</label>
                        <ReactSelectSingle
                          value={country}
                          options={countryOption}
                          filter
                          onChange={e => {
                            countryHandleChange(e);
                          }}
                          placeholder={t('myProfile.country_placeholder')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.pincode')}</label>
                        <Input
                          type="text"
                          value={t('myProfile.pincode_value')}
                          placeholder={t('myProfile.pincode_placeholder')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="employee_education_wrap bg_white_box">
        <div className="employee_education_header p-3">
          <div className="row">
            <div className="col-6">
              <h6>{t('employee_profile_detail.education_details')}</h6>
            </div>
            <div className="col-6 text-end">
              <Link
                className="btn-border small"
                onClick={() => onClick('educationDetails')}
              >
                <img src={PlusIcon} alt="PlusIcon" className="me-1" />{' '}
                {t('title.add')}
              </Link>
              <Dialog
                header={t('employee_profile_detail.edit_education_details')}
                visible={educationDetails}
                draggable={false}
                resizable={false}
                className="medium_popup"
                footer={renderFooter('educationDetails')}
                onHide={() => onHide('educationDetails')}
              >
                <div className="emergency_contact_wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>
                          {t('employee_profile_detail.qualification')}
                        </label>
                        <ReactSelectSingle
                          value={qualification}
                          options={qualificationOption}
                          filter
                          onChange={e => {
                            qualificationHandleChange(e);
                          }}
                          placeholder={t(
                            'employee_profile_detail.qualification_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('employee_profile_detail.from_date')} </label>
                        <ReactCelender
                          value="date"
                          placeholder={t('title.dateFormat')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('employee_profile_detail.to_date')} </label>
                        <ReactCelender
                          value="date"
                          placeholder={t('title.dateFormat')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('employee_profile_detail.institute')}</label>
                        <Input
                          type="text"
                          value={t('employee_profile_detail.institute_value')}
                          placeholder={t(
                            'employee_profile_detail.institute_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>
                          {t('employee_profile_detail.per_or_grade')}
                        </label>
                        <Input
                          type="text"
                          value="82%"
                          placeholder={t(
                            'employee_profile_detail.per_or_grade_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>
                          {t('employee_profile_detail.qualification_area')}
                        </label>
                        <Input
                          type="text"
                          value={t(
                            'employee_profile_detail.qualification_area_value',
                          )}
                          placeholder={t(
                            'employee_profile_detail.qualification_area_placeholder',
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
                    <span>{t('employee_profile_detail.qualification')}</span>
                  </th>
                  <th>
                    <span>{t('employee_profile_detail.from_date')}</span>
                  </th>
                  <th>
                    <span>{t('employee_profile_detail.to_date')}</span>
                  </th>
                  <th>
                    <span>{t('employee_profile_detail.institute')}</span>
                  </th>
                  <th>
                    <span>{t('employee_profile_detail.per_or_grade')}</span>
                  </th>
                  <th>
                    <span>
                      {t('employee_profile_detail.qualification_area')}
                    </span>
                  </th>
                  <th>{t('title.action')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('employee_profile_detail.qualification_value')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>{t('employee_profile_detail.institute_value')}</td>
                  <td>80%</td>
                  <td>
                    {t('employee_profile_detail.qualification_area_value')}
                  </td>
                  <td>
                    <img src={EditIcon} alt="edit icon" />
                  </td>
                </tr>
                <tr>
                  <td>{t('employee_profile_detail.qualification_value')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>{t('myProfile.dateOfJoin')}</td>
                  <td>{t('employee_profile_detail.institute_value')}</td>
                  <td>80%</td>
                  <td>
                    {t('employee_profile_detail.qualification_area_value')}
                  </td>
                  <td>
                    <img src={EditIcon} alt="edit icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
