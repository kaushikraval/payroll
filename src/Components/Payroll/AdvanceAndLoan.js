import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import { TabView, TabPanel } from 'primereact/tabview';
import UserImage from '../../Assets/images/user8.png';
import EmployeeImg from '../../Assets/images/user3.png';
import Export from '../../Assets/images/upload-icon-blue.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import View from '../../Assets/images/eyes.svg';
import Edit from '../../Assets/images/edit.svg';
import CheckCircle from '../../Assets/images/close-circle.svg';
import cancelIcon from '../../Assets/images/close-circle-two.png';
import PlusIcon from '../../Assets/images/plus.svg';
import LoanIssued from '../../Assets/images/loanissued.svg';
import LoanoutStanding from '../../Assets/images/loanoutstanding.svg';
import LoanAmount from '../../Assets/images/loanamount.svg';
import NoAdvance from '../../Assets/images/noadvance.png';
import NoLoan from '../../Assets/images/noloan.png';
import Summary from './Chart/Summary';
export default function AdvanceAndLoan() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [status, setStatus] = useState([]);
  const [frommonth, setFromMonth] = useState([]);
  const [tomonth, setToMonth] = useState([]);

  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const statusOptions = [
    { label: 'Earning', value: 'Earning' },
    { label: 'Deduction', value: 'Deduction' },
  ];

  const frommonthOptions = [
    { label: 'Apr - 2022', value: 'Apr - 2022' },
    { label: 'May - 2022', value: 'May - 2022' },
    { label: 'Jun - 2022', value: 'Jun - 2022' },
  ];
  const tomonthOptions = [
    { label: 'Apr - 2022', value: 'Apr - 2022' },
    { label: 'May - 2022', value: 'May - 2022' },
    { label: 'Jun - 2022', value: 'Jun - 2022' },
  ];
  const reportingAuthorityHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <img
          alt={option.label}
          src={UserImage}
          onError={e => (e.target.src = '')}
          className={`flag flag-${option?.label?.toLowerCase()}`}
        />
        <div className="multiple_label">{option.label}</div>
      </div>
    );
  };
  const advanceData = [
    {
      empCode: '1001',
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      salaryAmount: '32,000.00',
      advanceAmount: '5,000.00',
      monthYear: 'Sep - 2022',
      reason: 'Loan Payment',
      status: 'Approved',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 1 Sep 2022 • 05:48 PM',
    },
  ];
  const loanData = [
    {
      empCode: '1001',
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      loanType: 'Incentive',
      status: 'Approved',
      loanAmount: '20,000.00',
      interestRate: '10',
      actualEmiInstallments: '8',
      totalIntrestAmount: '1,333.00',
      outStandingAmount: '21,333.00',
      emiAmount: '2,667.00',
      emiStartFrom: '1 Sep 2022',
      loanPaymentMode: 'Inside Payroll',
      loanClearAmount: '0.00',
      pendingEmiInstallments: '0',
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
          <li>Advance & Loan</li>
        </ul>
      </div>
      <div className="loan_advance_tab">
        <TabView>
          <TabPanel header="Advance">
            <div className="top_filter_wrap">
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
                          value={frommonth}
                          options={frommonthOptions}
                          onChange={e => {
                            setFromMonth(e.value);
                          }}
                          placeholder="From Month"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={tomonth}
                          options={tomonthOptions}
                          onChange={e => {
                            setToMonth(e.value);
                          }}
                          placeholder="To Month"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={status}
                          options={statusOptions}
                          filter
                          onChange={e => {
                            setStatus(e.value);
                          }}
                          placeholder="All Status"
                        />
                      </div>
                    </li>
                    <li>
                      <button type="button" className="btn-primary">
                        <img
                          src={FilterIcon}
                          className="me-2"
                          alt="FilterImage"
                        />
                        Filter
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row align-items-center mb-3">
              <div className="col-lg-6">
                <div className="show_entries order-2 order-lg-1">
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
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="text-end d-flex align-items-center justify-content-lg-end mt-3 mt-lg-0 flex-wrap">
                  <button type="button" className="btn-border me-2">
                    <img className="me-2" src={Export} alt="Export" /> Bulk
                    Upload
                  </button>
                  <Link
                    to="/payroll/advance-loan/add-advance"
                    className="btn-primary"
                  >
                    <img src={PlusIcon} alt="PlusIcon" className="me-1" /> Add
                    Advance
                  </Link>
                </div>
              </div>
            </div>
            <div className="data_table_one p_advance_table">
              <div className="table-responsive">
                <table id="example" className="display">
                  <thead>
                    <tr>
                      <th scope="col">
                        <span>Emp.Code</span>
                      </th>
                      <th scope="col">
                        <span>Emp.Name</span>
                      </th>
                      <th scope="col">
                        <span>Salary Amonut</span>
                      </th>
                      <th scope="col">
                        <span>Advance Amount</span>
                      </th>
                      <th scope="col">
                        <span>Month/Year</span>
                      </th>
                      <th scope="col">
                        <span>Reason</span>
                      </th>
                      <th scope="col">
                        <span>Status</span>
                      </th>
                      <th scope="col">
                        <span>Action By</span>
                      </th>
                      <th scope="col">
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {advanceData.map(data => {
                      return (
                        <tr>
                          <td>{data.empCode}</td>
                          <td>
                            <div class="name_wrap">
                              <img src={data.empProfile} alt="UserImage" />
                              <span>{data.empName}</span>
                            </div>
                          </td>

                          <td>{data.salaryAmount}</td>
                          <td>{data.advanceAmount}</td>
                          <td>{data.monthYear}</td>
                          <td>{data.reason}</td>
                          <td>
                            <span className="badge bedge_success">
                              {data.status}
                            </span>
                          </td>
                          <td>
                            {data.actionByName}
                            <span className="d-block wrap_text">
                              {data.actionByDate}
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img
                                  src={CheckCircle}
                                  data-inject-svg
                                  className=""
                                  alt="save"
                                />
                              </li>
                              <li>
                                <img
                                  src={cancelIcon}
                                  data-inject-svg
                                  className=""
                                  alt="cancel"
                                />
                              </li>
                              <li>
                                <img
                                  src={Edit}
                                  data-inject-svg
                                  className=""
                                  alt="Edit"
                                />
                              </li>
                              <li>
                                <img
                                  src={View}
                                  data-inject-svg
                                  className=""
                                  alt="view"
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
          </TabPanel>
          <TabPanel header="Loan">
            <div className="loan_wrap mb-4">
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="wrap_box mb-3 mb-xl-0">
                    <p className="mb-1">Total Loan Issued Amount</p>
                    <div className="d-flex align-items-center">
                      <img src={LoanIssued} alt="LoanIssued" />
                      <h6 className="ms-3 mb-0">0.00</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="wrap_box mb-3 mb-xl-0">
                    <p className="mb-1">Total Loan Issued Amount</p>
                    <div className="d-flex align-items-center">
                      <img src={LoanoutStanding} alt="LoanoutStanding" />
                      <h6 className="ms-3 mb-0">0.00</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="wrap_box mb-3 mb-xl-0">
                    <p className="mb-1">Total Loan Issued Amount</p>
                    <div className="d-flex align-items-center">
                      <img src={LoanAmount} alt="LoanAmount" />
                      <h6 className="ms-3 mb-0">0.00</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="wrap_box mb-3 mb-xl-0">
                    <Summary />
                  </div>
                </div>
              </div>
            </div>
            <div className="top_filter_wrap">
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
                          value={frommonth}
                          options={frommonthOptions}
                          onChange={e => {
                            setFromMonth(e.value);
                          }}
                          placeholder="From Month"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={tomonth}
                          options={tomonthOptions}
                          onChange={e => {
                            setToMonth(e.value);
                          }}
                          placeholder="To Month"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={status}
                          options={statusOptions}
                          filter
                          onChange={e => {
                            setStatus(e.value);
                          }}
                          placeholder="All Status"
                        />
                      </div>
                    </li>
                    <li>
                      <button type="button" className="btn-primary">
                        <img
                          src={FilterIcon}
                          className="me-2"
                          alt="FilterImage"
                        />
                        Filter
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row align-items-center mb-3">
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
                <div className="text-sm-end">
                  <Link
                    to="/payroll/advance-loan/apply-loan"
                    className="btn-primary"
                  >
                    <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                    Apply Loan
                  </Link>
                </div>
              </div>
            </div>
            <div className="data_table_one p_loan_table">
              <div className="table-responsive">
                <table id="example" className="display">
                  <thead>
                    <tr>
                      <th scope="col">
                        <span>Emp.Code</span>
                      </th>
                      <th scope="col">
                        <span>Emp.Name</span>
                      </th>
                      <th scope="col">
                        <span>Loan Type</span>
                      </th>
                      <th scope="col">
                        <span>Status</span>
                      </th>
                      <th scope="col">
                        <span>Loan Amount</span>
                      </th>
                      <th scope="col">
                        <span>Intrest Rate</span>
                      </th>
                      <th scope="col">
                        <span>Actucal EMI Installments</span>
                      </th>
                      <th scope="col">
                        <span>Total Intrest Amount</span>
                      </th>

                      <th scope="col">
                        <span>Outstanding Amount</span>
                      </th>
                      <th scope="col">
                        <span>EMI Amount</span>
                      </th>
                      <th scope="col">
                        <span>EMI Start From</span>
                      </th>
                      <th scope="col">
                        <span>Loan Payment Mode</span>
                      </th>
                      <th scope="col">
                        <span>Loan Clear Amount</span>
                      </th>
                      <th scope="col">
                        <span>Pending EMI Installments</span>
                      </th>
                      <th scope="col">
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {loanData.map(data => {
                      return (
                        <tr>
                          <td>{data.empCode}</td>
                          <td>
                            <div class="name_wrap">
                              <img src={data.empProfile} alt="UserImage" />
                              <span>{data.empName}</span>
                            </div>
                          </td>

                          <td>{data.loanType}</td>
                          <td>
                            <span className="badge bedge_success">
                              {data.status}
                            </span>
                          </td>
                          <td>{data.loanAmount}</td>
                          <td>{data.interestRate}</td>
                          <td>{data.actualEmiInstallments}</td>
                          <td>{data.totalIntrestAmount}</td>
                          <td>{data.outStandingAmount}</td>
                          <td>{data.emiAmount}</td>
                          <td>{data.emiStartFrom}</td>
                          <td>{data.loanPaymentMode}</td>
                          <td>{data.loanClearAmount}</td>
                          <td>{data.pendingEmiInstallments}</td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img
                                  src={CheckCircle}
                                  data-inject-svg
                                  className=""
                                  alt="save"
                                />
                              </li>
                              <li>
                                <img
                                  src={cancelIcon}
                                  data-inject-svg
                                  className=""
                                  alt="cancel"
                                />
                              </li>
                              <li>
                                <img
                                  src={Edit}
                                  data-inject-svg
                                  className=""
                                  alt="Edit"
                                />
                              </li>
                              <li>
                                <Link to="/payroll/advance-loan/view-loan">
                                  <img
                                    src={View}
                                    data-inject-svg
                                    className=""
                                    alt="view"
                                  />
                                </Link>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4}>Total</td>
                      <td colSpan={3}>235,000.00</td>
                      <td>28,249.00</td>
                      <td colSpan={4}>448,249.00</td>
                      <td colSpan={3}>134,916.00</td>
                    </tr>
                  </tfoot>
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
            {/* <div className="no_data text-center">
              <img src={NoLoan} alt="No Loan" />
              <p className="py-5">No Loan Request</p>
            </div> */}
          </TabPanel>
        </TabView>
      </div>
    </>
  );
}
