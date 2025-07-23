import ReactSelectMultiple from 'Components/Common/ReactSelectMultiple';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import FilterIcon from '../../../Assets/images/filter.svg';
import { SplitButton } from 'primereact/splitbutton';
import userImage from '../../../Assets/images/user8.png';
import LeftArrow from '../../../Assets/images/chevron-left.svg';
import RightArrow from '../../../Assets/images/chevron-right.svg';
import { useTranslation } from 'react-i18next';

export default function LateComing() {
  const { t } = useTranslation();
  const [reportingAuthority, setreportingAuthority] = useState([]);
  const [department, setdepartment] = useState([]);
  const [designation, setdesignation] = useState([]);
  const [location, setlocation] = useState([]);
  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
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
  const locationOptions = [
    { label: 'Cityplus, Surat', value: 'CityplusSurat' },
    { label: 'Varachha, Surat', value: 'VarachhaSurat' },
    { label: 'Station, Surat', value: 'StationSurat' },
    { label: 'Adajan, Surat', value: 'AdajanSurat' },
    { label: 'Vesu, Surat', value: 'VesuSurat' },
    { label: 'Navsari', value: 'Navsari' },
  ];
  const lateComingDetail = [
    {
      no: 1,
      empCode: 1001,
      empProfile: userImage,
      empName: 'Dhaval Patel',
      department: 'Software Development',
      designation: 'Web Developer',
      location: 'Surat',
      shiftCodeAndTime: 'MS - 08:00 AM to 04:00 PM',
      inTime: '8:05 AM',
      lateInBy: '00 H : 05 M',
    },
    {
      no: 2,
      empCode: 1002,
      empProfile: userImage,
      empName: 'Dhaval Patel',
      department: 'Software Development',
      designation: 'Web Developer',
      location: 'Surat',
      shiftCodeAndTime: 'MS - 08:00 AM to 04:00 PM',
      inTime: '8:05 AM',
      lateInBy: '00 H : 05 M',
    },
    {
      no: 3,
      empCode: 1003,
      empProfile: userImage,
      empName: 'Dhaval Patel',
      department: 'Software Development',
      designation: 'Web Developer',
      location: 'Surat',
      shiftCodeAndTime: 'MS - 08:00 AM to 04:00 PM',
      inTime: '8:05 AM',
      lateInBy: '00 H : 05 M',
    },
    {
      no: 4,
      empCode: 1004,
      empProfile: userImage,
      empName: 'Dhaval Patel',
      department: 'Software Development',
      designation: 'Web Developer',
      location: 'Surat',
      shiftCodeAndTime: 'MS - 08:00 AM to 04:00 PM',
      inTime: '8:05 AM',
      lateInBy: '00 H : 05 M',
    },
    {
      no: 5,
      empCode: 1005,
      empProfile: userImage,
      empName: 'Dhaval Patel',
      department: 'Software Development',
      designation: 'Web Developer',
      location: 'Surat',
      shiftCodeAndTime: 'MS - 08:00 AM to 04:00 PM',
      inTime: '8:05 AM',
      lateInBy: '00 H : 05 M',
    },
    {
      no: 6,
      empCode: 1006,
      empProfile: userImage,
      empName: 'Dhaval Patel',
      department: 'Software Development',
      designation: 'Web Developer',
      location: 'Surat',
      shiftCodeAndTime: 'MS - 08:00 AM to 04:00 PM',
      inTime: '8:05 AM',
      lateInBy: '00 H : 05 M',
    },
  ];
  const departmentHandleChange = e => {
    setdepartment(e.value);
  };
  const designationHandleChange = e => {
    setdesignation(e.value);
  };
  const locationHandleChange = e => {
    setlocation(e.value);
  };
  const DownloadType = [
    {
      label: 'Download as PDF',
      icon: 'pi pi-file-pdf',
    },
    {
      label: 'Export as Excel',
      icon: 'pi pi-upload',
    },
  ];
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
            <b>Time & Attendance</b>
          </li>
          <li>
            <Link to="/time-and-attendance/dashboard" className="text-dark">
              <b>Dashboard</b>
            </Link>
          </li>
          <li>Late Coming</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row">
          <div className="col-md-10">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={reportingAuthority}
                    options={reportingAuthorityOption}
                    onChange={e => setreportingAuthority(e.value)}
                    optionLabel="name"
                    placeholder="Employee"
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
                    placeholder="Department"
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
                    placeholder="Designation"
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
                    placeholder="Location"
                  />
                </div>
              </li>
              <li>
                <button type="button" className="btn-primary">
                  <img src={FilterIcon} className="me-2" alt="FilterImage" />
                  Filter
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="download_option_button text-end">
              <SplitButton
                label=""
                className="p-button-primary download_btn_icon"
                model={DownloadType}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="data_table_one employee_list_table time_attendance_table">
        <div className="list_tab_wrap">
          <div className="row  mb-3 align-items-center">
            <div className="col-sm-6 order-2 order-sm-1">
              <div className="show_entries">
                {t('title.show')}
                <select className="form-select">
                  <option value="1">10</option>
                  <option value="2">25</option>
                  <option value="3">50</option>
                  <option value="4">100</option>
                </select>
                {t('title.entries')}
              </div>
            </div>
            <div className="col-sm-6 order-1 order-sm-2">
              <div className="top_date_wrap">
                <h6>
                  <button type="button">
                    <img src={LeftArrow} alt="LeftArrow" />
                  </button>
                  04 Nov 2022
                  <button type="button">
                    <img src={RightArrow} alt="RightArrow" />
                  </button>
                </h6>
              </div>
            </div>
          </div>
          <div className="employee_list_table_inner">
            <div className="table-responsive">
              <table id="example" className="display">
                <thead>
                  <tr>
                    <th>
                      <span>No</span>
                    </th>
                    <th>
                      <span>Emp.Code</span>
                    </th>
                    <th>
                      <span>Emp.Name</span>
                    </th>
                    <th>
                      <span>Department</span>
                    </th>
                    <th>
                      <span>Designation</span>
                    </th>
                    <th>
                      <span>Location</span>
                    </th>
                    <th>
                      <span>Shift Code & Time</span>
                    </th>
                    <th>
                      <span>Check-In Time</span>
                    </th>
                    <th>
                      <span>Late In By</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {lateComingDetail.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.no}</td>
                        <td>{user.empCode}</td>
                        <td>
                          <div className="name_wrap">
                            <img src={user.empProfile} alt="EmployeeImage" />
                            <span>{user.empName}</span>
                          </div>
                        </td>
                        <td>{user.department}</td>
                        <td>{user.designation}</td>
                        <td>{user.location}</td>
                        <td>{user.shiftCodeAndTime}</td>
                        <td>{user.inTime}</td>
                        <td>{user.lateInBy}</td>
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
                Showing <span>10</span> to <span>20</span> of
                <span>20</span> entries
              </p>
            </div>
            <div className="col-sm-6">
              <div className="table_pagination">
                <ul className="d-flex justify-content-center justify-content-sm-end">
                  <li className="prev">
                    <Link className="w-auto d-block">Previous</Link>
                  </li>
                  <li>
                    <Link className="d-block">1</Link>
                  </li>
                  <li className="active">
                    <Link className="d-block">2</Link>
                  </li>
                  <li className="next">
                    <Link className="w-auto d-block">Next</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
