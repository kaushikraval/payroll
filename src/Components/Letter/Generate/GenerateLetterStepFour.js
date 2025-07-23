import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import EmployeeImg from '../../../Assets/images/user3.png';
import DowanloadButtonIcon from '../../../Assets/images/download.svg';
import CheckBtn from '../../../Assets/images/chack-btn.svg';
import EmailBtn from '../../../Assets/images/email-btn.svg';

export default function GenerateLetterStepFive() {
  const [multipleApplyForEmail, setMultipleApplyForEmail] = useState(false);

  const generateDetail = [
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1001',
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      department: 'Web Designing',
      designation: 'Web',
      location: 'Station',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      selected: false,
    },
    {
      letterTemplate: 'Appointment letter',
      empCode: '1002',
      empProfile: EmployeeImg,
      empName: 'Meet Kakadiya',
      department: 'UI & UX Designer',
      designation: 'UI & UX',
      location: 'Station',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      selected: false,
    },
    {
      letterTemplate: 'Joining Letter',
      empCode: '1003',
      empProfile: EmployeeImg,
      empName: 'Raj Pokiya',
      department: 'Graphic Designer',
      designation: 'Graphic',
      location: 'Station',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      selected: false,
    },
    {
      letterTemplate: 'Experience Letter',
      empCode: '1004',
      empProfile: EmployeeImg,
      empName: 'kishan Dudhat',
      department: 'Web Designing',
      designation: 'Web',
      location: 'Station',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      selected: false,
    },
    {
      letterTemplate: 'Confirmation Letter',
      empCode: '1005',
      empProfile: EmployeeImg,
      empName: 'Krunal Vadhela',
      department: 'UI & UX Designer',
      designation: 'UI & UX',
      location: 'Station',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      selected: false,
    },
    {
      letterTemplate: 'Relieving Letter',
      empCode: '1006',
      empProfile: EmployeeImg,
      empName: 'Arti Patil',
      department: 'Web Designing',
      designation: 'Web',
      location: 'Station',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      selected: false,
    },
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1007',
      empProfile: EmployeeImg,
      empName: 'Kenil Patel',
      department: 'Web Designing',
      designation: 'Web',
      location: 'Station',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      selected: false,
    },
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1008',
      empProfile: EmployeeImg,
      empName: 'Parth Patel',
      department: 'UI & UX Designer',
      designation: 'Excutive',
      location: 'Station',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      selected: false,
    },
    {
      letterTemplate: 'Address Proof Letter',
      empCode: '1009',
      empProfile: EmployeeImg,
      empName: 'Hiren Navdiya',
      department: 'Web Designing',
      designation: 'UI & UX',
      location: 'Station',
      emailIcon: EmailBtn,
      downloadIcon: DowanloadButtonIcon,
      checkIcon: CheckBtn,
      selected: false,
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
    setMultipleApplyForEmail(e.target.checked === true ? true : false);
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
    let dummyList = tempListData.filter(item => {
      return item.selected;
    });
    setEmployeeDetailList({
      List: tempListData,
      SelectedList: dummyList,
    });
    setMultipleApplyForEmail(dummyList.length > 1 ? true : false);
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
      <div className="letter_stepfour_wrap">
        <div className="step_wrapper bg_white_box">
          <ul>
            <li className="completed">
              <div className="icon"></div>
              <span>General</span>
            </li>
            <li className="completed">
              <div className="icon"></div>
              <span>Select Employee</span>
            </li>
            <li className="completed">
              <div className="icon"></div>
              <span>Preview Letter</span>
            </li>
            <li className="current">
              <div className="icon"></div>
              <span>Summary</span>
            </li>
          </ul>
        </div>
        <div className="letter_stepfour_inner">
          <div className="letter_stepfour_top mb-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <h6>Step 4 : Summary</h6>
              </div>
              <div className="col-12 col-md-6">
                <div className="btn_group d-flex justify-content-end flex-wrap">
                  <Button
                    to="/letter/generate"
                    className="btn-secondary"
                    disabled={multipleApplyForEmail === false}
                  >
                    Email
                  </Button>
                  <Link
                    to=""
                    className="btn-border mx-3"
                    disabled={multipleApplyForEmail === false}
                  >
                    Publish
                  </Link>
                  <Link
                    to="/letter/generate/step-four"
                    className="btn-secondary"
                    disabled={multipleApplyForEmail === false}
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="data_table_one letter_stepfour_table">
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
                    <th>
                      <span>Action</span>
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
                                  className=""
                                  alt="EmailBtn"
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
                                  className=""
                                  alt="DowanloadImage"
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
                                  className=""
                                  alt="CheckImage"
                                />
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
          <div className="btn_group d-flex justify-content-end mt-4">
            <Link to="/letter/generate" className="btn-secondary">
              Cancel
            </Link>
            <Link
              to="/letter/generate/step-three"
              className="btn-secondary mx-3"
            >
              Previous
            </Link>
            <Link to="/letter/generate" className="btn-primary">
              Finish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
