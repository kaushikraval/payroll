import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import ReactCelender from '../../Common/ReactCelender';
import TextArea from '../../Common/TextArea';
import UserImage from '../../../Assets/images/user8.png';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import EmployeeImg from '../../../Assets/images/user3.png';
import FilterIcon from '../../../Assets/images/filter.svg';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import ReactSelectWithImage from '../../Common/ReactSelectWithImage';
import LeftArrow from '../../../Assets/images/chevron-left.svg';
import RightArrow from '../../../Assets/images/chevron-right.svg';
import PlusIcon from '../../../Assets/images/plus.svg';
export default function AttendanceManagement() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [location, setLocation] = useState([]);
  const [addExitEmp, setAddExitEmp] = useState(false);
  const [editExitEmp, setEditExitEmp] = useState(false);
  const [viewExitEmp, setViewExitEmp] = useState(false);
  const [cancelExitRequest, setCancelExitRequest] = useState(false);
  const [addAttendance, setaddAttendance] = useState(false);
  const navigate = useNavigate();
  const dialogFuncMap = {
    addExitEmp: setAddExitEmp,
    editExitEmp: setEditExitEmp,
    viewExitEmp: setViewExitEmp,
    cancelExitRequest: setCancelExitRequest,
    // viewexitemp: setviewexitemp,
  };
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
  const handleTrClick = () => {
    navigate('/time-and-attendance/attendance-view');
  };

  const [postSelect, setPostSelect] = useState([0]);
  const postOptions = [
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
    { name: 'Chintan Raval', code: '', src: EmployeeImg },
  ];
  const attendanceManagementData = [
    {
      empCode: 1001,
      empName: 'Chintan Raval',
      shift: 'General',
      shiftHours: '09 H : 00 M',
      breakHours: '00 H : 30 M',
      checkIn: '9:06 AM',
      checkOut: '6:25 PM',
      actualWorkHours: '08 H : 49 M',
      status: 'Present',
      overtime: '00 H : 00 M',
    },
    {
      empCode: 1002,
      empName: 'Chintan Raval',
      shift: 'General',
      shiftHours: '09 H : 00 M',
      breakHours: '00 H : 30 M',
      checkIn: '9:06 AM',
      checkOut: '6:25 PM',
      actualWorkHours: '08 H : 49 M',
      status: 'Present',
      overtime: '00 H : 00 M',
    },
    {
      empCode: 1003,
      empName: 'Chintan Raval',
      shift: 'Morning',
      shiftHours: '09 H : 00 M',
      breakHours: '00 H : 30 M',
      checkIn: '9:06 AM',
      checkOut: '6:25 PM',
      actualWorkHours: '08 H : 49 M',
      status: 'Present',
      overtime: '00 H : 00 M',
    },
    {
      empCode: 1004,
      empName: 'Chintan Raval',
      shift: 'Morning',
      shiftHours: '09 H : 00 M',
      breakHours: '00 H : 30 M',
      checkIn: '9:06 AM',
      checkOut: '6:25 PM',
      actualWorkHours: '08 H : 49 M',
      status: 'Absent',
      overtime: '00 H : 00 M',
    },
    {
      empCode: 1005,
      empName: 'Chintan Raval',
      shift: 'General',
      shiftHours: '09 H : 00 M',
      breakHours: '00 H : 30 M',
      checkIn: '9:06 AM',
      checkOut: '6:25 PM',
      actualWorkHours: '08 H : 49 M',
      status: 'Holiday',
      overtime: '00 H : 00 M',
    },
    {
      empCode: 1006,
      empName: 'Chintan Raval',
      shift: 'General',
      shiftHours: '09 H : 00 M',
      breakHours: '00 H : 30 M',
      checkIn: '9:06 AM',
      checkOut: '6:25 PM',
      actualWorkHours: '08 H : 49 M',
      status: 'Weekly Off',
      overtime: '00 H : 00 M',
    },
    {
      empCode: 1007,
      empName: 'Chintan Raval',
      shift: 'Night',
      shiftHours: '09 H : 00 M',
      breakHours: '00 H : 30 M',
      checkIn: '9:06 AM',
      checkOut: '6:25 PM',
      actualWorkHours: '08 H : 49 M',
      status: 'Absent',
      overtime: '00 H : 00 M',
    },
    {
      empCode: 1008,
      empName: 'Chintan Raval',
      shift: 'General',
      shiftHours: '09 H : 00 M',
      breakHours: '00 H : 30 M',
      checkIn: '9:06 AM',
      checkOut: '6:25 PM',
      actualWorkHours: '08 H : 49 M',
      status: 'Absent',
      overtime: '00 H : 00 M',
    },
  ];
  const postOptionsTemplate = option => {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src={option.src}
          onError={e =>
            (e.target.src =
              'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  };
  const selectedPostWrap = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src={option.src}
            onError={e =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
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
            <b>Time & Attendance</b>
          </li>
          <li>
            <b>Attendance Management</b>
          </li>
          <li>Attendence</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row">
          <div className="col-xxl-8 col-xl-12">
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
          <div className="col-xxl-4 col-xl-12">
            <div className="d-flex align-items-center justify-content-end">
              <button
                className="btn-primary"
                onClick={() => setaddAttendance(true)}
              >
                <img src={PlusIcon} className="me-2" alt="Plus Icon" />
                Add Attendance
              </button>
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
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-md-3 order-2 order-md-1">
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
        <div className="col-md-9 order-1 order-md-2">
          <div className="attendance_satus_wrap pt-0 my-3">
            <ul>
              <li className="status status_green">Present</li>
              <li className="status status_red">Absent</li>
              <li className="status status_orange">Weekly Off</li>
              <li className="status status_bluePantone">Holiday</li>
              <li className="status status_pink">Paid Leave</li>
              <li className="status status_cyan">Unpaid Leave</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="attendance_table">
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
                    <span>Shift</span>
                  </th>
                  <th scope="col">
                    <span>Shift Hours</span>
                  </th>
                  <th scope="col">
                    <span>Break Hours</span>
                  </th>
                  <th scope="col">
                    <span>Check In</span>
                  </th>
                  <th scope="col">
                    <span>Check Out</span>
                  </th>
                  <th scope="col">
                    <span>Actual Work Hours</span>
                  </th>
                  <th scope="col">
                    <span>Status</span>
                  </th>
                  <th scope="col">
                    <span>Overtime</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {attendanceManagementData.map((data, i) => {
                  return (
                    <tr
                      onClick={() => {
                        handleTrClick();
                      }}
                      key={i}
                    >
                      <td>{data.empCode}</td>
                      <td>
                        <div className="name_wrap">
                          <img src={EmployeeImg} alt="UserImage" />
                          <span>{data.empName}</span>
                        </div>
                      </td>
                      <td>{data.shift}</td>
                      <td>{data.shiftHours}</td>
                      <td>{data.breakHours}</td>
                      <td>{data.checkIn}</td>
                      <td>{data.checkOut}</td>
                      <td>{data.actualWorkHours}</td>
                      <td>
                        <ul>
                          {data.status === 'Present' && (
                            <li className="status status_green">
                              {data.status}
                            </li>
                          )}
                          {data.status === 'Absent' && (
                            <li className="status status_red">{data.status}</li>
                          )}
                          {data.status === 'Holiday' && (
                            <li className="status status_bluePantone">
                              {data.status}
                            </li>
                          )}
                          {data.status === 'Weekly Off' && (
                            <li className="status status_orange">
                              {data.status}
                            </li>
                          )}
                        </ul>
                      </td>
                      <td>{data.overtime}</td>
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
        className="small_popup"
        header="Attendance Request"
        visible={addAttendance}
        // style={{ width: '50vw' }}
        onHide={() => setaddAttendance(false)}
        footer={renderFooter('addAttendance')}
      >
        <div className="add_attendance_popup_wrap">
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label>Employee</label>

                <ReactSelectWithImage
                  value={postSelect}
                  isShowClear={false}
                  options={postOptions}
                  onChange={e => setPostSelect(e.value)}
                  optionLabel="name"
                  filterBy="name"
                  placeholder="Select Employee"
                  valueTemplate={selectedPostWrap}
                  itemTemplate={postOptionsTemplate}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label>Date</label>
                <ReactCelender value="date" placeholder="Select Date" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label>Check In</label>
                <ReactCelender value="date" placeholder="Select Date" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label>Check Out</label>
                <ReactCelender value="date" placeholder="Select Date" />
              </div>
            </div>
            <div className="col-12">
              <div className="form_group">
                <label>Reason</label>
                <TextArea placeholder="Add Reason" rows={5} cols={10} />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
