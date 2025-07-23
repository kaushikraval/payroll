import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'primereact/checkbox';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import UserImage from '../../../Assets/images/user8.png';
import FilterIcon from '../../../Assets/images/filter.svg';
import EmployeeImg from '../../../Assets/images/user3.png';

export default function GenerateLetterStepTwo() {
  const [employeeSelect, setEmployeeSelect] = useState([]);
  const [departmentSelect, setDepartmentSelect] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);

  const employeesSelectOption = [
    { label: 'Vivek Pandey', value: 'VivekPandey' },
    { label: 'Dhaval Radadiya', value: 'DhavalRadadiya' },
    { label: 'Rahul Shah', value: 'RahulShah' },
    { label: 'Punam Rathod', value: 'PunamRathod' },
  ];
  const departmentSelectOption = [
    { label: 'Web designing', value: 'Web' },
    { label: 'UI/UX Design', value: 'UI/UX' },
    { label: 'Web development', value: 'Webdevelopment' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'HR', value: 'HR' },
    { label: 'Sales Department', value: 'Sales' },
  ];
  const designationOptions = [
    { label: 'H.R Manager.', value: 'HRManager' },
    { label: 'PHP Developer', value: 'PHPDeveloper' },
    { label: 'Android Developer', value: 'AndroidDeveloper' },
    { label: 'Project Manager', value: 'ProjectManager' },
    { label: 'General Manager', value: 'GeneralManager' },
    { label: 'Content Writter', value: 'ContentWritter' },
  ];
  const employmentTypeOptions = [
    { label: 'Confirmed', value: 'Confirmed' },
    { label: 'Probation', value: 'Probation' },
  ];
  const generateDetail = [
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1001',
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      department: 'Web Designing',
      designation: 'Web',
      location: 'Station',
    },
    {
      letterTemplate: 'Appointment letter',
      empCode: '1002',
      empProfile: EmployeeImg,
      empName: 'Meet Kakadiya',
      department: 'UI & UX Designer',
      designation: 'UI & UX',
      location: 'Station',
    },
    {
      letterTemplate: 'Joining Letter',
      empCode: '1003',
      empProfile: EmployeeImg,
      empName: 'Raj Pokiya',
      department: 'Graphic Designer',
      designation: 'Graphic',
      location: 'Station',
    },
    {
      letterTemplate: 'Experience Letter',
      empCode: '1004',
      empProfile: EmployeeImg,
      empName: 'kishan Dudhat',
      department: 'Web Designing',
      designation: 'Web',
      location: 'Station',
    },
    {
      letterTemplate: 'Confirmation Letter',
      empCode: '1005',
      empProfile: EmployeeImg,
      empName: 'Krunal Vadhela',
      department: 'UI & UX Designer',
      designation: 'UI & UX',
      location: 'Station',
    },
    {
      letterTemplate: 'Relieving Letter',
      empCode: '1006',
      empProfile: EmployeeImg,
      empName: 'Arti Patil',
      department: 'Web Designing',
      designation: 'Web',
      location: 'Station',
    },
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1007',
      empProfile: EmployeeImg,
      empName: 'Kenil Patel',
      department: 'Web Designing',
      designation: 'Web',
      location: 'Station',
    },
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1008',
      empProfile: EmployeeImg,
      empName: 'Parth Patel',
      department: 'UI & UX Designer',
      designation: 'Excutive',
      location: 'Station',
    },
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1009',
      empProfile: EmployeeImg,
      empName: 'Hiren Navdiya',
      department: 'Web Designing',
      designation: 'UI & UX',
      location: 'Station',
    },
  ];
  const [employeeDetailList, setEmployeeDetailList] = useState({
    List: generateDetail,
    MasterChecked: false,
    SelectedList: [],
  });
  const onMasterCheck = e => {
    let tempListData = employeeDetailList.List;
    tempListData = tempListData.map(user => {
      return {
        ...user,
        selected: e.target.checked,
      };
    });
    setEmployeeDetailList({
      List: tempListData,
      MasterChecked: e.target.checked,
      SelectedList: tempListData.filter(item => {
        return item.selected;
      }),
    });
  };

  const onItemCheck = (e, item) => {
    let tempListData = employeeDetailList.List;
    tempListData = tempListData.map(user => {
      if (user.empCode === item.empCode) {
        return {
          ...user,
          selected: e.target.checked,
        };
      }
      return user;
    });
    setEmployeeDetailList({
      List: tempListData,
      SelectedList: tempListData.filter(item => {
        return item.selected;
      }),
    });
  };
  const employeesSelectHandleChange = option => {
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
            <b>Letter</b>
          </li>
          <li>
            <Link to="/letter/generate">
              <b>Generate</b>
            </Link>
          </li>
          <li>Generate Letter</li>
        </ul>
      </div>
      <div className="letter_steptwo_wrap">
        <div className="step_wrapper bg_white_box">
          <ul>
            <li className="completed">
              <div className="icon"></div>
              <span>General</span>
            </li>
            <li className="current">
              <div className="icon"></div>
              <span>Select Employee</span>
            </li>
            <li>
              <div className="icon"></div>
              <span>Preview Letter</span>
            </li>
            <li>
              <div className="icon"></div>
              <span>Summary</span>
            </li>
          </ul>
        </div>
        <div className="letter_steptwo_inner">
          <h6 className="mb-3">Step 2 : Select Employee</h6>
          <div className="steptwo_Select_employee_wrap">
            <div className="row">
              <div className="col-md-8">
                <ul className="filter_wrapper">
                  <li>
                    <div className="form_group">
                      <ReactSelectMultiple
                        value={employeeSelect}
                        options={employeesSelectOption}
                        onChange={e => setEmployeeSelect(e.value)}
                        optionLabel="name"
                        placeholder="Employees"
                        filter
                        className="multiselect-custom"
                        itemTemplate={employeesSelectHandleChange}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="form_group">
                      <ReactSelectMultiple
                        value={departmentSelect}
                        options={departmentSelectOption}
                        placeholder="Department"
                        filter
                        onChange={e => setDepartmentSelect(e.value)}
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
                        value={employmentType}
                        options={employmentTypeOptions}
                        onChange={e => {
                          setEmploymentType(e.value);
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
          <div className="steptwo_table_wrap">
            <div className="show_entries mb-3">
              Show
              <select className="form-select">
                <option value="1">10</option>
                <option value="2">25</option>
                <option value="3">50</option>
                <option value="4">100</option>
              </select>
              entiries
            </div>
            <div className="data_table_one letter_steptwo_table">
              <div className="table-responsive">
                <table id="example" className="display">
                  <thead>
                    <tr>
                      <th>
                        <Checkbox
                          inputId="checkth"
                          className="me-2"
                          onChange={e => {
                            onMasterCheck(e);
                          }}
                          checked={employeeDetailList.MasterChecked}
                        />
                      </th>
                      <th>
                        <span>Emp. Code</span>
                      </th>
                      <th>
                        <span>Emp. Name</span>
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
                    </tr>
                  </thead>
                  <tbody>
                    {employeeDetailList.List.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <Checkbox
                              inutId={`rowcheck_${user.empCode}`}
                              className="me-2"
                              checked={user.selected}
                              onChange={e => {
                                onItemCheck(e, user);
                              }}
                            />
                          </td>
                          <td>{user.empCode}</td>
                          <td>
                            <div className="name_wrap">
                              <img src={user.empProfile} alt="Employeeimage" />
                              <span>{user.empName}</span>
                            </div>
                          </td>
                          <td>{user.department}</td>
                          <td>{user.designation}</td>
                          <td>{user.location}</td>
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
          <div className="btn_group d-flex justify-content-end mt-4">
            <Link to="/letter/generate" className="btn-secondary">
              Cancel
            </Link>
            <Link to="/letter/generate/step-one" className="btn-secondary mx-3">
              Previous
            </Link>
            <Link to="/letter/generate/step-three" className="btn-primary">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
