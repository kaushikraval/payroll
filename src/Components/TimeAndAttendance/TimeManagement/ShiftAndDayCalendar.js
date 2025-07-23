import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import userImage from '../../../Assets/images/user8.png';
import FilterIcon from '../../../Assets/images/filter.svg';
import ReactSelectMultiple from 'Components/Common/ReactSelectMultiple';
import LeftArrow from '../../../Assets/images/chevron-left.svg';
import RightArrow from '../../../Assets/images/chevron-right.svg';
import DownloadIcon from '../../../Assets/images/downloadicon-blue.svg';

export default function ShiftAndDayCalendar() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [location, setLocation] = useState([]);
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
  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
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
  const shiftAndDayCalender = [
    {
      empCode: '(1001)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1002)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1003)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1004)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1005)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1006)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1007)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1008)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1009)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1010)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1011)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1012)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1013)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1014)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1015)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
    {
      empCode: '(1016)',
      empProfile: userImage,
      empName: 'Chirag Sondagar',
      shiftTime: '(09:30am-06:30pm)',
      designation: 'Sr. Web Designer',
      weeklyOff: 'Weekly Off',
      general: 'General',
      holiday: 'Holiday',
    },
  ];
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
            <b>Time Management</b>
          </li>
          <li>Shift & Day Calander</li>
        </ul>
      </div>
      <div className="top_filter_wrap shift_day_assign_filter">
        <div className="row">
          <div className="col-md-12">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={reportingAuthority}
                    options={reportingAuthorityOption}
                    onChange={e => setReportingAuthority(e.value)}
                    optionLabel="name"
                    placeholder="Employees"
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
                      setDepartment(e.value);
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
                      setDesignation(e.value);
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
                      setLocation(e.value);
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
        </div>
      </div>
      <div className="shift_calender_wrapper">
        <div className="shift_calender_top mb-3">
          <div className="row align-items-center">
            <div className="col-sm-6 order-2 order-sm-1">
              <div className="show_entries">
                Show
                <select className="form-select">
                  <option value="1">10</option>
                  <option value="2">25</option>
                  <option value="3">50</option>
                  <option value="4">100</option>
                </select>
                entiries
              </div>
            </div>
            <div className="col-sm-6 order-1 order-sm-2">
              <div className="d-flex align-items-center justify-content-end">
                <div className="top_date_wrap">
                  <h6>
                    <button type="button">
                      <img src={LeftArrow} alt="LeftArrow" />
                    </button>
                    January 2023
                    <button type="button">
                      <img src={RightArrow} alt="RightArrow" />
                    </button>
                  </h6>
                </div>
                <button className="btn-border">
                  <img src={DownloadIcon} alt="Download Arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="shift_calender_table data_table_one">
          <div className="shift_calender_table_inner">
            <div className="employee_calender_wrap">
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <span>Employee</span>
                      </th>
                      <th>
                        Sunday <b>1</b>
                      </th>
                      <th>
                        Monday <b>2</b>
                      </th>
                      <th>
                        Tuesday <b>3</b>
                      </th>
                      <th>
                        Wednesday <b>4</b>
                      </th>
                      <th>
                        Thursday <b>5</b>
                      </th>
                      <th>
                        Friday <b>6</b>
                      </th>
                      <th>
                        Saturday <b>7</b>
                      </th>
                      <th>
                        Sunday <b>8</b>
                      </th>
                      <th>
                        Monday <b>9</b>
                      </th>
                      <th>
                        Tuesday <b>10</b>
                      </th>
                      <th>
                        Wednesday <b>11</b>
                      </th>
                      <th>
                        Thursday <b>12</b>
                      </th>
                      <th>
                        Friday <b>13</b>
                      </th>
                      <th>
                        Saturday <b>14</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {shiftAndDayCalender.map((emp, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <div className="name_wrap">
                              <img src={emp.empProfile} alt="EmployeeImage" />
                              <span>
                                {emp.empName} <b>{emp.empCode}</b>
                                <small className="d-block">
                                  {emp.designation}
                                </small>
                              </span>
                            </div>
                          </td>
                          <td className="weekly_off_row">{emp.weeklyOff}</td>
                          <td>
                            {emp.general} <span>{emp.shiftTime}</span>
                          </td>
                          <td>
                            {emp.general} <span>{emp.shiftTime}</span>
                          </td>
                          <td>
                            {emp.general} <span>{emp.shiftTime}</span>
                          </td>
                          <td className="holiday_row">{emp.general}</td>
                          <td>
                            {emp.general} <span>{emp.shiftTime}</span>
                          </td>
                          <td className="weekly_off_row half_day_row">
                            <span className="general">{emp.general}</span>
                            <span className="half_day">{emp.weeklyOff}</span>
                          </td>
                          <td className="weekly_off_row">{emp.weeklyOff}</td>
                          <td>
                            {emp.general} <span>{emp.shiftTime}</span>
                          </td>
                          <td>
                            {emp.general} <span>{emp.shiftTime}</span>
                          </td>
                          <td>
                            {emp.general} <span>{emp.shiftTime}</span>
                          </td>
                          <td>
                            {emp.general} <span>{emp.shiftTime}</span>
                          </td>
                          <td>
                            {emp.general} <span>{emp.shiftTime}</span>
                          </td>
                          <td className="weekly_off_row">{emp.weeklyOff}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
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
