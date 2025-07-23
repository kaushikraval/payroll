import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import TextArea from '../Common/TextArea';
import { TabView, TabPanel } from 'primereact/tabview';
import UserImage from '../../Assets/images/user8.png';
import EmployeeImg from '../../Assets/images/user3.png';
import DownloadIcon from '../../Assets/images/downloadicon-blue.svg';
import Export from '../../Assets/images/upload-icon-blue.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import View from '../../Assets/images/eyes.svg';
import Edit from '../../Assets/images/edit.svg';
import CheckCircle from '../../Assets/images/close-circle.svg';
import cancelIcon from '../../Assets/images/close-circle-two.png';
import Deleat from '../../Assets/images/DeleteBtn.svg';
import PlusIcon from '../../Assets/images/plus.svg';
import ReactCheckbox from '../Common/ReactCheckbox';

export default function EarningAndDeduction() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [type, setType] = useState([]);
  const [leavename, setLeaveName] = useState([]);
  const [location, setLocation] = useState([]);
  const [checked, setChecked] = useState();
  const [ComponentType, setComponentType] = useState([]);
  const [tomonth, setToMonth] = useState([]);
  const [frommonth, setFromMonth] = useState([]);

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
  const typeOptions = [
    { label: 'Earning', value: 'Earning' },
    { label: 'Deduction', value: 'Deduction' },
  ];
  const locationOptions = [
    { label: 'Cityplus, Surat', value: 'CityplusSurat' },
    { label: 'Varachha, Surat', value: 'VarachhaSurat' },
    { label: 'Station, Surat', value: 'StationSurat' },
    { label: 'Adajan, Surat', value: 'AdajanSurat' },
    { label: 'Vesu, Surat', value: 'VesuSurat' },
    { label: 'Navsari', value: 'Navsari' },
  ];
  const ComponentTypeOption = [
    { label: 'Incentive', value: 'Incentive' },
    { label: 'Performance Bonus', value: 'Performance Bonus' },
    { label: 'Penalty', value: 'Penalty' },
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
  const listOfUser = [
    {
      empCode: '1001',
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      location: 'Station',
      department: 'Web Design',
      designation: 'Executive',
    },
  ];
  const history = [
    {
      empCode: '1001',
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      type: 'Earning',
      componentType: 'Incentive',
      lMonthYear: 'Jun - 2022',
      amount: 1000,
      reason: 'Good Skills',
      location: 'Station',
      department: 'Web Design',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 8 Sep 2022 • 06:04 PM',
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

  const [deletedetail, setDeleteDetail] = useState(false);
  const dialogFuncMap = {
    deletedetail: setDeleteDetail,
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
          <li>Earning & Deduction</li>
        </ul>
      </div>
      <div className="earnign_deduction_tab">
        <TabView>
          <TabPanel header="List Of Employee">
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
              <div className="col-md-4 order-2 order-md-1">
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
              <div className="col-md-8 order-1 order-md-2">
                <div className="text-end d-flex align-items-center justify-content-md-end mt-lg-0 flex-wrap">
                  <button type="button" className="btn-border me-2 mb-2">
                    <img className="me-2" src={Export} /> Bulk Upload
                  </button>
                  <Link
                    to="/payroll/earning-deduction/add-earning-deduction"
                    className="btn-primary mb-2"
                  >
                    <img src={PlusIcon} alt="PlusIcon" className="me-1" /> Add
                    Earning & Deduction
                  </Link>
                </div>
              </div>
            </div>
            <div className="data_table_one earning_deduction">
              <div className="table-responsive">
                <table id="example" className="display">
                  <thead>
                    <tr>
                      <th scope="col">
                        <ReactCheckbox
                          onChange={e => setChecked(e.checked)}
                          checked={checked}
                        />
                      </th>
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
                        <span>Location</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listOfUser?.map(data => {
                      return (
                        <tr>
                          <td>
                            <ReactCheckbox
                              onChange={e => setChecked(e.checked)}
                              checked={checked}
                            />
                          </td>
                          <td>{data.empCode}</td>
                          <td>
                            <div class="name_wrap">
                              <img src={data.empProfile} alt="UserImage" />
                              <span>{data.empName}</span>
                            </div>
                          </td>

                          <td>{data.department}</td>
                          <td>{data.designation}</td>
                          <td>{data.location}</td>
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
          <TabPanel header="History">
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
                          value={type}
                          options={typeOptions}
                          filter
                          onChange={e => {
                            setType(e.value);
                          }}
                          placeholder="Type"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="form_group">
                        <ReactSelectSingle
                          value={ComponentType}
                          options={ComponentTypeOption}
                          filter
                          onChange={e => {
                            setComponentType(e.value);
                          }}
                          placeholder="Select Component Type"
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
                <div className="text-end d-flex align-items-center justify-content-sm-end mt-lg-0 flex-wrap">
                  <button type="button" className="btn-border">
                    <img className="me-2" src={Export} /> Export Excel
                  </button>
                </div>
              </div>
            </div>
            <div className="data_table_one earning_deduction">
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
                        <span>Type</span>
                      </th>
                      <th scope="col">
                        <span>Component Type</span>
                      </th>
                      <th scope="col">
                        <span>LMonth/Year</span>
                      </th>
                      <th scope="col">
                        <span>Amount</span>
                      </th>
                      <th scope="col">
                        <span>Reason</span>
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
                    {history.map(data => {
                      return (
                        <tr>
                          <td>{data.empCode}</td>
                          <td>
                            <div class="name_wrap">
                              <img src={data.empProfile} alt="UserImage" />
                              <span>{data.empName}</span>
                            </div>
                          </td>

                          <td>{data.type}</td>
                          <td>{data.componentType}</td>
                          <td>{data.lMonthYear}</td>
                          <td>{data.amount}</td>
                          <td>{data.reason}</td>
                          <td>
                            {data.actionByName}
                            <span className="d-block wrap_text">
                              {data.actionByDate}
                            </span>
                          </td>

                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <Link to="/payroll/earning-deduction/edit-history">
                                  <img src={Edit} alt="Edit" />
                                </Link>
                              </li>
                              <li
                                onClick={() => {
                                  setDeleteDetail(true);
                                }}
                              >
                                <img src={Deleat} alt="Deleat" />
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
        </TabView>
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
    </>
  );
}
