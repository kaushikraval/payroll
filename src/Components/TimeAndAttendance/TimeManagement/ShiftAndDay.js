import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import { TabView, TabPanel } from 'primereact/tabview';
import { useTranslation } from 'react-i18next';
import EditIcon from '../../../Assets/images/edit.svg';
import PlusIcon from '../../../Assets/images/plus.svg';
import DeleteIcon from '../../../Assets/images/trash.svg';
import EmployeeIcon from '../../../Assets/images/use-plus.svg';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Input from 'Components/Common/Input';
import TextArea from 'Components/Common/TextArea';

export default function ShiftAndDay() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [addHolidayGroup, setAddHolidayGroup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const shiftAndDay = [
    {
      shiftCode: 'General',
      shiftName: 'General',
      shiftTiming: '09:30 AM - 06:30 PM',
      shiftHours: '09 H : 00 M',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      shiftCode: 'Morning',
      shiftName: 'Morning',
      shiftTiming: '09:30 AM - 06:30 PM',
      shiftHours: '09 H : 00 M',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      shiftCode: 'Afternoon',
      shiftName: 'Afternoon',
      shiftTiming: '09:30 AM - 06:30 PM',
      shiftHours: '09 H : 00 M',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      shiftCode: 'Night',
      shiftName: 'Night',
      shiftTiming: '09:30 AM - 06:30 PM',
      shiftHours: '09 H : 00 M',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      shiftCode: 'Flexi',
      shiftName: 'Flexible Day',
      shiftTiming: '09:30 AM - 06:30 PM',
      shiftHours: '09 H : 00 M',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
  ];
  const weeklyOff = [
    {
      weeklyOffName: 'All Sunday',
      description: 'Sunday',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      weeklyOffName: 'All Saturday & All Sunday',
      description: 'Saturday & Sunday',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      weeklyOffName: 'Even(2,4) saturday & All Sunday',
      description: 'Saturday & Sunday',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      weeklyOffName: 'Odd(1,3,5) Saturday & All Sunday',
      description: 'Saturday & Sunday',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      weeklyOffName: 'Odd(1,3,5) Saturday & All Sunday',
      description: 'Saturday & Sunday',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
  ];
  const holidayGroup = [
    {
      holidayName: '2022 Holiday List',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      assignEmployee: 'Add Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      holidayName: 'Gujarat Holiday List',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      assignEmployee: 'Add Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      holidayName: 'Maharashtra Holiday List',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      assignEmployee: 'Add Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
  ];
  const handleTrClick = () => {
    navigate('/time-and-attendance/holiday-list');
  };
  const dialogFuncMap = {
    addHolidayGroup: setAddHolidayGroup,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-center">
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
            <b>Time & Attendance</b>
          </li>
          <li>
            <b>Time Management</b>
          </li>
          <li>
            <b>Shift & Days</b>
          </li>
          {activeIndex === 0 && <li>Shift</li>}
          {activeIndex === 1 && <li>Weekly Off</li>}
          {activeIndex === 2 && <li>Holiday</li>}
        </ul>
      </div>
      <div className="shift_day_wrapper">
        <TabView
          className="tabview_two"
          activeIndex={activeIndex}
          onTabChange={e => {
            setActiveIndex(e.index);
          }}
        >
          <TabPanel header="Shift">
            <div className="data_table_one shift_day_table">
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
                    <div className="text-sm-end">
                      <Link
                        to="/time-and-attendance/create-shift"
                        className="btn-primary"
                      >
                        Add Shift
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="shift_day_table_inner">
                  <div className="table-responsive">
                    <table id="example" className="display">
                      <thead>
                        <tr>
                          <th>
                            <span>Shift Code</span>
                          </th>
                          <th>
                            <span>Shift Name</span>
                          </th>
                          <th>
                            <span>Shift Timings</span>
                          </th>
                          <th>
                            <span>Shift Hours</span>
                          </th>
                          <th>
                            <span>Assign Employee</span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {shiftAndDay.map((user, index) => {
                          return (
                            <tr key={index}>
                              <td>{user.shiftCode}</td>
                              <td>{user.shiftName}</td>
                              <td>{user.shiftTiming}</td>
                              <td>{user.shiftHours}</td>
                              <td>
                                <Link
                                  className="text-secondary"
                                  to="/time-and-attendance/shift/assign-employee"
                                >
                                  <img
                                    src={user.employeeIcon}
                                    alt="Employee Icon"
                                  />
                                  {user.assignEmployee}
                                </Link>
                              </td>
                              <td>
                                {user.actionByName}
                                <span className="wrap_text">
                                  {user.actionByDate}
                                </span>
                              </td>
                              <td>
                                <ul className="edit_wrap d-flex">
                                  <li>
                                    <img
                                      src={user.editActionLogo}
                                      alt="Edit Icon"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src={user.deleteActionLogo}
                                      alt="Delete Icon"
                                    />
                                  </li>
                                </ul>
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
          </TabPanel>
          <TabPanel header="Weekly Off">
            <div className="data_table_one shift_day_table">
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
                    <div className="text-sm-end">
                      <Link
                        to="/time-and-attendance/create-weekly-off"
                        className="btn-primary"
                      >
                        Add Weekly Off Type
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="shift_day_table_inner">
                  <div className="table-responsive">
                    <table id="example" className="display">
                      <thead>
                        <tr>
                          <th>
                            <span>Weekly Off Name</span>
                          </th>
                          <th>
                            <span>Description</span>
                          </th>
                          <th>
                            <span>Assign Employee</span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {weeklyOff.map((user, index) => {
                          return (
                            <tr key={index}>
                              <td>{user.weeklyOffName}</td>
                              <td>{user.description}</td>
                              <td>
                                <Link
                                  className="text-secondary"
                                  to="/time-and-attendance/weekly-off/assign-employee"
                                >
                                  <img
                                    src={user.employeeIcon}
                                    alt="Employee Icon"
                                  />{' '}
                                  {user.assignEmployee}
                                </Link>
                              </td>
                              <td>
                                {user.actionByName}
                                <span className="wrap_text">
                                  {user.actionByDate}
                                </span>
                              </td>
                              <td>
                                <ul className="edit_wrap d-flex">
                                  <li>
                                    <img
                                      src={user.editActionLogo}
                                      alt="Edit Icon"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src={user.deleteActionLogo}
                                      alt="Delete Icon"
                                    />
                                  </li>
                                </ul>
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
          </TabPanel>
          <TabPanel header="Holiday">
            <div className="data_table_one shift_day_table">
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
                    <div className="text-sm-end">
                      <button className="btn-primary">
                        <img src={PlusIcon} alt="Plus Icon" className="me-1" />{' '}
                        Add Holiday Group
                      </button>
                    </div>
                  </div>
                </div>
                <div className="shift_day_table_inner">
                  <div className="table-responsive">
                    <table id="example" className="display">
                      <thead>
                        <tr>
                          <th>
                            <span>Holiday Group Name</span>
                          </th>
                          <th>
                            <span>Description</span>
                          </th>
                          <th>
                            <span>Assign Employee</span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {holidayGroup.map((user, index) => {
                          return (
                            <tr key={index}>
                              <td
                                className="text-secondary"
                                onClick={() => {
                                  handleTrClick();
                                }}
                              >
                                {user.holidayName}
                              </td>
                              <td>{user.description}</td>
                              <td>
                                <Link
                                  className="text-secondary"
                                  to="/time-and-attendance/holiday/assign-employee"
                                >
                                  <img
                                    src={user.employeeIcon}
                                    alt="Employee Icon"
                                  />{' '}
                                  {user.assignEmployee}
                                </Link>
                              </td>
                              <td>
                                {user.actionByName}
                                <span className="wrap_text">
                                  {user.actionByDate}
                                </span>
                              </td>
                              <td>
                                <ul className="edit_wrap d-flex">
                                  <li>
                                    <img
                                      src={user.editActionLogo}
                                      alt="Edit Icon"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src={user.deleteActionLogo}
                                      alt="Delete Icon"
                                    />
                                  </li>
                                </ul>
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
            {/* <div className="holiday_group_wrap">
              <div className="row mb-3 align-items-center">
                <div className="col-md-6">
                  <h6 className="m-0">Holiday Group</h6>
                </div>
                <div className="col-md-6">
                  <div className="text-end">
                    <button className="btn-primary">
                      <img src={PlusIcon} alt="Plus Icon" className="me-1" />{' '}
                      Add Holiday Group
                    </button>
                  </div>
                </div>
              </div>
              {holidayGroup.map((user, index) => {
                return (
                  <div className="holiday_group_box">
                    <div className="holiday_group_left">
                      <h6>{user.holidayName}</h6>
                      <p className="m-0 text-extraLight">{user.description}</p>
                    </div>
                    <ul>
                      <li>
                        <Link to="/time-and-attendance/holiday/assign-employee">
                          <img
                            src={user.employeeIcon}
                            alt="Add Employee Icon"
                          />{' '}
                          {user.assignEmployee}
                        </Link>
                      </li>
                      <li>
                        <span>
                          <img
                            src={user.editActionLogo}
                            onClick={() => onClick('addHolidayGroup')}
                            alt="Edit Icon"
                          />
                        </span>
                      </li>
                      <li>
                        <Link to="/time-and-attendance/holiday-list">
                          <img src={user.eyeActionLogo} alt="Eye Icon" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div> */}
          </TabPanel>
        </TabView>
      </div>
      <Dialog
        header="Add Holiday Group"
        visible={addHolidayGroup}
        draggable={false}
        resizable={false}
        className="small_popup"
        footer={renderFooter('addHolidayGroup')}
        onHide={() => onHide('addHolidayGroup')}
      >
        <div className="add_holiday_popup">
          <div className="form_group">
            <label>Holiday Group Name</label>
            <Input type="text" placeholder="Enter a Holiday Group Name" />
          </div>
          <div className="form_group">
            <label>Holiday Group Description</label>
            <TextArea placeholder="Write Description" rows={4} />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
