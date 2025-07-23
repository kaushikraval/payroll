import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import PlusIcon from '../../../Assets/images/plus.svg';
import { useTranslation } from 'react-i18next';
import EmployeeIcon from '../../../Assets/images/use-plus.svg';
import DeleteIcon from '../../../Assets/images/trash.svg';
import EditIcon from '../../../Assets/images/edit.svg';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
export default function ShiftScheduleAndPattern() {
  const { t } = useTranslation();
  const shiftScheduleAndPattern = [
    {
      shiftScheduleName: 'Group 1',
      scheduleType: 'Weekly',
      period: '1 Week	',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      shiftScheduleName: 'Group 1',
      scheduleType: 'Weekly',
      period: '1 Week	',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      shiftScheduleName: 'Group 1',
      scheduleType: 'Weekly',
      period: '1 Week	',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      shiftScheduleName: 'Group 1',
      scheduleType: 'Weekly',
      period: '1 Week	',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
    {
      shiftScheduleName: 'Group 1',
      scheduleType: 'Weekly',
      period: '1 Week	',
      assignEmployee: '20 Employee',
      employeeIcon: EmployeeIcon,
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      editActionLogo: EditIcon,
      deleteActionLogo: DeleteIcon,
    },
  ];
  const [deletedetail, setDeleteDetail] = useState(false);

  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-center">
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
  const renderFooterEdit = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          s
          className="btn-secondary"
        />
        <Button
          label="Add"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const [editcategory, setEditCategory] = useState(false);
  const dialogFuncMap = {
    editcategory: setEditCategory,
    deletedetail: setDeleteDetail,
  };

  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
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
          <li>Shift Schedual & Pattern</li>
        </ul>
      </div>
      <div className="data_table_one schedule_pattern_table_Wrap">
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
                to="/time-and-attendance/configure-new-pattern"
                className="btn-primary"
              >
                <img src={PlusIcon} className="me-2" alt="Plus Icon" />
                Configure Pattern
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
                    <span>Shift Schedule Name</span>
                  </th>
                  <th>
                    <span>Schedule Type</span>
                  </th>
                  <th>
                    <span>Period</span>
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
                {shiftScheduleAndPattern.map((emp, index) => {
                  return (
                    <tr key={index}>
                      <td>{emp.shiftScheduleName}</td>
                      <td>{emp.scheduleType}</td>
                      <td>{emp.period}</td>
                      <td>
                        <Link
                          className="text-secondary"
                          to="/time-and-attendance/shift-schedule-and-pattern/assign-Employee"
                        >
                          <img src={emp.employeeIcon} alt="Employee Icon" /> 20
                          Employee
                        </Link>
                      </td>
                      <td>
                        {emp.actionByName}
                        <span className="wrap_text">{emp.actionByDate}</span>
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <img src={emp.editActionLogo} alt="Edit Icon" />
                          </li>
                          <li onClick={() => onClick('deletedetail')}>
                            <img src={emp.deleteActionLogo} alt="Delate Icon" />
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
      <Dialog
        header="Confirm"
        visible={deletedetail}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deletedetail')}
        onHide={() => onHide('deletedetail')}
      >
        <div className="delate_popup_wrap text-center">
          <p>Are you sure you want to delete?</p>
        </div>
      </Dialog>
    </div>
  );
}
