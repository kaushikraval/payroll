import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import UserImage from '../../../Assets/images/user8.png';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Plus from '../../../Assets/images/plus.svg';
import EmployeeImg from '../../../Assets/images/user3.png';
import FilterIcon from '../../../Assets/images/filter.svg';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import DowanloadButtonIcon from '../../../Assets/images/download.svg';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';
import CheckBtn from '../../../Assets/images/chack-btn.svg';
import EmailBtn from '../../../Assets/images/email-btn.svg';

export default function EmployeeExit() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [deleteDetail, setDeleteDetail] = useState(false);
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };

  const departmentOptions = [
    { label: 'Address Proof Letter', value: 'addressproofletter' },
    { label: 'Joining Letter', value: 'Joiningletter' },
    { label: 'Experience Letter', value: 'Experienceletter' },
    { label: 'Relieving Letter', value: 'Relievingletter' },
    { label: 'Confirmation Letter', value: 'Confirmationletter' },
    { label: 'Appointment letter', value: 'Appointmentletter' },
  ];
  const designationOptions = [
    { label: 'Published', value: 'HRManager' },
    { label: 'Not Published', value: 'Published' },
  ];
  const reportingAuthorityOption = [
    { label: 'Vivek Pandey', value: 'VivekPandey' },
    { label: 'Dhaval Radadiya', value: 'DhavalRadadiya' },
    { label: 'Rahul Shah', value: 'RahulShah' },
    { label: 'Punam Rathod', value: 'PunamRathod' },
  ];
  const generateDetail = [
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1001',
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      preparedByName: 'Chintan Raval',
      preparedByDate: '10 Dec 2022 • 08:59 AM',
      remark: 'xyz',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      deleteIcon: DeleteButtonIcon,
    },
    {
      letterTemplate: 'Appointment letter',
      empCode: '1002',
      empProfile: EmployeeImg,
      empName: 'Meet Kakadiya',
      preparedByName: 'Chintan Raval',
      preparedByDate: '10 Dec 2022 • 08:59 AM',
      remark: 'xyz',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      deleteIcon: DeleteButtonIcon,
    },
    {
      letterTemplate: 'Joining Letter',
      empCode: '1003',
      empProfile: EmployeeImg,
      empName: 'Raj Pokiya',
      preparedByName: 'Chintan Raval',
      preparedByDate: '10 Dec 2022 • 08:59 AM',
      remark: 'xyz',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      deleteIcon: DeleteButtonIcon,
    },
    {
      letterTemplate: 'Experience Letter',
      empCode: '1004',
      empProfile: EmployeeImg,
      empName: 'kishan Dudhat',
      preparedByName: 'Chintan Raval',
      preparedByDate: '10 Dec 2022 • 08:59 AM',
      remark: 'xyz',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      deleteIcon: DeleteButtonIcon,
    },
    {
      letterTemplate: 'Confirmation Letter',
      empCode: '1005',
      empProfile: EmployeeImg,
      empName: 'Krunal Vadhela',
      preparedByName: 'Chintan Raval',
      preparedByDate: '10 Dec 2022 • 08:59 AM',
      remark: 'xyz',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      deleteIcon: DeleteButtonIcon,
    },
    {
      letterTemplate: 'Relieving Letter',
      empCode: '1006',
      empProfile: EmployeeImg,
      empName: 'Arti Patil',
      preparedByName: 'Chintan Raval',
      preparedByDate: '10 Dec 2022 • 08:59 AM',
      remark: 'xyz',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      deleteIcon: DeleteButtonIcon,
    },
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1007',
      empProfile: EmployeeImg,
      empName: 'Kenil Patel',
      preparedByName: 'Chintan Raval',
      preparedByDate: '10 Dec 2022 • 08:59 AM',
      remark: 'xyz',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      deleteIcon: DeleteButtonIcon,
    },
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1008',
      empProfile: EmployeeImg,
      empName: 'Parth Patel',
      preparedByName: 'Chintan Raval',
      preparedByDate: '10 Dec 2022 • 08:59 AM',
      remark: 'xyz',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      deleteIcon: DeleteButtonIcon,
    },
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1009',
      empProfile: EmployeeImg,
      empName: 'Hiren Navdiya',
      preparedByName: 'Chintan Raval',
      preparedByDate: '10 Dec 2022 • 08:59 AM',
      remark: 'xyz',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      deleteIcon: DeleteButtonIcon,
    },
  ];
  const departmentHandleChange = e => {
    setDepartment(e.value);
  };
  const designationHandleChange = e => {
    setDesignation(e.value);
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
    <div className="inner_wrapper">
      <div className="generate_wrap">
        <div className="breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <img src={HomeIcon} alt="Home Icon" />
              </Link>
            </li>
            <li>
              <b>Letter </b>
            </li>
            <li>Generate</li>
          </ul>
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
                      value={department}
                      options={departmentOptions}
                      onChange={e => {
                        departmentHandleChange(e);
                      }}
                      placeholder="Letter Template"
                    />
                  </div>
                </li>
                <li>
                  <div className="form_group">
                    <ReactSelectMultiple
                      value={designation}
                      options={designationOptions}
                      onChange={e => {
                        designationHandleChange(e);
                      }}
                      placeholder="Publish Status"
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
        <div className="generate_top mb-4">
          <div className="row align-items-center">
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
                <Link to="/letter/generate/step-one" className="btn-border">
                  <img src={Plus} className="me-2" alt="FilterImage" />
                  Generate Letter
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="data_table_one generate_table">
          <div className="table-responsive">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>
                    <span>Letter Template</span>
                  </th>
                  <th>
                    <span>Emp. Code</span>
                  </th>
                  <th>
                    <span>Emp. Name</span>
                  </th>
                  <th>
                    <span>Prepared By</span>
                  </th>
                  <th>
                    <span>Remark</span>
                  </th>
                  <th>
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {generateDetail.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.letterTemplate}</td>
                      <td>{user.empCode}</td>
                      <td>
                        <div className="name_wrap">
                          <img src={user.empProfile} alt="Employeeimage" />
                          <span>{user.empName}</span>
                        </div>
                      </td>
                      <td>
                        <div className="created_date">
                          {user.preparedByName}
                          <span className="wrap_text">
                            {user.preparedByDate}
                          </span>
                        </div>
                      </td>
                      <td>{user.remark}</td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <Button
                              tooltip="Email Letter"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button"
                            >
                              <img
                                src={user.emailIcon}
                                data-inject-svg
                                alt="EmailIcon"
                              />
                            </Button>
                          </li>
                          <li>
                            <Button
                              tooltip="Download Letter"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button"
                            >
                              <img
                                src={user.downloadIcon}
                                data-inject-svg
                                alt="DowanloadIcon"
                              />
                            </Button>
                          </li>
                          <li>
                            <Button
                              tooltip="Publish To Portal"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button"
                            >
                              <img
                                src={user.checkIcon}
                                data-inject-svg
                                alt="CheckIcon"
                              />
                            </Button>
                          </li>
                          <li onClick={() => setDeleteDetail(true)}>
                            <Button
                              tooltip="Delete Letter"
                              tooltipOptions={{
                                position: 'bottom',
                              }}
                              className="tooltip_button"
                            >
                              <img src={user.deleteIcon} alt="DeleteIcon" />
                            </Button>
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
        visible={deleteDetail}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deleteDetail')}
        onHide={() => setDeleteDetail(false)}
      >
        <div className="delate_popup_wrap text-center">
          <p>Are you sure you want to delete?</p>
        </div>
      </Dialog>
    </div>
  );
}
