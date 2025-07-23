import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import UserImage from '../../Assets/images/user8.png';
import HomeIcon from '../../Assets/images/home-blue.svg';
import EmployeeImg from '../../Assets/images/user3.png';
import FilterIcon from '../../Assets/images/filter.svg';
import LeftArrow from '../../Assets/images/chevron-left.svg';
import RightArrow from '../../Assets/images/chevron-right.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import { SplitButton } from 'primereact/splitbutton';
export default function OnLeaveToday() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [location, setLocation] = useState([]);

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
  const items = [
    {
      label: 'Import',
      icon: 'pi pi-download',
    },
    {
      label: 'Download as PDF',
      icon: 'pi pi-file-pdf',
    },
    {
      label: 'Export',
      icon: 'pi pi-file-export',
    },
  ];
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
              <b>Leave</b>
            </li>
            <li>
              <Link to="/leave/dashboard">
                <b>Dashboard</b>
              </Link>
            </li>
            <li>On Leave Todat</li>
          </ul>
        </div>
        <div className="top_filter_wrap">
          <div className="row">
            <div className="col-xxl-9 col-xl-12">
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
                    <img src={FilterIcon} className="me-2" alt="FilterImage" />
                    Filter
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-xxl-3">
              <div className="d-flex align-items-center justify-content-end">
                <SplitButton
                  className="p-button-primary icon_dropdown"
                  model={items}
                />
              </div>
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
            <div className="top_date_wrap">
              <h6>
                <button type="button">
                  <img src={LeftArrow} alt="LeftArrow" />
                </button>
                26 July 2022
                <button type="button">
                  <img src={RightArrow} alt="RightArrow" />
                </button>
              </h6>
            </div>
          </div>
        </div>
        <div className="on_leave_today">
          <div className="data_table_one">
            <div className="table-responsive">
              <table id="example" className="display">
                <thead>
                  <tr>
                    <th scope="col">
                      <span>No</span>
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
                    <th scope="col">
                      <span>Leave Name</span>
                    </th>
                    <th scope="col">
                      <span>Leave Date</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1001</td>
                    <td>
                      <div className="name_wrap">
                        <img src={EmployeeImg} alt="UserImage" />
                        <span>Chintan Raval</span>
                      </div>
                    </td>
                    <td>Admin</td>
                    <td>Adminstation</td>
                    <td>Mota Varachha</td>
                    <td>Manager OT</td>
                    <td>04 Nov 2022</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1001</td>
                    <td>
                      <div className="name_wrap">
                        <img src={EmployeeImg} alt="UserImage" />
                        <span>Chintan Raval</span>
                      </div>
                    </td>
                    <td>Admin</td>
                    <td>Adminstation</td>
                    <td>Mota Varachha</td>
                    <td>Manager OT</td>
                    <td>04 Nov 2022</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1001</td>
                    <td>
                      <div className="name_wrap">
                        <img src={EmployeeImg} alt="UserImage" />
                        <span>Chintan Raval</span>
                      </div>
                    </td>
                    <td>Admin</td>
                    <td>Adminstation</td>
                    <td>Mota Varachha</td>
                    <td>Manager OT</td>
                    <td>04 Nov 2022</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1001</td>
                    <td>
                      <div className="name_wrap">
                        <img src={EmployeeImg} alt="UserImage" />
                        <span>Chintan Raval</span>
                      </div>
                    </td>
                    <td>Admin</td>
                    <td>Adminstation</td>
                    <td>Mota Varachha</td>
                    <td>Manager OT</td>
                    <td>04 Nov 2022</td>
                  </tr>
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
    </>
  );
}
