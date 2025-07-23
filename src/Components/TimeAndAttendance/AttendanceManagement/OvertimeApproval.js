import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import TextArea from '../../Common/TextArea';
import UserImage from '../../../Assets/images/user8.png';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import EmployeeImg from '../../../Assets/images/user3.png';
import FilterIcon from '../../../Assets/images/filter.svg';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import ReactCheckbox from './../../Common/ReactCheckbox';
import View from '../../../Assets/images/eyes.svg';
import Edit from '../../../Assets/images/edit.svg';
import CheckCircle from '../../../Assets/images/close-circle.svg';
import cancelIcon from '../../../Assets/images/close-circle-two.png';
export default function OvertimeApproval() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [location, setLocation] = useState([]);
  const [status, setStatus] = useState([]);
  const dialogFuncMap = {};

  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
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
  const statusOptions = [
    { label: 'In Progrees', value: 'In Progrees' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Cancelled', value: 'Cancelled' },
  ];
  const overtimeDetailData = [
    {
      empCode: '1001',
      empFullName: 'Chintan Raval',
      otScheme: 'Thu,1 Dec 2022',
      dayForDate: 'Wed,',
      date: '30 Nov 2022',
      otHours: '04 H : 20 M',
      status: 'Approved',
      actionByName: '',
      actionByDate: '',
    },
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

  const [checked, setChecked] = useState();
  const [approveOvertime, setApproveOvertime] = useState(false);
  const [bulkApproveOvertime, setBulkApproveOvertime] = useState(false);
  const [rejectOvertime, setRejectOvertime] = useState(false);
  const [bulkRejectOvertime, setBulkRejectOvertime] = useState(false);
  return (
    <>
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
              <b>Attendence</b>
            </li>
            <li>Overtime Approval</li>
          </ul>
        </div>
        <div className="top_filter_wrap">
          <div className="row">
            <div className="col-xl-12">
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
                    <img src={FilterIcon} className="me-2" alt="FilterImage" />
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
            <div className="text-sm-end">
              <button
                type="button"
                className="btn-border me-3"
                onClick={() => setBulkApproveOvertime(true)}
              >
                Approve
              </button>
              <button
                type="button"
                className="btn-border"
                onClick={() => setBulkRejectOvertime(true)}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
        <div className="attendance_request">
          <div className="data_table_one">
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
                      <span>OT Scheme</span>
                    </th>
                    <th scope="col">
                      <span>Date</span>
                    </th>

                    <th scope="col">
                      <span>OT Hours</span>
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
                  {overtimeDetailData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <ReactCheckbox
                            onChange={e => setChecked(e.checked)}
                            checked={checked}
                          />
                          <span className="ms-2">{data.empCode}</span>
                        </td>
                        <td>
                          <div className="name_wrap">
                            <img src={EmployeeImg} alt="UserImage" />
                            <span>{data.empFullName}</span>
                          </div>
                        </td>
                        <td>{data.otScheme}</td>
                        <td>
                          {data.dayForDate}
                          <br />
                          {data.date}
                        </td>
                        <td>{data.otHours}</td>
                        <td>
                          {data.actionByName === '' &&
                            data.actionByDate === '' &&
                            '-'}
                        </td>

                        <td>
                          <span className="badge bedge_success">Approved</span>
                        </td>
                        <td>
                          <ul className="edit_wrap d-flex">
                            <li>
                              <img
                                src={View}
                                data-inject-svg
                                className=""
                                alt="view"
                              />
                            </li>
                            <li>
                              <img
                                src={CheckCircle}
                                data-inject-svg
                                className=""
                                alt="save"
                                onClick={() => setApproveOvertime(true)}
                              />
                            </li>
                            <li>
                              <img
                                src={cancelIcon}
                                data-inject-svg
                                className=""
                                alt="cancel"
                                onClick={() => setRejectOvertime(true)}
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
      </div>

      <Dialog
        className="small_popup"
        header="Approve Overtime Request"
        visible={approveOvertime}
        // style={{ width: '50vw' }}
        onHide={() => setApproveOvertime(false)}
        footer={renderFooter('approveOvertime')}
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
              <label>Date :</label>
              <p>Wed, 30 Nov 2022</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Final Ovetime Hours :</label>
              <p>04 H : 20 M</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Reason :</label>
              <p>Extra Design Work</p>
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
        header="Reject Overtime Request"
        visible={rejectOvertime}
        // style={{ width: '50vw' }}
        onHide={() => setRejectOvertime(false)}
        footer={renderFooter('rejectOvertime')}
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
              <label>Date :</label>
              <p>Thu, 1 Dec 2022</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Final Ovetime Hours :</label>
              <p>04 H : 20 M</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="form_group">
              <label>Reason :</label>
              <p>Extra Design Work</p>
            </div>
          </div>

          <div className="col-12">
            <div className="form_group">
              <label>Reject Comment :</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        className="small_popup"
        header="Bulk Approve Overtime Requests"
        visible={bulkApproveOvertime}
        onHide={() => setBulkApproveOvertime(false)}
        footer={renderFooter('bulkApproveOvertime')}
      >
        <p className="text-center">
          Do You Want to Approve 4 Overtime Requests?
        </p>
      </Dialog>
      <Dialog
        className="small_popup"
        header="Bulk Reject Overtime Requests"
        visible={bulkRejectOvertime}
        onHide={() => setBulkRejectOvertime(false)}
        footer={renderFooter('bulkRejectOvertime')}
      >
        <p className="text-center">
          Do You Want to Reject 4 Overtime Requests?
        </p>
      </Dialog>
    </>
  );
}
