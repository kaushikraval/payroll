import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Input from '../../../Common/Input';
import ReactRadioButton from '../../../Common/ReactRadioButton';
import ReactSelectSingle from '../../../Common/ReactSelectSingle';
import ReactCelender from '../../../Common/ReactCelender';
import TextArea from '../../../Common/TextArea';
import UserImage from '../../../../Assets/images/user8.png';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import DowanloadButtonIcon from '../../../../Assets/images/download.svg';
import EmployeeImg from '../../../../Assets/images/user3.png';
import Eyes from '../../../../Assets/images/eyes.svg';
import FilterIcon from '../../../../Assets/images/filter.svg';
import HandTrue from '../../../../Assets/images/hand-true.svg';
import ReactSelectMultiple from '../../../Common/ReactSelectMultiple';

export default function FullAndFinal() {
  const navigate = useNavigate();
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [searchEmp, setSearchEmp] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [location, setLocation] = useState([]);
  const [status, setStatus] = useState([]);
  const [addExitEmp, setAddExitEmp] = useState(false);
  const [rehire, setRehire] = useState(false);
  const [isAddExitEmp, setIsAddExitEmp] = useState('No');
  const [selectReason, setSelectReason] = useState([]);
  const dialogFuncMap = {
    addExitEmp: setAddExitEmp,
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const selectReasonOption = [
    { label: 'Relocation', value: 'relocation' },
    { label: 'Carrear Growth', value: 'growth' },
    { label: 'Family Issue', value: 'familyissue' },
    { label: 'Health Issue', value: 'healthissue' },
  ];
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
  const statusOptions = [
    { label: 'Pending', value: 'pending' },
    { label: 'Completed', value: 'Completed' },
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
  const searchEmpOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const employeeDetail = [
    {
      empCode: 1001,
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      department: 'Web Design',
      designation: 'Exective',
      location: 'Station',
      noticeGivenDate: '05 Oct 2022',
      lastWorkingDate: '25 Nov 2022',
      exitType: 'Resigned',
      exitReason: 'Relocation',
      fnfStatus: 'Pending',
      viewAction: true,
      downloadAction: true,
      detailAction: true,
    },
    {
      empCode: 1002,
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      department: 'Web Design',
      designation: 'Exective',
      location: 'Station',
      noticeGivenDate: '05 Oct 2022',
      lastWorkingDate: '25 Nov 2022',
      exitType: 'Resigned',
      exitReason: 'Relocation',
      fnfStatus: 'Pending',
      viewAction: true,
      downloadAction: true,
      detailAction: true,
    },
    {
      empCode: 1003,
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      department: 'Web Design',
      designation: 'Exective',
      location: 'Station',
      noticeGivenDate: '05 Oct 2022',
      lastWorkingDate: '25 Nov 2022',
      exitType: 'Resigned',
      exitReason: 'Relocation',
      fnfStatus: 'Pending',
      viewAction: true,
      downloadAction: true,
      detailAction: false,
    },
    {
      empCode: 1004,
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      department: 'Web Design',
      designation: 'Exective',
      location: 'Station',
      noticeGivenDate: '05 Oct 2022',
      lastWorkingDate: '25 Nov 2022',
      exitType: 'Resigned',
      exitReason: 'Relocation',
      fnfStatus: 'Completed',
      viewAction: true,
      downloadAction: true,
      detailAction: false,
    },
    {
      empCode: 1005,
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      department: 'Web Design',
      designation: 'Exective',
      location: 'Station',
      noticeGivenDate: '05 Oct 2022',
      lastWorkingDate: '25 Nov 2022',
      exitType: 'Resigned',
      exitReason: 'Relocation',
      fnfStatus: 'Completed',
      viewAction: true,
      downloadAction: true,
      detailAction: false,
    },
  ];
  const searchEmpHandleChange = option => {
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
            <b>Employees</b>
          </li>
          <li>
            <b>Masters</b>
          </li>
          <li>Full & Final</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row">
          <div className="col-md-912">
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
                  <ReactSelectSingle
                    value={status}
                    options={statusOptions}
                    filter
                    onChange={e => {
                      setStatus(e.value);
                    }}
                    placeholder="FNF Status"
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
      <div className="data_table_one employee_full_table">
        <div className="employee_full_top mb-4">
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
        <div className="employee_full_table_inner">
          <div className="table-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>
                    <span>Emp.Code</span>
                  </th>
                  <th>
                    <span>Emp.Name</span>
                  </th>
                  <th>
                    <span>Department</span>
                  </th>
                  <th>
                    <span>Designation</span>
                  </th>
                  <th>
                    <span>Location</span>
                  </th>
                  <th>
                    <span>Notice Given Date</span>
                  </th>
                  <th>
                    <span>Last Working Date</span>
                  </th>
                  <th>
                    <span>FNF Status</span>
                  </th>
                  <th>
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {employeeDetail.map((emp, index) => {
                  return (
                    <tr key={index}>
                      <td>{emp.empCode}</td>
                      <td>
                        <div className="name_wrap">
                          <img src={emp.empProfile} alt="Employeeimage" />
                          <span>{emp.empName}</span>
                        </div>
                      </td>
                      <td>{emp.department}</td>
                      <td>{emp.designation}</td>
                      <td>{emp.location}</td>
                      <td>{emp.noticeGivenDate}</td>
                      <td>{emp.lastWorkingDate}</td>
                      <td>
                        {emp.fnfStatus === 'Completed' ? (
                          <span className="badge bedge_success">
                            {emp.fnfStatus}
                          </span>
                        ) : emp.fnfStatus === 'Cancel' ? (
                          <span className="badge bedge_danger">
                            {emp.fnfStatus}
                          </span>
                        ) : (
                          <span className="badge bedge_warning">
                            {emp.fnfStatus}
                          </span>
                        )}
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          {emp.detailAction === true && (
                            <li>
                              <Button
                                tooltip="Process F & F"
                                tooltipOptions={{
                                  position: 'bottom',
                                }}
                                className="tooltip_button"
                                onClick={() =>
                                  navigate(
                                    '/employees/master/full-and-final-step-one',
                                  )
                                }
                              >
                                <img src={HandTrue} alt="Detail" />
                              </Button>
                            </li>
                          )}
                          {emp.downloadAction === true && (
                            <li>
                              <Button
                                tooltip="Download"
                                tooltipOptions={{
                                  position: 'bottom',
                                }}
                                className="tooltip_button"
                              >
                                <img src={DowanloadButtonIcon} alt="Download" />
                              </Button>
                            </li>
                          )}
                          {emp.viewAction === true && (
                            <li>
                              <Button
                                tooltip="View"
                                tooltipOptions={{
                                  position: 'bottom',
                                }}
                                className="tooltip_button"
                              >
                                <img src={Eyes} alt="View" />
                              </Button>
                            </li>
                          )}
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

      {/* popup */}

      <Dialog
        header="Add Exit Employee"
        visible={addExitEmp}
        draggable={false}
        resizable={false}
        className="medium_popup"
        footer={renderFooter('addExitEmp')}
        onHide={() => onHide('addExitEmp')}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form_group">
              <label>Employees</label>
              <ReactSelectMultiple
                value={searchEmp}
                options={searchEmpOption}
                onChange={e => setSearchEmp(e.value)}
                optionLabel="name"
                placeholder="Search Employees"
                filter
                className="multiselect-custom"
                itemTemplate={searchEmpHandleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Location</label>
              <Input type="text" placeholder="Placeholder Text" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Department</label>
              <Input type="text" placeholder="Placeholder Text" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Designation</label>
              <Input type="text" placeholder="Placeholder Text" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form_group">
              <label className="mb-3">Exit reason</label>
              <div className="radio_button_wrapper d-flex">
                <div className="radio_button d-flex">
                  <ReactRadioButton
                    inputId="editcode"
                    name="editcode"
                    value="Yes"
                    onChange={e => setIsAddExitEmp(e.value)}
                    checked={isAddExitEmp === 'Yes'}
                  />
                  <label className="m-0" htmlFor="internationalEmp">
                    Employee Wants to Resign
                  </label>
                </div>
                <div className="radio_button d-flex">
                  <ReactRadioButton
                    inputId="editcode1"
                    name="editcode1"
                    value="No"
                    onChange={e => setIsAddExitEmp(e.value)}
                    checked={isAddExitEmp === 'No'}
                  />
                  <label className="m-0" htmlFor="internationalEmp1">
                    Company Wants to Terminate
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Reason For Exit</label>
              <ReactSelectSingle
                value={selectReason}
                options={selectReasonOption}
                filter
                onChange={e => {
                  setSelectReason(e.value);
                }}
                placeholder="Department"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Exit Notice Date</label>
              <ReactCelender value="date" placeholder="Select Date" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Last Working Date</label>
              <ReactCelender value="date" placeholder="Select Date" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label className="mb-3">Allowed to rehire?</label>
              <div className="radio_button_wrapper d-flex">
                <div className="radio_button d-flex">
                  <ReactRadioButton
                    inputId="rehire"
                    name="rehire"
                    value="Yes"
                    onChange={e => setRehire(e.value)}
                    checked={rehire === 'Yes'}
                  />
                  <label className="m-0" htmlFor="internationalEmp">
                    Yes
                  </label>
                </div>
                <div className="radio_button d-flex">
                  <ReactRadioButton
                    inputId="rehire1"
                    name="rehire1"
                    value="No"
                    onChange={e => setRehire(e.value)}
                    checked={rehire === 'No'}
                  />
                  <label className="m-0" htmlFor="internationalEmp1">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form_group">
              <label>Remark</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
