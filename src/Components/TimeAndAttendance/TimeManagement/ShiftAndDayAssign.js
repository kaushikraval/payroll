import React, { useState, useEffect } from 'react';
import ReactSelectMultiple from 'Components/Common/ReactSelectMultiple';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import userImage from '../../../Assets/images/user8.png';
import FilterIcon from '../../../Assets/images/filter.svg';
import AssignShift from '../../../Assets/images/assign-shift.svg';
import AssignWeeklyOff from '../../../Assets/images/assign-weeklyoff.svg';
import AssignHoliday from '../../../Assets/images/assign-holiday.svg';
import ReactCheckbox from 'Components/Common/ReactCheckbox';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import ReactCelender from '../../Common/ReactCelender';

export default function ShiftAndDayAssign() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [location, setLocation] = useState([]);
  const [shiftSelect, setShiftSelect] = useState([]);
  const [weeklyOffSelect, setWeeklyOffSelect] = useState([]);
  const [holidaySelect, setHolidaySelect] = useState([]);
  const [isFlexible, setIsFlexible] = useState([]);
  const [assignShiftPopup, setAssignShiftPopup] = useState(false);
  const [assignWeeklyOffPopup, setAssignWeeklyOffPopup] = useState(false);
  const [assignHolidayPopup, setAssignHolidayPopup] = useState(false);
  const [shiftToAssign, setShiftToAssign] = useState([]);
  const [weeklyOffType, setWeeklyOffType] = useState([]);
  const [holidayGroupSelect, setHolidayGroupSelect] = useState([]);
  const dialogFuncMap = {
    assignShiftPopup: setAssignShiftPopup,
    assignWeeklyOffPopup: setAssignWeeklyOffPopup,
    assignHolidayPopup: setAssignHolidayPopup,
  };
  const [employeeDetailList, setEmployeeDetailList] = useState({
    List: [],
    MasterChecked: false,
    SelectedList: [],
  });
  const departmentOptions = [
    { label: 'Web Designing', value: 'WebDesigning' },
    { label: 'UI/UX Design', value: 'UIUXDesign' },
    { label: 'Web Development', value: 'WebDevelopment' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'HR', value: 'HR' },
    { label: 'Sales Department', value: 'SalesDepartment' },
  ];
  const shiftSelectOptions = [
    { label: 'General', value: 'General' },
    { label: 'Morning', value: 'Morning' },
    { label: 'Afternoon', value: 'Afternoon' },
    { label: 'Night', value: 'Night' },
  ];
  const holidaySelectOptions = [
    { label: '2022 Standerd', value: '2022 Standerd' },
    { label: 'Station Holiday', value: 'Station Holiday' },
    { label: 'Gujrat Holiday', value: 'Gujrat Holiday' },
    { label: 'Maharshtra Holiday', value: 'Maharshtra Holiday' },
  ];
  const weeklyoffSelectOptions = [
    { label: 'All Sunday', value: 'All Sunday' },
    { label: 'All Saturday & All Sunday', value: 'All Saturday & All Sunday' },
    {
      label: 'Even (2,4) Saturday & All Sunday',
      value: 'Even (2,4) Saturday & All Sunday',
    },
    {
      label: 'Odd (1,3,5) Saturday & All Sunday',
      value: 'Odd (1,3,5) Saturday & All Sunday',
    },
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
  const shiftToAssignOption = [
    { label: 'Mor (06:00 AM - 04:00 PM)', value: 'Mor (06:00 AM - 04:00 PM)' },
    { label: 'Aft (11:00 AM - 08:00 PM)', value: 'Aft (11:00 AM - 08:00 PM)' },
    { label: 'Eve (02:00 PM - 10:00 PM)', value: 'Eve (02:00 PM - 10:00 PM)' },
    { label: 'Nig (08:00 PM - 06:00 AM)', value: 'Nig (08:00 PM - 06:00 AM)' },
  ];
  const holidayGroupSelectOption = [
    { label: '2022 Standerd', value: '2022 Standerd' },
    { label: 'Station Holiday', value: 'Station Holiday' },
    { label: 'Gujrat Holiday', value: 'Gujrat Holiday' },
    { label: 'Maharshtra Holiday', value: 'Maharshtra Holiday' },
  ];
  const weeklyOffTypeOption = [
    { label: 'All Sunday', value: 'All Sunday' },
    { label: 'All Saturday & All Sunday', value: 'All Saturday & All Sunday' },
    {
      label: 'Even (2,4) Saturday & All Sunday',
      value: 'Even (2,4) Saturday & All Sunday',
    },
    {
      label: 'Odd (1,3,5) Saturday & All Sunday',
      value: 'Odd (1,3,5) Saturday & All Sunday',
    },
  ];
  const shiftAndDayAssign = [
    {
      empCode: '1001',
      empProfile: userImage,
      empName: 'Dhaval Patel',
      shiftTime: 'Gen (09:30 AM - 06:30 PM)',
      weeklyOff: 'Sunday',
      holiday: '2022 Standard',
      assignShiftIcon: AssignShift,
      assignWeeklyOffIcon: AssignWeeklyOff,
      assignHolidayIcon: AssignHoliday,
      selected: false,
    },
    {
      empCode: '1002',
      empProfile: userImage,
      empName: 'Dhaval Patel',
      shiftTime: 'Gen (09:30 AM - 06:30 PM)',
      weeklyOff: 'Sunday',
      holiday: '2022 Standard',
      assignShiftIcon: AssignShift,
      assignWeeklyOffIcon: AssignWeeklyOff,
      assignHolidayIcon: AssignHoliday,
      selected: false,
    },
    {
      empCode: '1003',
      empProfile: userImage,
      empName: 'Dhaval Patel',
      shiftTime: 'Gen (09:30 AM - 06:30 PM)',
      weeklyOff: 'Sunday',
      holiday: '2022 Standard',
      assignShiftIcon: AssignShift,
      assignWeeklyOffIcon: AssignWeeklyOff,
      assignHolidayIcon: AssignHoliday,
      selected: false,
    },
    {
      empCode: '1004',
      empProfile: userImage,
      empName: 'Dhaval Patel',
      shiftTime: 'Gen (09:30 AM - 06:30 PM)',
      weeklyOff: 'Sunday',
      holiday: '2022 Standard',
      assignShiftIcon: AssignShift,
      assignWeeklyOffIcon: AssignWeeklyOff,
      assignHolidayIcon: AssignHoliday,
      selected: false,
    },
    {
      empCode: '1005',
      empProfile: userImage,
      empName: 'Dhaval Patel',
      shiftTime: 'Gen (09:30 AM - 06:30 PM)',
      weeklyOff: 'Sunday',
      holiday: '2022 Standard',
      assignShiftIcon: AssignShift,
      assignWeeklyOffIcon: AssignWeeklyOff,
      assignHolidayIcon: AssignHoliday,
      selected: false,
    },
    {
      empCode: '1006',
      empProfile: userImage,
      empName: 'Dhaval Patel',
      shiftTime: 'Gen (09:30 AM - 06:30 PM)',
      weeklyOff: 'Sunday',
      holiday: '2022 Standard',
      assignShiftIcon: AssignShift,
      assignWeeklyOffIcon: AssignWeeklyOff,
      assignHolidayIcon: AssignHoliday,
      selected: false,
    },
    {
      empCode: '1007',
      empProfile: userImage,
      empName: 'Dhaval Patel',
      shiftTime: 'Gen (09:30 AM - 06:30 PM)',
      weeklyOff: 'Sunday',
      holiday: '2022 Standard',
      assignShiftIcon: AssignShift,
      assignWeeklyOffIcon: AssignWeeklyOff,
      assignHolidayIcon: AssignHoliday,
      selected: false,
    },
    {
      empCode: '1008',
      empProfile: userImage,
      empName: 'Dhaval Patel',
      shiftTime: 'Gen (09:30 AM - 06:30 PM)',
      weeklyOff: 'Sunday',
      holiday: '2022 Standard',
      assignShiftIcon: AssignShift,
      assignWeeklyOffIcon: AssignWeeklyOff,
      assignHolidayIcon: AssignHoliday,
      selected: false,
    },
    {
      empCode: '1009',
      empProfile: userImage,
      empName: 'Dhaval Patel',
      shiftTime: 'Gen (09:30 AM - 06:30 PM)',
      weeklyOff: 'Sunday',
      holiday: '2022 Standard',
      assignShiftIcon: AssignShift,
      assignWeeklyOffIcon: AssignWeeklyOff,
      assignHolidayIcon: AssignHoliday,
      selected: false,
    },
    {
      empCode: '1010',
      empProfile: userImage,
      empName: 'Dhaval Patel',
      shiftTime: 'Gen (09:30 AM - 06:30 PM)',
      weeklyOff: 'Sunday',
      holiday: '2022 Standard',
      assignShiftIcon: AssignShift,
      assignWeeklyOffIcon: AssignWeeklyOff,
      assignHolidayIcon: AssignHoliday,
      selected: false,
    },
  ];
  useEffect(() => {
    setEmployeeDetailList({
      List: shiftAndDayAssign,
      MasterChecked: false,
      SelectedList: [],
    });
  }, []);
  const isFlexibleChange = e => {
    let selectFlexible = [...isFlexible];

    if (selectFlexible.length <= 0 && e.checked) {
      selectFlexible.push(e.value);
    } else {
      if (!isFlexible.includes(e.value)) {
        selectFlexible.push(e.value);
      } else {
        selectFlexible.splice(selectFlexible.indexOf(e.value), 1);
      }
    }
    setIsFlexible(selectFlexible);
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
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const onMasterCheck = e => {
    let tempListData = employeeDetailList.List;
    tempListData = tempListData.map(user => {
      return {
        ...user,
        selected: e.target.checked,
      };
    });
    setEmployeeDetailList({
      List: tempListData,
      MasterChecked: e.target.checked,
      SelectedList: tempListData.filter(item => {
        return item.selected;
      }),
    });
  };

  const onItemCheck = (e, item) => {
    let tempListData = employeeDetailList.List;
    tempListData = tempListData.map(user => {
      if (user.empCode === item.empCode) {
        return {
          ...user,
          selected: e.target.checked,
        };
      }
      return user;
    });
    setEmployeeDetailList({
      List: tempListData,
      SelectedList: tempListData.filter(item => {
        return item.selected;
      }),
    });
  };
  const renderFooterAssignShift = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Update Shift"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const renderFooterAssignWeeklyOff = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Update Weekly Off"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const renderFooterAssignHolidayPopup = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Update Holiday Group"
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
            <b>Time & Attendance</b>
          </li>
          <li>
            <b>Time Management</b>
          </li>
          <li>Shift & Day Assign</li>
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
                <div className="form_group">
                  <ReactSelectMultiple
                    value={shiftSelect}
                    options={shiftSelectOptions}
                    onChange={e => {
                      setShiftSelect(e.value);
                    }}
                    placeholder="Shift"
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={weeklyOffSelect}
                    options={weeklyoffSelectOptions}
                    onChange={e => {
                      setWeeklyOffSelect(e.value);
                    }}
                    placeholder="Weekly off"
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={holidaySelect}
                    options={holidaySelectOptions}
                    onChange={e => {
                      setHolidaySelect(e.value);
                    }}
                    placeholder="Holiday"
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
      <div className="shift_day_assign_wrap">
        <div className="shift_day_assign_top mb-3">
          <div className="row align-items-center">
            <div className="col-sm-4 order-2 order-sm-1">
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
            <div className="col-sm-8 order-1 order-sm-2">
              <div className="d-flex align-items-center justify-content-end">
                <button
                  className="btn-primary"
                  onClick={() => onClick('assignShiftPopup')}
                >
                  Assign Shift
                </button>
                <button
                  className="btn-border mx-3"
                  onClick={() => onClick('assignWeeklyOffPopup')}
                >
                  Assign Weekly Off
                </button>
                <button
                  className="btn-border"
                  onClick={() => onClick('assignHolidayPopup')}
                >
                  Assign Holiday
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="data_table_one shift_day_assign_table_wrap">
          <div className="table-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>
                    <div className="form_group checkbox_wrap mb-0">
                      <ReactCheckbox
                        inputId="IsFlexible"
                        name="IsFlexible"
                        value="Is Flexible"
                        onChange={e => {
                          onMasterCheck(e);
                        }}
                        checked={employeeDetailList.MasterChecked}
                      />
                    </div>
                  </th>
                  <th>
                    <span>Emp.Code</span>
                  </th>
                  <th>
                    <span>Emp.Name</span>
                  </th>
                  <th>
                    <span>Shift</span>
                  </th>
                  <th>
                    <span>Weekly Off</span>
                  </th>
                  <th>
                    <span>Holiday</span>
                  </th>
                  <th>
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {employeeDetailList.List.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="form_group checkbox_wrap mb-0">
                          <ReactCheckbox
                            inutId={`rowcheck_${user.empCode}`}
                            name="rowcheck"
                            value="false"
                            onChange={e => {
                              onItemCheck(e, user);
                            }}
                            checked={user.selected}
                          />
                        </div>
                      </td>
                      <td>{user.empCode}</td>
                      <td>
                        <div className="name_wrap">
                          <img src={user.empProfile} alt="UserImage" />
                          <span>{user.empName}</span>
                        </div>
                      </td>
                      <td>{user.shiftTime}</td>
                      <td>{user.weeklyOff}</td>
                      <td>{user.holiday}</td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <img
                              src={user.assignShiftIcon}
                              onClick={() => onClick('assignShiftPopup')}
                              alt="AssignShift"
                            />
                          </li>
                          <li>
                            <img
                              src={user.assignWeeklyOffIcon}
                              alt="AssignWeeklyOff"
                              onClick={() => onClick('assignWeeklyOffPopup')}
                            />
                          </li>
                          <li>
                            <img
                              src={user.assignHolidayIcon}
                              onClick={() => onClick('assignHolidayPopup')}
                              alt="AssignHoliday"
                            />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <Dialog
              header="Assign Shift"
              visible={assignShiftPopup}
              draggable={false}
              resizable={false}
              className="small_popup"
              footer={renderFooterAssignShift('assignShiftPopup')}
              onHide={() => onHide('assignShiftPopup')}
            >
              <div className="assign_shift_popup_wrap">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form_group">
                      <label>Shift To Assign</label>
                      <ReactSelectSingle
                        value={shiftToAssign}
                        filter
                        options={shiftToAssignOption}
                        onChange={e => {
                          setShiftToAssign(e.value);
                        }}
                        placeholder="Shift Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form_group">
                      <label>Effective From Date</label>
                      <ReactCelender value="date" placeholder="Select Date" />
                      <small>
                        Select the date on which this shift started for emplyoee
                      </small>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className={
                        isFlexible.includes('Shift Don’t have End Date')
                          ? 'form_group disable'
                          : 'form_group'
                      }
                    >
                      <label>Effective To Date</label>
                      <ReactCelender
                        value="date"
                        placeholder="Select Date"
                        disabled={
                          isFlexible.includes('Shift Don’t have End Date')
                            ? 'true'
                            : ''
                        }
                      />
                      <small>
                        Select the date on which this shift ended for emplyoee
                      </small>
                    </div>
                    <div className="form_group checkbox_wrap mb-0">
                      <ReactCheckbox
                        inputId="shiftEndDate"
                        name="shiftEndDate"
                        value="Shift Don’t have End Date"
                        onChange={isFlexibleChange}
                        checked={
                          isFlexible.indexOf('Shift Don’t have End Date') !== -1
                        }
                      />
                      <label htmlFor="shiftEndDate">
                        Shift Don’t have End Date
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog>
            <Dialog
              header="Assign Weekly Off"
              visible={assignWeeklyOffPopup}
              draggable={false}
              resizable={false}
              className="small_popup"
              footer={renderFooterAssignWeeklyOff('assignWeeklyOffPopup')}
              onHide={() => onHide('assignWeeklyOffPopup')}
            >
              <div className="assign_shift_popup_wrap">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form_group">
                      <label>Select Week Off Type to Assign</label>
                      <ReactSelectSingle
                        value={weeklyOffType}
                        filter
                        options={weeklyOffTypeOption}
                        onChange={e => {
                          setWeeklyOffType(e.value);
                        }}
                        placeholder="Weekly Off Type"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form_group">
                      <label>Effective From Date</label>
                      <ReactCelender value="date" placeholder="Select Date" />
                      <small>
                        Select the date on which this shift started for emplyoee
                      </small>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className={
                        isFlexible.includes('Shift Don’t have End Date')
                          ? 'form_group disable'
                          : 'form_group'
                      }
                    >
                      <label>Effective To Date</label>
                      <ReactCelender
                        value="date"
                        placeholder="Select Date"
                        disabled={
                          isFlexible.includes('Shift Don’t have End Date')
                            ? 'true'
                            : ''
                        }
                      />
                      <small>
                        Select the date on which this shift ended for emplyoee
                      </small>
                    </div>
                    <div className="form_group checkbox_wrap mb-0">
                      <ReactCheckbox
                        inputId="shiftEndDate"
                        name="shiftEndDate"
                        value="Shift Don’t have End Date"
                        onChange={isFlexibleChange}
                        checked={
                          isFlexible.indexOf('Shift Don’t have End Date') !== -1
                        }
                      />
                      <label htmlFor="shiftEndDate">
                        Shift Don’t have End Date
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog>
            <Dialog
              header="Assign Holiday"
              visible={assignHolidayPopup}
              draggable={false}
              resizable={false}
              className="small_popup"
              footer={renderFooterAssignHolidayPopup('assignHolidayPopup')}
              onHide={() => onHide('assignHolidayPopup')}
            >
              <div className="assign_shift_popup_wrap">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form_group">
                      <label>Select Holiday Group</label>
                      <ReactSelectSingle
                        value={holidayGroupSelect}
                        filter
                        options={holidayGroupSelectOption}
                        onChange={e => {
                          setHolidayGroupSelect(e.value);
                        }}
                        placeholder="Holiday Group"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Dialog>
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
    </div>
  );
}
