import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import EmployeeImg from '../../Assets/images/user3.png';
import ReactCelender from '../Common/ReactCelender';
import ReactSelectSingle from '../Common/ReactSelectSingle';
export default function LeaveBalanceDetail() {
  const [adjustmentType, setAdjustmentTypeSelect] = useState([]);
  const adjustmentTypeOption = [
    { label: 'Add', value: 'Add' },
    { label: 'Subtract', value: 'Subtract' },
  ];
  return (
    <>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Leave</b>
          </li>
          <li>
            <Link to="/leave/leave-balance-correction">
              <b>Leave Balance Correction</b>
            </Link>
          </li>
          <li>Leave Balance Detail</li>
        </ul>
      </div>
      <div className="user_wrap">
        <div className="row">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <div className="employee_img">
                <img src={EmployeeImg} alt="user" />
              </div>
              <div className="employee_text">
                <p className="m-0">
                  Dhaval Patel <br /> <span>UX/UI Designer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="data_table_one leave_balance_detail_table">
        <div className="table-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th scope="col">
                  <span>Leave Name</span>
                </th>
                <th scope="col" style={{ width: '180px' }}>
                  <span>Date</span>
                </th>
                <th scope="col">
                  <span>Current Balance</span>
                </th>
                <th scope="col">
                  <span>Adjustment Type</span>
                </th>
                <th scope="col">
                  <span>Adjustment Balance</span>
                </th>
                <th scope="col">
                  <span>New Balance</span>
                </th>
                <th scope="col">
                  <span>Correction Reason</span>
                </th>
                <th scope="col">
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="leave_doat earned_leave d-inline-block me-3"></span>
                  Earned Leave
                </td>
                <td>
                  <div className="form_group">
                    <ReactCelender value="date" placeholder="Select Date" />
                  </div>
                </td>
                <td>12</td>
                <td>
                  <ReactSelectSingle
                    value={adjustmentType}
                    options={adjustmentTypeOption}
                    onChange={e => {
                      setAdjustmentTypeSelect(e.value);
                    }}
                    filter={false}
                    placeholder="Adjustment Type"
                  />
                </td>
                <td>
                  <input className="form-control" placeholder="0" />
                </td>
                <td>
                  <input className="form-control" placeholder="0" />
                </td>
                <td>
                  <input
                    className="form-control"
                    placeholder="Correction Reason"
                  />
                </td>
                <td>
                  <ul className="edit_wrap d-flex">
                    <li>
                      <i className="pi pi-check-circle active"></i>
                    </li>
                    <li>
                      <i className="pi pi-times-circle active"></i>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="leave_doat sick_leave d-inline-block me-3"></span>
                  Sick Leave
                </td>
                <td>
                  <div className="form_group">
                    <ReactCelender value="date" placeholder="Select Date" />
                  </div>
                </td>
                <td>12</td>
                <td>
                  <ReactSelectSingle
                    value={adjustmentType}
                    options={adjustmentTypeOption}
                    onChange={e => {
                      setAdjustmentTypeSelect(e.value);
                    }}
                    filter={false}
                    placeholder="Adjustment Type"
                  />
                </td>
                <td>
                  <input className="form-control" placeholder="0" />
                </td>
                <td>
                  <input className="form-control" placeholder="0" />
                </td>
                <td>
                  <input
                    className="form-control"
                    placeholder="Correction Reason"
                  />
                </td>
                <td>
                  <ul className="edit_wrap d-flex">
                    <li>
                      <i className="pi pi-check-circle active"></i>
                    </li>
                    <li>
                      <i className="pi pi-times-circle active"></i>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="leave_doat casual_leave d-inline-block me-3"></span>
                  Casual Leave
                </td>
                <td>
                  <div className="form_group">
                    <ReactCelender value="date" placeholder="Select Date" />
                  </div>
                </td>
                <td>12</td>
                <td>
                  <ReactSelectSingle
                    value={adjustmentType}
                    options={adjustmentTypeOption}
                    onChange={e => {
                      setAdjustmentTypeSelect(e.value);
                    }}
                    filter={false}
                    placeholder="Adjustment Type"
                  />
                </td>
                <td>
                  <input className="form-control" placeholder="0" />
                </td>
                <td>
                  <input className="form-control" placeholder="0" />
                </td>
                <td>
                  <input
                    className="form-control"
                    placeholder="Correction Reason"
                  />
                </td>
                <td>
                  <ul className="edit_wrap d-flex">
                    <li>
                      <i className="pi pi-check-circle active"></i>
                    </li>
                    <li>
                      <i className="pi pi-times-circle active"></i>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="leave_doat maternity_leave d-inline-block me-3"></span>
                  Maternity Leave
                </td>
                <td>
                  <div className="form_group">
                    <ReactCelender value="date" placeholder="Select Date" />
                  </div>
                </td>
                <td>12</td>
                <td>
                  <ReactSelectSingle
                    value={adjustmentType}
                    options={adjustmentTypeOption}
                    onChange={e => {
                      setAdjustmentTypeSelect(e.value);
                    }}
                    filter={false}
                    placeholder="Adjustment Type"
                  />
                </td>
                <td>
                  <input className="form-control" placeholder="0" />
                </td>
                <td>
                  <input className="form-control" placeholder="0" />
                </td>
                <td>
                  <input
                    className="form-control"
                    placeholder="Correction Reason"
                  />
                </td>
                <td>
                  <ul className="edit_wrap d-flex">
                    <li>
                      <i className="pi pi-check-circle active"></i>
                    </li>
                    <li>
                      <i className="pi pi-times-circle active"></i>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="leave_doat short_leave d-inline-block me-3"></span>
                  Short Leave
                </td>
                <td>
                  <div className="form_group">
                    <ReactCelender value="date" placeholder="Select Date" />
                  </div>
                </td>
                <td>12</td>
                <td>
                  <ReactSelectSingle
                    value={adjustmentType}
                    options={adjustmentTypeOption}
                    onChange={e => {
                      setAdjustmentTypeSelect(e.value);
                    }}
                    filter={false}
                    placeholder="Adjustment Type"
                  />
                </td>
                <td>
                  <input className="form-control" placeholder="0" />
                </td>
                <td>
                  <input className="form-control" placeholder="0" />
                </td>
                <td>
                  <input
                    className="form-control"
                    placeholder="Correction Reason"
                  />
                </td>
                <td>
                  <ul className="edit_wrap d-flex">
                    <li>
                      <i className="pi pi-check-circle active"></i>
                    </li>
                    <li>
                      <i className="pi pi-times-circle active"></i>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
