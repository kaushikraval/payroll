import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserImage from '../../Assets/images/user8.png';
import HomeIcon from '../../Assets/images/home-blue.svg';
import EmployeeImg from '../../Assets/images/user3.png';
import FilterIcon from '../../Assets/images/filter.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
export default function LeaveBalanceCorrection() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);

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
  const leaveBalanceCorrectionData = [
    {
      empCode: 1001,
      empName: 'Chintan Raval',
      department: 'Admin',
      designation: 'Administration',
      earnedLeave: 12,
      sickLeave: '07',
      casualLeave: '07',
      maternityLeave: '-',
      paternityLeave: 15,
      sortLeave: '04',
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
  const navigate = useNavigate();
  const handleTrClick = () => {
    navigate('/leave/leave-balance-correction/leave-balance-detail');
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
            <b>Leave</b>
          </li>
          <li>Leave Balance Correction</li>
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
        <div className="col-12">
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
                    <span>Department</span>
                  </th>
                  <th scope="col">
                    <span>Designation</span>
                  </th>
                  <th scope="col">
                    <span>Earned Leave</span>
                  </th>
                  <th scope="col">
                    <span>Sick Leave</span>
                  </th>
                  <th scope="col">
                    <span>Casual Leave</span>
                  </th>
                  <th scope="col">
                    <span>Maternity Leave</span>
                  </th>
                  <th scope="col">
                    <span>Paternity Leave</span>
                  </th>
                  <th scope="col">
                    <span>Sort Leave</span>
                  </th>
                  <th scope="col">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaveBalanceCorrectionData.map((data, i) => {
                  return (
                    <tr
                      onClick={() => {
                        handleTrClick();
                      }}
                      key={i}
                    >
                      <td>
                        <span className="ms-2">{data.empCode}</span>
                      </td>
                      <td>
                        <div className="name_wrap">
                          <img src={EmployeeImg} alt="UserImage" />
                          <span>{data.empName}</span>
                        </div>
                      </td>
                      <td>{data.department}</td>
                      <td>{data.designation}</td>
                      <td>{data.earnedLeave}</td>
                      <td>{data.sickLeave}</td>
                      <td>{data.casualLeave}</td>
                      <td>{data.maternityLeave}</td>
                      <td>{data.paternityLeave}</td>
                      <td>{data.sortLeave}</td>
                      <td>
                        <i className="pi pi-refresh"></i>
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
    </>
  );
}
