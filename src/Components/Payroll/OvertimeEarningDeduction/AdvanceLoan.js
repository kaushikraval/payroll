import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import FilterIcon from '../../../Assets/images/filter.svg';
import UserImage from '../../../Assets/images/user8.png';
import EmployeeImg from '../../../Assets/images/user3.png';
import DownloadIcon from '../../../Assets/images/downloadicon-blue.svg';
import Export from '../../../Assets/images/upload-icon-blue.svg';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import View from '../../../Assets/images/eyes.svg';
import Edit from '../../../Assets/images/edit.svg';
import CheckCircle from '../../../Assets/images/close-circle.svg';
import cancelIcon from '../../../Assets/images/close-circle-two.png';
import Deleat from '../../../Assets/images/DeleteBtn.svg';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import TextArea from '../../Common/TextArea';
import { TabView, TabPanel } from 'primereact/tabview';
export default function AdvanceLoan() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [status, setStatus] = useState([]);

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

  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const statusOptions = [
    { label: 'In Progrees', value: 'In Progrees' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Cancelled', value: 'Cancelled' },
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
  const [approveLeave, setApproveLeave] = useState(false);
  const [rejectLeave, setRejectLeave] = useState(false);
  const dialogFuncMap = {
    approveLeave: setApproveLeave,
    rejectLeave: rejectLeave,
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
          <li>
            <b>Payroll Process</b>
          </li>
          <li>Advance loan</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="completed">
            <div className="icon"></div>
            <span>Overtime</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Earning</span>
          </li>
          <li className="completed">
            <div className="icon"></div>
            <span>Deduction</span>
          </li>
          <li className="current">
            <div className="icon"></div>
            <span>Advance & Loan</span>
          </li>
        </ul>
      </div>
      <div className="advance_loan_tab">
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
                          value={status}
                          options={statusOptions}
                          onChange={e => {
                            setStatus(e.value);
                          }}
                          placeholder="Status"
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
                <div className="text-end d-flex align-items-center justify-content-sm-end">
                  <button type="button" className="btn-border">
                    <img className="me-2" src={Export} alt="Export" /> Export
                  </button>
                  <Link
                    to="/payroll/process-payroll/deduction"
                    className="btn-secondary mx-2"
                  >
                    Back
                  </Link>
                  <Link to="/payroll/process-payroll" className="btn-primary">
                    Save & Continue
                  </Link>
                </div>
              </div>
            </div>
            <div className="data_table_one overtime_earning_deduction">
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
                        <span>Department</span>
                      </th>
                      <th scope="col">
                        <span>Designation</span>
                      </th>
                      <th scope="col">
                        <span>Advance Amount</span>
                      </th>
                      <th scope="col">
                        <span>Month/Year</span>
                      </th>
                      <th scope="col">
                        <span>OT AmountReason</span>
                      </th>
                      <th scope="col">
                        <span>Action By</span>
                      </th>
                      <th scope="col">
                        <span>Status</span>
                      </th>
                      <th scope="col">
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1001</td>
                      <td>
                        <div class="name_wrap">
                          <img src={EmployeeImg} alt="UserImage" />
                          <span>Chintan Raval</span>
                        </div>
                      </td>

                      <td>Web Design</td>
                      <td>Executive</td>
                      <td>5,000.00</td>
                      <td>Sep - 2022</td>
                      <td>Loan Payment</td>
                      <td>
                        Chirag Sondagar{' '}
                        <span className="d-block wrap_text">
                          On 8 Aug 2022 • 06:04 PM
                        </span>
                      </td>
                      <td>
                        <span className="badge bedge_success">Approved</span>
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex align-items-center">
                          <li>
                            <img
                              src={CheckCircle}
                              alt="save"
                              onClick={() => setApproveLeave(true)}
                            />
                          </li>
                          <li>
                            <img
                              src={cancelIcon}
                              alt="cancel"
                              onClick={() => setRejectLeave(true)}
                            />
                          </li>
                          <li>
                            <img src={Edit} alt="Edit" />
                          </li>
                          <li>
                            <img src={View} alt="view" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4}>Total</td>
                      <td colSpan={6}>29,600.00</td>
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
          </TabPanel>
          <TabPanel header="Loan">
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
              <div className="col-sm-8 order-2 order-sm-1">
                <div className="text-end d-flex align-items-center justify-content-sm-end">
                  <button type="button" className="btn-border">
                    <img className="me-2" src={DownloadIcon} alt="Export" />{' '}
                    Export
                  </button>
                  <Link
                    to="/payroll/process-payroll/deduction"
                    className="btn-secondary mx-2"
                  >
                    Back
                  </Link>
                  <Link to="/payroll/process-payroll" className="btn-primary">
                    Save & Continue
                  </Link>
                </div>
              </div>
            </div>
            <div className="data_table_one overtime_earning_deduction">
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
                        <span>Department</span>
                      </th>
                      <th scope="col">
                        <span>Designation</span>
                      </th>
                      <th scope="col">
                        <span>Loan Amount</span>
                      </th>
                      <th scope="col">
                        <span>Intrest Rate%</span>
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
                        <span>Status</span>
                      </th>
                      <th scope="col">
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1001</td>
                      <td>
                        <div class="name_wrap">
                          <img src={EmployeeImg} alt="UserImage" />
                          <span>Chintan Raval</span>
                        </div>
                      </td>

                      <td>Web Design</td>
                      <td>Executive</td>
                      <td>20,000.00</td>
                      <td>10</td>
                      <td>1,333.00</td>
                      <td>21,333.00</td>
                      <td>2,667.00</td>
                      <td>
                        <span className="badge bedge_success">Approved</span>
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex align-items-center">
                          <li>
                            <img src={Edit} alt="Edit" />
                          </li>
                          <li>
                            <img src={Deleat} alt="Deleat" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={8}>Total</td>
                      <td colSpan={3}>29,600.00</td>
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
          </TabPanel>
        </TabView>
      </div>
      <Dialog
        className="small_popup"
        header="Approve Leave"
        visible={approveLeave}
        // style={{ width: '50vw' }}
        onHide={() => setApproveLeave(false)}
        footer={renderFooter('approveLeave')}
      >
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Employee Name :</label>
              <p>Chintan Patel</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Date :</label>
              <p>16 Aug 2022</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Days :</label>
              <p>1</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Name :</label>
              <p>Casual Leave</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Reason :</label>
              <p>Personal </p>
            </div>
          </div>
          <div className="col-12">
            <div className="form_group">
              <label>Approval Comment :</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        className="small_popup"
        header="Reject Leave"
        visible={rejectLeave}
        // style={{ width: '50vw' }}
        onHide={() => setRejectLeave(false)}
        footer={renderFooter('rejectLeave')}
      >
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Employee Name :</label>
              <p>Chintan Patel</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Date :</label>
              <p>25 Aug - 30 Aug 2022</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Days :</label>
              <p>5</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Leave Name :</label>
              <p>Earned Leave</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Reason :</label>
              <p>Family Function</p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Reject Comment :</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
