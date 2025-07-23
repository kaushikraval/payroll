import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import ProfilePhoto from '../../../../Assets/images/profile.png';
import userImage from '../../../../Assets/images/user8.png';
import UserImagesFive from '../../../../Assets/images/user5.png';
import UserImagesSix from '../../../../Assets/images/user6.png';
import UserImagesSeven from '../../../../Assets/images/user7.png';
import { FileUpload } from 'primereact/fileupload';
import { SplitButton } from 'primereact/splitbutton';
import EditIcon from '../../../../Assets/images/edit.svg';
import FeedbackIcon from '../../../../Assets/images/feedback-icon.svg';
import BedgeIcon from '../../../../Assets/images/bedge-icon.svg';
import EyeIcon from '../../../../Assets/images/eyes.svg';
import EmployeeProfileDetail from '../EmployeeList/EmployeeProfileDetail/EmployeeProfileDetail';
import BankStatutory from './EmployeeProfileDetail/BankStatutory';
import ReactSelectSingle from '../../../Common/ReactSelectSingle';
import ReactSelectMultiple from '../../../Common/ReactSelectMultiple';
import ReactCelender from '../../../Common/ReactCelender';
import Input from '../../../Common/Input';
import FamilyDetails from './EmployeeProfileDetail/FamilyDetails';
import PastworkEmployment from './EmployeeProfileDetail/PastworkEmployment';
import InsuranceDetails from './EmployeeProfileDetail/InsuranceDetails';
import WorkPostType from './EmployeeProfileDetail/WorkPostType';
import Attendance from './EmployeeProfileDetail/Attendance';
import Leave from './EmployeeProfileDetail/Leave';
import Compensation from './EmployeeProfileDetail/Compensation';
import EmployeeDocuments from './EmployeeProfileDetail/EmployeeDocuments';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Sidebar } from 'primereact/sidebar';
import TextArea from '../../../Common/TextArea';
import ReactCheckbox from '../../../Common/ReactCheckbox';
import TimelineAndFeedback from './EmployeeProfileDetail/TimelineAndFeedback';

export default function EmployeeProfile() {
  const [feedbackSidebar, setFeedbackSidebar] = useState(false);
  const [praiseSidebar, setPraiseSidebar] = useState(false);
  const [postToWall, setPostToWall] = useState([]);
  const [title, settitle] = useState([]);
  const [gender, setgender] = useState([]);
  const [coreValue, setCoreValue] = useState([]);
  const [reportingAuthority, setreportingAuthority] = useState([]);
  const [personalInformation, setPersonalInformation] = useState(false);

  const chooseOptions = {
    icon: 'pi pi-fw pi-link',
    iconOnly: false,
    className: 'custom-choose-btn p-button-rounded p-button-outlined',
  };
  const items = [
    {
      label: 'Change Password',
    },
    {
      label: 'Disable Login',
    },
  ];
  const legalEntryoption = [
    { label: 'Mr.', value: 'Mr.' },
    { label: 'Mrs', value: 'Mrs' },
    { label: 'Miss', value: 'Miss' },
  ];
  const coreValueOption = [
    { label: 'Mr.', value: 'Mr.' },
    { label: 'Mrs', value: 'Mrs' },
    { label: 'Miss', value: 'Miss' },
  ];
  const genderOption = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
  ];
  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const dialogFuncMap = {
    personalInformation: setPersonalInformation,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onpollChange = e => {
    let selectedCities = [...postToWall];

    if (selectedCities.length <= 0 && e.checked) {
      selectedCities.push(e.value);
    } else {
      if (!postToWall.includes(e.value)) {
        selectedCities.push(e.value);
      } else {
        selectedCities.splice(selectedCities.indexOf(e.value), 1);
      }
    }
    setPostToWall(selectedCities);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const titleHandleChange = e => {
    settitle(e.value);
  };
  const coreValueHandleChange = e => {
    setCoreValue(e.value);
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
          className="btn-secondary"
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
          <li>
            <b>Employees</b>
          </li>
          <li>
            <b>Masters</b>
          </li>
          <li>
            <b>
              <Link to="/employees/masters/employee-list">
                List & Directory
              </Link>
            </b>
          </li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="employee_top_detail bg_white_box p-3">
        <div className="row">
          <div className="col-md-6">
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
                <h5 className="fw-500">Mr. Dhaval Patel</h5>
                <p className="mb-1 text-light">Sr. UI/UX Designer</p>
                <p className="text-light">Web Designing</p>
                <ul>
                  <li>
                    Employee Code : <span>10001</span>
                  </li>
                  <li>
                    Punch Code : <span>1001</span>
                  </li>
                  <li>
                    Date Of Join : <span>01 Feb 2022</span>
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
          <div className="col-md-6">
            <div className="employee_right_detail">
              <ul>
                <li>
                  <b>Mobile :</b>
                  <span>8585858585</span>
                </li>
                <li>
                  <b>Email :</b>
                  <span>info@example.com</span>
                </li>
                <li>
                  <b>Birthday :</b>
                  <span>01 Oct 1994</span>
                </li>
                <li>
                  <b> Nick Name :</b>
                  <span>Shiv Parekh</span>
                </li>
                <li>
                  <b> Gender :</b>
                  <span>Male</span>
                </li>
                <li>
                  <b> Reporting To :</b>
                  <span className="group_member">
                    <Button
                      onClick={() => onClick('leaveHistory')}
                      placeholder="Right"
                      tooltip="Chintan Raval"
                      tooltipOptions={{
                        position: 'bottom',
                      }}
                      className="tooltip_button"
                    >
                      <img src={UserImagesFive} alt="Reporting" />
                    </Button>
                    <Button
                      onClick={() => onClick('leaveHistory')}
                      placeholder="Right"
                      tooltip="Chintan Raval"
                      tooltipOptions={{
                        position: 'bottom',
                      }}
                      className="tooltip_button"
                    >
                      <img src={UserImagesSix} alt="Reporting" />
                    </Button>
                    <Button
                      onClick={() => onClick('leaveHistory')}
                      placeholder="Right"
                      tooltip="Chintan Raval"
                      tooltipOptions={{
                        position: 'bottom',
                      }}
                      className="tooltip_button"
                    >
                      <img src={UserImagesSeven} alt="Reporting" />
                    </Button>
                    <Button
                      onClick={() => onClick('leaveHistory')}
                      placeholder="Right"
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
                  <b>Previous Experience :</b>
                  <span>3 Years 2 Months</span>
                </li>
              </ul>
              <div className="edit_wrapper">
                <div className="feedback_wrap">
                  <Button
                    tooltip="Give Feedback"
                    tooltipOptions={{
                      position: 'bottom',
                    }}
                    className="tooltip_button feedback_btn"
                    onClick={() => setFeedbackSidebar(true)}
                  >
                    <img src={FeedbackIcon} alt="Edit Button" />
                  </Button>
                  <Button
                    tooltip="Give Praise"
                    tooltipOptions={{
                      position: 'bottom',
                    }}
                    className="tooltip_button feedback_btn ms-2"
                    onClick={() => setPraiseSidebar(true)}
                  >
                    <img src={BedgeIcon} alt="Edit Button" />
                  </Button>
                </div>
                <button
                  type="button"
                  className="edit_btn_small"
                  onClick={() => onClick('personalInformation')}
                >
                  <img src={EditIcon} alt="Edit Button" />
                </button>
              </div>
              <Dialog
                header="Employee Profile"
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
                      <label>Title</label>
                      <ReactSelectSingle
                        value={title}
                        options={legalEntryoption}
                        filter
                        onChange={e => {
                          titleHandleChange(e);
                        }}
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>Punch Code</label>
                      <Input type="text" placeholder="1001" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>Date of Birth </label>
                      <ReactCelender value="date" placeholder="DD/MM/YYYY" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>Full Name</label>
                      <Input type="text" placeholder="Dhaval Patel" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>Mobile Number</label>
                      <Input type="tel" placeholder="8585858585" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>Nick Name</label>
                      <Input type="text" placeholder="Shiv Parekh" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>Date of Join </label>
                      <ReactCelender value="date" placeholder="DD/MM/YYYY" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>Email ID</label>
                      <Input type="email" placeholder="tempcm@gmail.com" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>Reporting To</label>
                      <ReactSelectMultiple
                        value={reportingAuthority}
                        options={reportingAuthorityOption}
                        onChange={e => setreportingAuthority(e.value)}
                        optionLabel="name"
                        placeholder="Select Reporting Authority"
                        filter
                        className="multiselect-custom"
                        itemTemplate={reportingAuthorityHandleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>Employee Code</label>
                      <Input type="text" placeholder="1001" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form_group">
                      <label>Gender</label>
                      <ReactSelectSingle
                        value={gender}
                        options={genderOption}
                        filter
                        onChange={e => {
                          genderHandleChange(e);
                        }}
                        placeholder="Select Gender"
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
          <TabPanel header="Employee Profile">
            <EmployeeProfileDetail />
          </TabPanel>
          <TabPanel header="Bank & Statutory">
            <BankStatutory />
          </TabPanel>
          <TabPanel header="Family Details">
            <FamilyDetails />
          </TabPanel>
          <TabPanel header="Pastwork Employment">
            <PastworkEmployment />
          </TabPanel>
          <TabPanel header="Insurance Details">
            <InsuranceDetails />
          </TabPanel>
          <TabPanel header="Work & Post Type">
            <WorkPostType />
          </TabPanel>
          <TabPanel header="Attendance">
            <Attendance />
          </TabPanel>
          <TabPanel header="Leave">
            <Leave />
          </TabPanel>
          <TabPanel header="Compensation">
            <Compensation />
          </TabPanel>
          <TabPanel header="Employee Documents">
            <EmployeeDocuments />
          </TabPanel>
          <TabPanel header="Timeline & Feedback">
            <TimelineAndFeedback />
          </TabPanel>
        </TabView>
      </div>
      <Sidebar
        visible={feedbackSidebar}
        position="right"
        onHide={() => setFeedbackSidebar(false)}
      >
        <div className="feedback_Wrapper">
          <div className="feedback_Title_Wrapper">
            <h3>Give Feedback to Dhaval Patel</h3>
          </div>
          <div className="feedback_content_wrap">
            <div className="user_feedback_top">
              <div className="user_img">
                <img src={userImage} alt="userImage" />
              </div>
              <div className="user_name">
                <p>
                  Dhaval Patel <span>UI/UX Designer</span>
                </p>
              </div>
            </div>
            <div className="form_group">
              <label>Select a Core value</label>
              <ReactSelectSingle
                value={coreValue}
                options={coreValueOption}
                filter
                onChange={e => {
                  coreValueHandleChange(e);
                }}
                placeholder="Select"
              />
            </div>
            <div className="form_group">
              <label>Description</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
          </div>
          <div className="feedback_footer_wrap ">
            <button type="button" className="btn-secondary mx-2">
              Cancel
            </button>
            <button type="button" className="btn-primary mx-2">
              Save
            </button>
          </div>
        </div>
      </Sidebar>
      <Sidebar
        visible={praiseSidebar}
        position="right"
        onHide={() => setPraiseSidebar(false)}
      >
        <div className="feedback_Wrapper">
          <div className="feedback_Title_Wrapper">
            <h3>Give Praise to Dhaval Patel</h3>
          </div>
          <div className="feedback_content_wrap">
            <div className="user_feedback_top">
              <div className="user_img">
                <img src={userImage} alt="userImage" />
              </div>
              <div className="user_name">
                <p>
                  Dhaval Patel <span>UI/UX Designer</span>
                </p>
              </div>
            </div>
            <div className="form_group">
              <label>Select a Core value</label>
              <ReactSelectSingle
                value={coreValue}
                options={coreValueOption}
                filter
                onChange={e => {
                  coreValueHandleChange(e);
                }}
                placeholder="Select"
              />
            </div>
            <div className="form_group">
              <label>Description</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
            <div className="praise_visible">
              <p>
                <img src={EyeIcon} className="me-1" alt="visibleicon" /> Praise
                will be visible to everyone in the organization.
              </p>
            </div>
            <div className="form_group checkbox_wrap">
              <ReactCheckbox
                inputId="PostToWall"
                name="PostToWall"
                value="Same as Present Address"
                onChange={onpollChange}
                checked={postToWall.indexOf('Same as Present Address') !== -1}
              />

              <label htmlFor="PostToWall">Post to wall</label>
            </div>
            <div className="form_group upload_wrap">
              <FileUpload
                mode="basic"
                name="demo[]"
                accept="image/*"
                maxFileSize={1000000}
                chooseLabel="Add Attachment"
                chooseOptions={chooseOptions}
              />
            </div>
          </div>
          <div className="feedback_footer_wrap ">
            <button type="button" className="btn-secondary mx-2">
              Cancel
            </button>
            <button type="button" className="btn-primary mx-2">
              Save
            </button>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
