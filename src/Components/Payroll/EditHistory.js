import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import Input from '../Common/Input';
import TextArea from '../Common/TextArea';
import EmployeeImg from '../../Assets/images/user3.png';

export default function EditHistory() {
  const [selectReason, setSelectReason] = useState([]);
  const [ComponentType, setComponentType] = useState([]);
  const [CalculationType, setCalculationType] = useState([]);
  const [EntryType, setEntryType] = useState([]);
  const [ProcessMonthYear, setProcessMonthYear] = useState([]);
  const selectReasonOption = [
    { label: 'Earning', value: 'relocation' },
    { label: 'Deduction', value: 'Deduction' },
  ];
  const ComponentTypeOption = [
    { label: 'Incentive', value: 'Incentive' },
    { label: 'Other Earning', value: 'Other Earning' },
    { label: 'Performance Bonus', value: 'Performance Bonus' },
  ];
  const CalculationTypeOption = [
    { label: 'Fix Amount', value: 'Fix Amount' },
    { label: 'System Calculated', value: 'System Calculated' },
  ];
  const EntryTypeOption = [
    { label: 'Singel', value: 'Singel' },
    { label: 'Multiple', value: 'Multiple' },
  ];
  const ProcessMonthYearOption = [
    { label: 'Apr - 2022', value: 'Apr - 2022' },
    { label: 'May - 2022', value: 'May - 2022' },
    { label: 'Jun - 2022', value: 'Jun - 2022' },
    { label: 'Jul - 2022', value: 'Jul - 2022' },
    { label: 'Aug - 2022', value: 'Aug - 2022' },
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
            <b>Payroll</b>
          </li>
          <li>Earning & Deduction</li>
        </ul>
      </div>
      <div className="add_earning_deduction_form bg_white_box p-3">
        <div className="d-flex align-items-center mb-3">
          <div className="employee_img">
            <img src={EmployeeImg} width={38} alt="user" />
          </div>
          <div className="employee_text ms-2 d-flex align-items-start">
            <p className="m-0">
              Dhaval Patel <br /> <span>UX/UI Designer</span>
            </p>
            <span className="emp_code ms-2">EMP. CODE: 1002</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form_group">
              <label>Type</label>
              <ReactSelectSingle
                value={selectReason}
                options={selectReasonOption}
                filter
                onChange={e => {
                  setComponentType(e.value);
                }}
                placeholder="Select Reason"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Component Type</label>
              <ReactSelectSingle
                value={ComponentType}
                options={ComponentTypeOption}
                filter
                onChange={e => {
                  setSelectReason(e.value);
                }}
                placeholder="Select Component Type"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Calculation Type</label>
              <ReactSelectSingle
                value={CalculationType}
                options={CalculationTypeOption}
                filter
                onChange={e => {
                  setCalculationType(e.value);
                }}
                placeholder="Select Component Type"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Entry Type</label>
              <ReactSelectSingle
                value={EntryType}
                options={EntryTypeOption}
                filter
                onChange={e => {
                  setEntryType(e.value);
                }}
                placeholder="Select Component Type"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Process Month/Year</label>
              <ReactSelectSingle
                value={ProcessMonthYear}
                options={ProcessMonthYearOption}
                filter
                onChange={e => {
                  setProcessMonthYear(e.value);
                }}
                placeholder="Select Component Type"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Enter Amount</label>
              <Input placeholder="Amount" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Reason*</label>
              <TextArea placeholder="Enter your reason" rows={5} cols={10} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/payroll/earning-deduction" className="btn-secondary me-2">
            Cancel
          </Link>
          <Link to="/payroll/earning-deduction" className="btn-primary">
            Submit
          </Link>
        </div>
      </div>
    </>
  );
}
