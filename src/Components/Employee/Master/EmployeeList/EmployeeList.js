import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userImage from '../../../../Assets/images/user8.png';
import profileImg from '../../../../Assets/images/profile.png';
import EmailIcon from '../../../../Assets/images/email.svg';
import PhoneIcon from '../../../../Assets/images/phone.svg';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import ListIcon from '../../../../Assets/images/list.svg';
import DirectoryIcon from '../../../../Assets/images/grid.svg';
import employeeImg from '../../../../Assets/images/user3.png';
import FilterIcon from '../../../../Assets/images/filter.svg';
import ReactSelectMultiple from '../../../Common/ReactSelectMultiple';
import { useTranslation } from 'react-i18next';

export default function EmployeeList() {
  const { t } = useTranslation();
  const range = [...Array(12).keys()];

  const [reportingAuthority, setreportingAuthority] = useState([]);
  const [department, setdepartment] = useState([]);
  const [designation, setdesignation] = useState([]);
  const [location, setlocation] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);
  const navigate = useNavigate();
  const departmentOptions = [
    { label: 'Web Designing', value: 'WebDesigning' },
    { label: 'UI/UX Design', value: 'UIUXDesign' },
    { label: 'Web Development', value: 'WebDevelopment' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'HR', value: 'HR' },
    { label: 'Sales Department', value: 'SalesDepartment' },
  ];
  const designationOptions = [
    { label: 'H.R Manager', value: 'HRManager' },
    { label: 'PHP Developer', value: 'PHPDeveloper' },
    { label: 'Android Developer', value: 'AndroidDeveloper' },
    { label: 'Project Manager', value: 'ProjectManager' },
    { label: 'General Manager', value: 'GeneralManager' },
    { label: 'Content Writter', value: 'ContentWritter' },
  ];
  const gradeOptions = [
    { label: 'G1', value: 'G1' },
    { label: 'G2', value: 'G2' },
    { label: 'G3', value: 'G3' },
  ];
  const locationOptions = [
    { label: 'Cityplus, Surat', value: 'CityplusSurat' },
    { label: 'Varachha, Surat', value: 'VarachhaSurat' },
    { label: 'Station, Surat', value: 'StationSurat' },
    { label: 'Adajan, Surat', value: 'AdajanSurat' },
    { label: 'Vesu, Surat', value: 'VesuSurat' },
    { label: 'Navsari', value: 'Navsari' },
  ];
  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const departmentHandleChange = e => {
    setdepartment(e.value);
  };
  const designationHandleChange = e => {
    setdesignation(e.value);
  };
  const employmentTypeHandleChange = e => {
    setEmploymentType(e.value);
  };
  const locationHandleChange = e => {
    setlocation(e.value);
  };
  const handleTrClick = () => {
    navigate('/employees/masters/employee-profile');
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
          <li>{t('title.ListDirectory')}</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row">
          <div className="col-md-9">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={reportingAuthority}
                    options={reportingAuthorityOption}
                    onChange={e => setreportingAuthority(e.value)}
                    optionLabel="name"
                    placeholder={t('title.employees')}
                    filter
                    className="multiselect-custom"
                    itemTemplate={reportingAuthorityHandleChange}
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={department}
                    options={departmentOptions}
                    onChange={e => {
                      departmentHandleChange(e);
                    }}
                    placeholder={t('myProfile.departmentTitle')}
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={designation}
                    options={designationOptions}
                    onChange={e => {
                      designationHandleChange(e);
                    }}
                    placeholder={t('pastwork_employment.designation')}
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={location}
                    options={locationOptions}
                    onChange={e => {
                      locationHandleChange(e);
                    }}
                    placeholder={t('title.location')}
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={employmentType}
                    options={gradeOptions}
                    onChange={e => {
                      employmentTypeHandleChange(e);
                    }}
                    placeholder={t('employee_dashboard.employment_type')}
                  />
                </div>
              </li>
              <li>
                <button type="button" className="btn-primary">
                  <img src={FilterIcon} className="me-2" alt="FilterImage" />
                  {t('leave.filter')}
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="tab_toggle">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-List-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-List"
                    type="button"
                    role="tab"
                    aria-controls="pills-List"
                    aria-selected="true"
                  >
                    <img src={ListIcon} alt="List Icon" />
                    List
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Directory-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Directory"
                    type="button"
                    role="tab"
                    aria-controls="pills-Directory"
                    aria-selected="false"
                  >
                    <img src={DirectoryIcon} alt="List Icon" /> Directory
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="data_table_one employee_list_table">
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-List"
            role="tabpanel"
            aria-labelledby="pills-List-tab"
          >
            <div className="list_tab_wrap">
              <div className="show_entries mb-3">
                {t('title.show')}
                <select className="form-select">
                  <option value="1">10</option>
                  <option value="2">25</option>
                  <option value="3">50</option>
                  <option value="4">100</option>
                </select>
                {t('title.entries')}
              </div>
              <div className="employee_list_table_inner">
                <div className="table-responsive">
                  <table id="example" className="display">
                    <thead>
                      <tr>
                        <th>
                          <span>{t('title.empcode')}</span>
                        </th>
                        <th>
                          <span>{t('myProfile.fullName')}</span>
                        </th>
                        <th>
                          <span>{t('emp_step_form.doj_label')}</span>
                        </th>
                        <th>
                          <span>{t('myProfile.mobileTitle')}</span>
                        </th>
                        <th>
                          <span>{t('myProfile.emailIdTitle')}</span>
                        </th>
                        <th>
                          <span>{t('employee_dashboard.employee_status')}</span>
                        </th>
                        <th>
                          <span>{t('employee_dashboard.employment_type')}</span>
                        </th>
                        <th>
                          <span>{t('myProfile.departmentTitle')}</span>
                        </th>
                        <th>
                          <span>{t('pastwork_employment.designation')}</span>
                        </th>
                        <th>
                          <span>{t('title.location')}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {range.map(index => {
                        return (
                          <tr
                            onClick={() => {
                              handleTrClick();
                            }}
                          >
                            <td>{t('myProfile.punchCode')}</td>
                            <td>
                              <div className="name_wrap">
                                <img src={employeeImg} alt="EmployeeImage" />
                                <span>{t('userDetail.firstName')}</span>
                              </div>
                            </td>
                            <td>{t('myProfile.dateOfJoin')}</td>
                            <td>{t('myProfile.mobile')}</td>
                            <td>{t('myProfile.email')}</td>
                            <td>
                              <span className="badge bedge_success">
                                {t('workposttype.confirmed')}
                              </span>
                              {/* <span className="badge bedge_warning">
                                {t('workposttype.probation')}
                              </span> */}
                            </td>
                            <td>
                              {t('myProfile.full_time')}
                              {/* {t('myProfile.part_time')} */}
                            </td>
                            <td>{t('myProfile.department')}</td>
                            <td>{t('userDetail.designation')}</td>
                            <td>
                              {t(
                                'employee_profile_detail.place_of_birth_value',
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="table_bottom_wrap">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <p className="m-0 text-center text-sm-start">
                    {t('title.showing')} <span>10</span> {t('title.to')}{' '}
                    <span>20</span> {t('title.of')} <span>20</span>{' '}
                    {t('title.entries')}
                  </p>
                </div>
                <div className="col-sm-6">
                  <div className="table_pagination">
                    <ul className="d-flex justify-content-center justify-content-sm-end">
                      <li className="prev">
                        <Link className="w-auto d-block">
                          {t('title.previous')}
                        </Link>
                      </li>
                      <li>
                        <Link className="d-block">1</Link>
                      </li>
                      <li className="active">
                        <Link className="d-block">2</Link>
                      </li>
                      <li>
                        <Link className="d-block">3</Link>
                      </li>
                      <li className="next">
                        <Link className="w-auto d-block">
                          {t('title.next')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Directory"
            role="tabpanel"
            aria-labelledby="pills-Directory-tab"
          >
            <div className="grid_tab_wrap">
              <div className="show_entries mb-3">
                {t('title.show')}
                <select className="form-select">
                  <option value="1">10</option>
                  <option value="2">25</option>
                  <option value="3">50</option>
                  <option value="4">100</option>
                </select>
                {t('title.entries')}
              </div>

              <div className="employee_directory_wrap">
                <div className="row">
                  {range.map(index => {
                    return (
                      <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <div
                          className="employee_detail_wrap bg_white_box "
                          onClick={() => {
                            handleTrClick();
                          }}
                        >
                          <div className="profile_photo_inner employee_img_Wrap text-center">
                            <img src={profileImg} alt="ProfileImage" />
                          </div>
                          <h6 className="text-center fw-500 mb-2">
                            {t('userDetail.firstName')}
                          </h6>
                          <p className="text-center">
                            {t('userDetail.designation')}
                          </p>
                          <div className="employee_detail_inner_wrap">
                            <ul className="first_ul">
                              <li className="text-dark fw-500 mb-2">
                                {t('emp_step_form.date_of_joining')}
                                <span className="text-light fw-400">
                                  {t('myProfile.dateOfJoin')}
                                </span>
                              </li>
                              <li className="text-dark fw-500 mb-2">
                                {t('myProfile.departmentTitle')}
                                <span className="text-light fw-400">
                                  {t('myProfile.department')}
                                </span>
                              </li>
                              <li className="text-dark fw-500 mb-2">
                                {t('title.location')}
                                <span className="text-light fw-400">
                                  {t(
                                    'employee_profile_detail.place_of_birth_value',
                                  )}
                                </span>
                              </li>
                            </ul>
                            <ul className="contact_ul">
                              <li>
                                <img
                                  src={EmailIcon}
                                  alt="Email Icon"
                                  className="me-2"
                                />
                                {t('myProfile.email')}
                              </li>
                              <li>
                                <img
                                  src={PhoneIcon}
                                  alt="Phone Icon"
                                  className="me-2"
                                />
                                {t('myProfile.mobile')}
                              </li>
                            </ul>
                          </div>
                          <div className="employee_code">
                            <p>{t('myProfile.punchCode')}</p>
                          </div>
                          <div className="employee_status">
                            <span className="badge bedge_success">
                              {t('workposttype.confirmed')}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="table_bottom_wrap">
                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <p className="m-0 text-center text-sm-start">
                      {t('title.showing')} <span>10</span> {t('title.to')}{' '}
                      <span>20</span> {t('title.of')} <span>20</span>{' '}
                      {t('title.entries')}
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <div className="table_pagination">
                      <ul className="d-flex justify-content-center justify-content-sm-end">
                        <li className="prev">
                          <Link className="w-auto d-block">
                            {t('title.previous')}
                          </Link>
                        </li>
                        <li>
                          <Link className="d-block">1</Link>
                        </li>
                        <li className="active">
                          <Link className="d-block">2</Link>
                        </li>
                        <li>
                          <Link className="d-block">3</Link>
                        </li>
                        <li className="next">
                          <Link className="w-auto d-block">
                            {t('title.next')}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
