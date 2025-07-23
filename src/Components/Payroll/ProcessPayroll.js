import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SplitButton } from 'primereact/splitbutton';

import HomeIcon from '../../Assets/images/home-blue.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import RedArrow from '../../Assets/images/red-arrow.svg';
import GreenArrow from '../../Assets/images/green-arrow.svg';
import NewJoinees from '../../Assets/images/new-joinees.svg';
import AttendanceLeave from '../../Assets/images/attendance-leave.svg';
import SalaryRevisionsArrear from '../../Assets/images/salary-revisions-arrear.svg';
import OvertimeEarningDeduction from '../../Assets/images/overtime-earning-deduction.svg';
import StatutoryNetpay from '../../Assets/images/statutory-netpay.svg';
export default function ProcessPayroll() {
  const [years, setYears] = useState([]);
  const [month, setMonth] = useState([]);
  const [company, setCompany] = useState([]);

  const yearsOptions = [
    { label: '2022 - 2023', value: '2022 - 2023' },
    { label: '2021 - 2022', value: '2021 - 2022' },
    { label: '2020 - 2021', value: '2020 - 2021' },
  ];
  const monthOptions = [
    { label: 'Apr - 2022', value: 'Apr - 2022' },
    { label: 'May - 2022', value: 'May - 2022' },
    { label: 'Jun - 2022', value: 'Jun - 2022' },
  ];
  const companyOptions = [
    { label: 'Cmcreation Pvt Ltd', value: 'Cmcreation Pvt Ltd' },
    { label: 'Tempcm Pvt Ltd', value: 'Tempcm Pvt Ltd' },
    { label: 'Metaloop Solution', value: 'Metaloop Solution' },
  ];
  const items = [
    {
      label: 'Download Bank Format',
    },
    {
      label: 'Mark As Paid',
    },
    {
      label: 'Lock Payroll',
    },
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
          <li>Payroll Process</li>
        </ul>
      </div>
      <div className="top_filter_wrap mt-3">
        <div className="row">
          <div className="col-xl-12">
            <div className="d-flex align-items-start flex-wrap">
              <ul className="filter_wrapper flex-wrap flex-grow-1">
                <li>
                  <div className="form_group">
                    <ReactSelectMultiple
                      value={years}
                      options={yearsOptions}
                      onChange={e => {
                        setYears(e.value);
                      }}
                      placeholder="2022 - 2023"
                    />
                  </div>
                </li>
                <li>
                  <div className="form_group">
                    <ReactSelectMultiple
                      value={month}
                      options={monthOptions}
                      onChange={e => {
                        setMonth(e.value);
                      }}
                      placeholder="Dec 2022"
                    />
                  </div>
                </li>
                <li>
                  <div className="form_group">
                    <ReactSelectMultiple
                      value={company}
                      options={companyOptions}
                      onChange={e => {
                        setCompany(e.value);
                      }}
                      placeholder="Select Company"
                    />
                  </div>
                </li>
                <li>
                  {/* <button type="button" className="btn-primary">
                    <img src={FilterIcon} className="me-2" alt="FilterImage" />
                    Filter
                  </button> */}
                </li>
              </ul>
              <button type="button" className="btn-primary mb-3 mb-lg-0">
                Re-Generate
              </button>
              <SplitButton
                label="Finalized Payroll"
                className="p-button-primary mb-3 mb-lg-0 flex-shrink-0"
                model={items}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="payroll_process_info">
        <div className="info_top d-flex flex-lg-row flex-column justify-content-between">
          <div className="month">
            <h6>Aug 2022 Payroll</h6>
            <p className="mb-2">01 Aug - 31 Aug (31 days)</p>
            <p className="mb-0">Pay Day • 07 Sep 2022</p>
          </div>
          <div className="process_count flex-wrap mt-sm-3 mt-lg-0 d-flex">
            <div className="info_box">
              <p>Calendar days</p>
              <h6>31</h6>
            </div>
            <div className="info_box">
              <p>Employees</p>
              <h6>
                60
                <span className="badge bg-green mx-2">
                  <img src={GreenArrow} alt="arrow" />0
                </span>
                <span className="badge bg-red">
                  <img src={RedArrow} alt="arrow" /> 0
                </span>
              </h6>
            </div>
            <div className="info_box">
              <p>Payroll Processed</p>
              <h6>00/60 Employees</h6>
            </div>
          </div>
        </div>
        <div className="info_bottom d-flex align-items-center flex-wrap">
          <div className="payslip_box d-flex align-items-center flex-grow-1">
            <div className="final_total">
              <p className="mb-2">Total Net Payable</p>
              <h6 className="mb-2">0.00</h6>
              <h6 className="mb-2">
                Jul
                <span className="badge bg-green mx-2">
                  <img src={GreenArrow} alt="arrow" />0
                </span>
              </h6>
            </div>
            <span className="desh_box">=</span>
            <div className="final_total">
              <p className="mb-2">Total Gross Earning</p>
              <h6 className="mb-2">0.00</h6>
              <h6 className="mb-2">
                Jul
                <span className="badge bg-green mx-2">
                  <img src={GreenArrow} alt="arrow" />0
                </span>
              </h6>
            </div>
            <span className="desh_box">-</span>
            <div className="final_total">
              <p className="mb-2">Total Deduction</p>
              <h6 className="mb-2">0.00</h6>
              <h6 className="mb-2">
                Jul
                <span className="badge bg-green mx-2">
                  <img src={GreenArrow} alt="arrow" />0
                </span>
              </h6>
            </div>
          </div>
          <div className="mt-3 mt-lg-0">
            <Link
              to="/payroll/process-payroll/view-pay-register"
              className="btn-primary me-2"
            >
              View Pay Register
            </Link>
            <Link
              to="/payroll/process-payroll/manage-payslip"
              className="btn-border"
            >
              Manage Payslip
            </Link>
          </div>
        </div>
      </div>

      <div className="timeline_wrapper h-auto mt-4">
        <div className="timeline_heading">
          <h6 className="mb-0">Timeline</h6>
        </div>
        <div className="timeline_content">
          <ul>
            <li className="active">
              <Link
                className="d-flex align-items-center"
                to="/payroll/process-payroll/new-joinees"
              >
                <div className="timeline_icon">
                  <img src={NewJoinees} alt="Timeline icon" />
                </div>
                <h6>New Joinees & Exit Employee</h6>
              </Link>
            </li>
            <li>
              <Link
                className="d-flex align-items-center"
                to="/payroll/process-payroll/leave"
              >
                <div className="timeline_icon">
                  <img src={AttendanceLeave} alt="Timeline icon" />
                </div>
                <h6>Attendance & Leave</h6>
              </Link>
            </li>
            <li>
              <Link
                className="d-flex align-items-center"
                to="/payroll/process-payroll/salary-revisions"
              >
                <div className="timeline_icon">
                  <img src={SalaryRevisionsArrear} alt="Timeline icon" />
                </div>
                <h6>Salary Revisions & Arrear</h6>
              </Link>
            </li>
            <li>
              <Link
                className="d-flex align-items-center"
                to="/payroll/process-payroll/overtime"
              >
                <div className="timeline_icon">
                  <img src={OvertimeEarningDeduction} alt="Timeline icon" />
                </div>
                <h6>Overtime & Earning & Deduction</h6>
              </Link>
            </li>
            <li>
              <Link
                className="d-flex align-items-center"
                to="/payroll/process-payroll/provident-fund"
              >
                <div className="timeline_icon">
                  <img src={StatutoryNetpay} alt="Timeline icon" />
                </div>
                <h6>Statutory & Net Pay</h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-xl-6 mb-3">
          <div className="summary_box">
            <div className="summary_heading">
              <h6 className="mb-0">Provident Fund Summary</h6>
            </div>
            <div className="summary_info table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>No. Of Employee</th>
                    <th>Employer PF</th>
                    <th>Employee PF</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>28 Employee</td>
                    <td>9,563.00</td>
                    <td>8,827.00</td>
                    <td>18,390.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mb-3">
          <div className="summary_box">
            <div className="summary_heading">
              <h6 className="mb-0">ESIC Summary</h6>
            </div>
            <div className="summary_info table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>No. Of Employee</th>
                    <th>Employer ESI</th>
                    <th>Employee ESI</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>14 Employee</td>
                    <td>3,007.00</td>
                    <td>695.00</td>
                    <td>3,702.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mb-3">
          <div className="summary_box">
            <div className="summary_heading">
              <h6 className="mb-0">Professional Tax Summary</h6>
            </div>
            <div className="summary_info table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>No. Of Employee</th>
                    <th>Professional Tax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>04 Employee</td>
                    <td>800.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mb-3">
          <div className="summary_box">
            <div className="summary_heading">
              <h6 className="mb-0">Income Tax Summary</h6>
            </div>
            <div className="summary_info table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>No. Of Employee</th>
                    <th>Income Tax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>03 Employee</td>
                    <td>18,950.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-3">
          <div className="summary_box">
            <div className="summary_heading">
              <h6 className="mb-0">Employee Payment Type Summary</h6>
            </div>
            <div className="summary_info table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Bank Transfer</th>
                    <th>Cheque</th>
                    <th>Cash</th>
                    <th style={{ width: '50%' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>58,505.00</td>
                    <td>29,690.00</td>
                    <td>58,650.00</td>
                    <td>146,845.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
