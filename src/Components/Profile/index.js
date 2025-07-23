import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import ProfilePhoto from '../../Assets/images/profile.png';
import userImage from '../../Assets/images/user8.png';
import UserImagesFive from '../../Assets/images/user5.png';
import UserImagesSix from '../../Assets/images/user6.png';
import UserImagesSeven from '../../Assets/images/user7.png';
import { FileUpload } from 'primereact/fileupload';
import { SplitButton } from 'primereact/splitbutton';
import EditIcon from '../../Assets/images/edit.svg';
import EmployeeProfileDetail from '../../Components/Employee/Master/EmployeeList/EmployeeProfileDetail/EmployeeProfileDetail';
import BankStatutory from '../../Components/Employee/Master/EmployeeList/EmployeeProfileDetail/BankStatutory';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import ReactCelender from '../Common/ReactCelender';
import Input from '../Common/Input';
import FamilyDetails from '../../Components/Employee/Master/EmployeeList/EmployeeProfileDetail/FamilyDetails';
import PastworkEmployment from '../../Components/Employee/Master/EmployeeList/EmployeeProfileDetail/PastworkEmployment';
import InsuranceDetails from '../../Components/Employee/Master/EmployeeList/EmployeeProfileDetail/InsuranceDetails';
import WorkPostType from '../../Components/Employee/Master/EmployeeList/EmployeeProfileDetail/WorkPostType';
import Attendance from '../../Components/Employee/Master/EmployeeList/EmployeeProfileDetail/Attendance';
import Leave from '../../Components/Employee/Master/EmployeeList/EmployeeProfileDetail/Leave';
import Compensation from '../../Components/Employee/Master/EmployeeList/EmployeeProfileDetail/Compensation';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import TimelineAndFeedback from '../Employee/Master/EmployeeList/EmployeeProfileDetail/TimelineAndFeedback';
import EmployeeDocuments from 'Components/Employee/Master/EmployeeList/EmployeeProfileDetail/EmployeeDocuments';
import { useTranslation } from 'react-i18next';

export default function MyProfile() {
  const { t } = useTranslation();
  const [title, settitle] = useState([]);
  const [gender, setgender] = useState([]);
  const [reportingAuthority, setreportingAuthority] = useState([]);
  const [personalInformation, setPersonalInformation] = useState(false);
  const items = [
    {
      label: t('title.changePassword'),
    },
    {
      label: t('title.disableLogin'),
    },
  ];
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const legalEntryoption = [
    { label: t('myProfile.mr'), value: t('myProfile.mr') },
    { label: t('myProfile.mrs'), value: t('myProfile.mrs') },
    { label: t('myProfile.miss'), value: t('myProfile.miss') },
  ];
  const genderOption = [
    { label: t('myProfile.genderMale'), value: t('myProfile.genderMale') },
    { label: t('myProfile.genderFemale'), value: t('myProfile.genderFemale') },
    { label: t('myProfile.genderOther'), value: t('myProfile.genderOther') },
  ];
  const reportingAuthorityOption = [
    {
      label: t('employeeProfileReportingTo.vishalShahValue'),
      value: t('employeeProfileReportingTo.vishalShahKey'),
    },
    {
      label: t('employeeProfileReportingTo.kevalSonvaneValue'),
      value: t('employeeProfileReportingTo.kevalSonvaneKey'),
    },
    {
      label: t('employeeProfileReportingTo.vishalShahValue'),
      value: t('employeeProfileReportingTo.vishalShahKey'),
    },
    {
      label: t('employeeProfileReportingTo.kevalSonvaneValue'),
      value: t('employeeProfileReportingTo.kevalSonvaneKey'),
    },
  ];
  const dialogFuncMap = {
    personalInformation: setPersonalInformation,
  };
  const titleHandleChange = e => {
    settitle(e.value);
  };
  const genderHandleChange = e => {
    setgender(e.value);
  };
  const reportingAuthorityHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <img
          alt={option.label}
          src={userImage}
          onError={e => (e.target.src = '')}
          className={`flag flag-${option?.label?.toLowerCase()}`}
        />
        <div className="multiple_label">{option.label}</div>
      </div>
    );
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
  return (
    <div className="inner_wrapper">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>{t('title.myProfile')}</li>
        </ul>
      </div>
      <div className="employee_top_detail bg_white_box p-3">
        <div className="row">
          <div className="col-lg-6">
            <div className="employee_left_detail d-flex">
              <div className="profile_photo">
                <div className="profile_photo_inner">
                  <img src={ProfilePhoto} alt="ProfileImage" />
                </div>
                <div className="dropdown file_upload_dropdown">
                  <button
                    type="button"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="dropdownMenuLink"
                  >
                    Edit Photo
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <FileUpload
                        mode="basic"
                        name="demo[]"
                        accept="image/*"
                        maxFileSize={1000000}
                        chooseLabel="Upload Image"
                      />
                    </li>
                    <li>
                      <span className="dropdown-item">Remove Image</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="profile_detail flex-grow-1">
                <h5 className="fw-500">{t('myProfile.title')}</h5>
                <p className="mb-1 text-light">
                  Sr. {t('userDetail.designation')}
                </p>
                <p className="text-light">{t('myProfile.department')}</p>
                <ul>
                  <li>
                    {t('title.employeeCode')} :
                    <span> {t('myProfile.employeeCode')}</span>
                  </li>
                  <li>
                    {t('myProfile.punchCodeText')} :
                    <span>{t('myProfile.punchCode')}</span>
                  </li>
                  <li>
                    {t('myProfile.dateOfJoinTitle')} :
                    <span>{t('myProfile.dateOfJoin')}</span>
                  </li>
                </ul>
                <SplitButton
                  label="Actions"
                  className="p-button-primary"
                  model={items}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="employee_right_detail">
              <ul>
                <li>
                  <b>{t('myProfile.mobileTitle')} :</b>
                  <span>{t('myProfile.mobile')}</span>
                </li>
                <li>
                  <b>{t('myProfile.emailTitle')} :</b>
                  <span>{t('myProfile.email')}</span>
                </li>
                <li>
                  <b>{t('myProfile.birthdayTitle')} :</b>
                  <span>{t('myProfile.birthday')}</span>
                </li>
                <li>
                  <b> {t('myProfile.nickNameTitle')} :</b>
                  <span>{t('myProfile.nickName')}</span>
                </li>
                <li>
                  <b> {t('myProfile.gender')} :</b>
                  <span>{t('myProfile.genderMale')}</span>
                </li>
                <li>
                  <b> {t('myProfile.reportingTo')} :</b>
                  <span className="group_member">
                    <Button
                      tooltip="Chintan Raval"
                      tooltipOptions={{
                        position: 'bottom',
                      }}
                      className="tooltip_button"
                    >
                      <img src={UserImagesFive} alt="Reporting" />
                    </Button>
                    <Button
                      tooltip="Chintan Raval"
                      tooltipOptions={{
                        position: 'bottom',
                      }}
                      className="tooltip_button"
                    >
                      <img src={UserImagesSix} alt="Reporting" />
                    </Button>
                    <Button
                      tooltip="Chintan Raval"
                      tooltipOptions={{
                        position: 'bottom',
                      }}
                      className="tooltip_button"
                    >
                      <img src={UserImagesSeven} alt="Reporting" />
                    </Button>
                    <Button
                      tooltip="Chintan Raval"
                      tooltipOptions={{
                        position: 'bottom',
                      }}
                      className="tooltip_button"
                    >
                      <img src={UserImagesFive} alt="Reporting" />
                    </Button>
                  </span>
                </li>
                <li>
                  <b>{t('myProfile.previousExperienceTitle')} :</b>
                  <span>{t('myProfile.previousExperience')}</span>
                </li>
              </ul>
              <div className="edit_wrapper">
                <button
                  type="button"
                  className="edit_btn_small"
                  onClick={() => onClick('personalInformation')}
                >
                  <img src={EditIcon} alt="Edit Button" />
                </button>
              </div>
              <Dialog
                header={t('title.employeeProfile')}
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
                      <label>{t('title.title')}</label>
                      <ReactSelectSingle
                        value={title}
                        options={legalEntryoption}
                        onChange={e => {
                          titleHandleChange(e);
                        }}
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('myProfile.punchCodeText')}</label>
                      <Input
                        type="text"
                        placeholder={t('myProfile.punchCode')}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('myProfile.dateOfBirth')} </label>
                      <ReactCelender
                        value="date"
                        placeholder={t('title.dateFormat')}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('myProfile.fullName')}</label>
                      <Input
                        type="text"
                        placeholder={t('userDetail.firstName')}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('myProfile.mobileNumber')}</label>
                      <Input type="tel" placeholder={t('myProfile.mobile')} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('myProfile.nickNameTitle')}</label>
                      <Input
                        type="text"
                        placeholder={t('myProfile.nickName')}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('myProfile.dateOfJoinTitle')}</label>
                      <ReactCelender
                        value="date"
                        placeholder={t('title.dateFormat')}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('myProfile.emailIdTitle')}</label>
                      <Input
                        type="email"
                        placeholder={t('myProfile.emailId')}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('myProfile.reportingTo')}</label>
                      <ReactSelectMultiple
                        value={reportingAuthority}
                        options={reportingAuthorityOption}
                        onChange={e => setreportingAuthority(e.value)}
                        optionLabel="name"
                        placeholder={t('title.selectReportingAuthority')}
                        filter
                        className="multiselect-custom"
                        itemTemplate={reportingAuthorityHandleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('title.employeeCode')}</label>
                      <Input
                        type="text"
                        placeholder={t('myProfile.employeeCode')}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>{t('myProfile.gender')}</label>
                      <ReactSelectSingle
                        value={gender}
                        options={genderOption}
                        onChange={e => {
                          genderHandleChange(e);
                        }}
                        placeholder={t('title.selectGender')}
                      />
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="employee_profile_tab">
        <TabView scrollable>
          <TabPanel header={t('title.employeeProfile')}>
            <EmployeeProfileDetail />
          </TabPanel>
          <TabPanel header={t('title.bankStatutory')}>
            <BankStatutory />
          </TabPanel>
          <TabPanel header={t('title.familyDetails')}>
            <FamilyDetails />
          </TabPanel>
          <TabPanel header={t('title.pastworkEmployment')}>
            <PastworkEmployment />
          </TabPanel>
          <TabPanel header={t('title.insuranceDetails')}>
            <InsuranceDetails />
          </TabPanel>
          <TabPanel header={t('title.workPostType')}>
            <WorkPostType />
          </TabPanel>
          <TabPanel header={t('title.attendance')}>
            <Attendance />
          </TabPanel>
          <TabPanel header={t('title.leave')}>
            <Leave />
          </TabPanel>
          <TabPanel header={t('title.compensation')}>
            <Compensation />
          </TabPanel>
          <TabPanel header={t('title.employeeDocuments')}>
            <EmployeeDocuments />
          </TabPanel>
          <TabPanel header={t('title.timelineFeedback')}>
            <TimelineAndFeedback />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
