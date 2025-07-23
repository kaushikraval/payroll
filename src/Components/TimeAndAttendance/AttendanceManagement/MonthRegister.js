import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import ReactCelender from '../../Common/ReactCelender';
import UserImage from '../../../Assets/images/user8.png';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import FilterIcon from '../../../Assets/images/filter.svg';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import ReactSelectWithImage from '../../Common/ReactSelectWithImage';
import LeftArrow from '../../../Assets/images/chevron-left.svg';
import RightArrow from '../../../Assets/images/chevron-right.svg';
import PlusIcon from '../../../Assets/images/plus.svg';
import SortIconWhite from '../../../Assets/images/sort-arrow-white.svg';
import ReactCelenderRange from 'Components/Common/ReactCelenderRange';
import { SplitButton } from 'primereact/splitbutton';
import { Tooltip } from 'primereact/tooltip';
import Register from './../../Login/Register';

export default function MonthRegister() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);

  const [addAttendance, setaddAttendance] = useState(false);
  const navigate = useNavigate();
  // const [viewexitemp, setviewexitemp] = useState(false);
  const [rehire, setRehire] = useState(false);
  const [isAddExitEmp, setIsAddExitEmp] = useState('No');
  const [selectReason, setSelectReason] = useState([]);

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
          <li>Month Register</li>
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
                <button type="button" className="btn-primary">
                  <img src={FilterIcon} className="me-2" alt="FilterImage" />
                  Filter
                </button>
              </li>
            </ul>
          </div>
          <div className="col-xxl-3 col-xl-12">
            <div className="d-flex align-items-center justify-content-end">
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
              <SplitButton
                className="p-button-primary icon_dropdown"
                model={items}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-xxl-3 order-2 order-xxl-1">
          <div className="show_entries mb-0">
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
        <div className="col-xxl-9 order-2 order-xxl-1">
          <ul className="attebdance_type text-xxl-end">
            <li className="d-inline-flex align-items-center">
              <div className="first_text text-center me-2">
                P<div className="attebdance_bar type_present"></div>
              </div>
              Present
            </li>
            <li className="d-inline-flex align-items-center">
              <div className="first_text text-center me-2">
                P<div className="attebdance_bar type_present_first_half"></div>
              </div>
              First Half Present
            </li>
            <li className="d-inline-flex align-items-center">
              <div className="first_text text-center me-2">
                P<div className="attebdance_bar type_present_second_half"></div>
              </div>
              Second Half Present
            </li>
            <li className="d-inline-flex align-items-center">
              <div className="first_text text-center me-2">
                PL<div className="attebdance_bar type_present_paid_leave"></div>
              </div>
              Paid Leave
            </li>
            <li className="d-inline-flex align-items-center">
              <div className="first_text text-center me-2">
                PL
                <div className="attebdance_bar type_present_unpaid_leave"></div>
              </div>
              Unpaid Leave
            </li>
            <li className="d-inline-flex align-items-center">
              <div className="first_text text-center me-2">
                A<div className="attebdance_bar type_present_absent"></div>
              </div>
              Absent
            </li>
            <li className="d-inline-flex align-items-center">
              <div className="first_text text-center me-2">
                W<div className="attebdance_bar type_present_weeklyoff"></div>
              </div>
              Weekly Off
            </li>
            <li className="d-inline-flex align-items-center">
              <div className="first_text text-center me-2">
                H<div className="attebdance_bar type_present_holiday"></div>
              </div>
              Holiday
            </li>
          </ul>
        </div>
      </div>
      <div className="user_attendance_table">
        <div className="table-responsive">
          <table className="text-nowrap">
            <thead>
              <tr>
                <th>
                  <div className="th_title">
                    <span>
                      Business Units <img src={SortIconWhite} alt="Arrow" />
                    </span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Mon <br /> <span>01</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Tue <br /> <span>02</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Tue <br /> <span>03</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Wed <br /> <span>04</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Thu <br /> <span>05</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Fri <br /> <span>06</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Sat <br /> <span>07</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Sun <br /> <span>08</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Mon <br /> <span>09</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Tue <br /> <span>10</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Wed <br /> <span>11</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Thu <br /> <span>12</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Fri <br /> <span>13</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Sat <br /> <span>14</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Sun <br /> <span>15</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Mon <br /> <span>16</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Tue <br /> <span>17</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Wed <br /> <span>18</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Thu <br /> <span>19</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Fri <br /> <span>20</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Sat <br /> <span>21</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Sun <br /> <span>22</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Mon <br /> <span>23</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Tue <br /> <span>24</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Wed <br /> <span>25</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Thu <br /> <span>26</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Fri <br /> <span>27</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Sat <br /> <span>28</span>
                  </div>
                </th>
                <th>
                  <div className="date text-center">
                    Sun <br /> <span>29</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="user_box">
                    <div className="d-flex align-items-start">
                      <img src={UserImage} alt="user" />
                      <div className="user_info flex-grow-1">
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="name_type ">
                            <h3>Chintan Raval (1001)</h3>
                            <p>Sr. UI/UX Designer</p>
                          </div>
                          <div className="count">27/30</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user_box">
                    <div className="d-flex align-items-start">
                      <img src={UserImage} alt="user" />
                      <div className="user_info flex-grow-1">
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="name_type ">
                            <h3>Chintan Raval (1001)</h3>
                            <p>Sr. UI/UX Designer</p>
                          </div>
                          <div className="count">27/30</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      A
                      <div className="attebdance_bar type_present_absent"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      w
                      <div className="attebdance_bar type_present_weeklyoff"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      w
                      <div className="attebdance_bar type_present_weeklyoff"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      PL
                      <div className="attebdance_bar type_present_paid_leave"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      H
                      <div className="attebdance_bar type_present_holiday"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user_box">
                    <div className="d-flex align-items-start">
                      <img src={UserImage} alt="user" />
                      <div className="user_info flex-grow-1">
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="name_type ">
                            <h3>Chintan Raval (1001)</h3>
                            <p>Sr. UI/UX Designer</p>
                          </div>
                          <div className="count">27/30</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user_box">
                    <div className="d-flex align-items-start">
                      <img src={UserImage} alt="user" />
                      <div className="user_info flex-grow-1">
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="name_type ">
                            <h3>Chintan Raval (1001)</h3>
                            <p>Sr. UI/UX Designer</p>
                          </div>
                          <div className="count">27/30</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user_box">
                    <div className="d-flex align-items-start">
                      <img src={UserImage} alt="user" />
                      <div className="user_info flex-grow-1">
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="name_type ">
                            <h3>Chintan Raval (1001)</h3>
                            <p>Sr. UI/UX Designer</p>
                          </div>
                          <div className="count">27/30</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="attebdance_type">
                    <div className="first_text first_text_aat text-center">
                      P<div className="attebdance_bar type_present"></div>
                    </div>
                  </div>
                </td>
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
      <Tooltip
        className="attendance_tooltip"
        target=".first_text_aat"
        mouseTrack
        mouseTrackLeft={10}
      >
        <p className="in_doat">
          <i className="pi pi-circle-fill"></i>In - 09:15 Am
        </p>
        <p className="out_doat">
          <i className="pi pi-circle-fill"></i>OUT - 10:20 PM
        </p>
        <p>Actual Working Hours : 09 H : 35 M</p>
      </Tooltip>
      <Tooltip
        className="attendance_tooltip"
        target=".count"
        mouseTrack
        mouseTrackLeft={10}
      >
        <div className="d-flex">
          <div className="me-2">
            <p className="p_doat">
              <i className="pi pi-circle-fill"></i>P : 22
            </p>
            <p className="pl_doat">
              <i className="pi pi-circle-fill"></i>PL : 01
            </p>
            <p className="w_doat">
              <i className="pi pi-circle-fill"></i>W : 05
            </p>
          </div>
          <div>
            <p className="a_doat">
              <i className="pi pi-circle-fill"></i>A : 02
            </p>
            <p className="ul_doat">
              <i className="pi pi-circle-fill"></i>UL : 02
            </p>
            <p className="h_doat">
              <i className="pi pi-circle-fill"></i>H : 00
            </p>
          </div>
        </div>
      </Tooltip>
    </div>
  );
}
