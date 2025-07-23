import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import UserImage from '../../Assets/images/user8.png';
import Export from '../../Assets/images/upload-icon-blue.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import EmployeeImg from '../../Assets/images/user3.png';
import File from '../../Assets/images/file.svg';
import Mail from '../../Assets/images/mail.svg';
import Eye from '../../Assets/images/eyes.svg';
import Download from '../../Assets/images/download.svg';
import ReactCheckbox from '../Common/ReactCheckbox';

export default function ManagePayslip() {
  const [years, setYears] = useState([]);
  const [month, setMonth] = useState([]);
  const [company, setCompany] = useState([]);
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [location, setLocation] = useState([]);
  const [paymenttype, setPaymenttype] = useState([]);
  const [checked, setChecked] = useState();
  const yearsOptions = [
    { label: '2022 - 2023', value: '2022 - 2023' },
    { label: '2021 - 2022', value: '2021 - 2022' },
    { label: '2020 - 2021', value: '2020 - 2021' },
  ];
  const monthOptions = [
    { label: 'Apr - 2022', value: 'Apr - 2022' },
    { label: 'May - 2022', value: 'May - 2022' },
    { label: 'Jun - 2022', value: 'Jun - 2022' },
  ];
  const companyOptions = [
    { label: 'Cmcreation Pvt Ltd', value: 'Cmcreation Pvt Ltd' },
    { label: 'Tempcm Pvt Ltd', value: 'Tempcm Pvt Ltd' },
    { label: 'Metaloop Solution', value: 'Metaloop Solution' },
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
  const paymenttypeOptions = [
    { label: 'Bank', value: 'Bank' },
    { label: 'Cash', value: 'Cash' },
    { label: 'Cheque', value: 'Cheque' },
  ];
  const ManagePayslip = [
    {
      empCode: '1001',
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      companyName: 'Cmcreation Pvt Ltd',
      location: 'Station',
      department: 'Web Design',
      designation: 'Executive',
      paymentType: 'Bank',
      month: 'Aug - 2022	',
      paySlipRelease: 'No',
      EmailSend: 'No',
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
          <li>
            <b>Payroll Process</b>
          </li>
          <li>Manage Payslip</li>
        </ul>
      </div>
      <div className="top_filter_wrap mt-3">
        <div className="row">
          <div className="col-xl-12">
            <div className="d-flex align-items-start">
              <ul className="filter_wrapper flex-grow-1">
                <li>
                  <div className="form_group">
                    <ReactSelectMultiple
                      value={years}
                      options={yearsOptions}
                      onChange={e => {
                        setYears(e.value);
                      }}
                      placeholder="2022 - 2023"
                    />
                  </div>
                </li>
                <li>
                  <div className="form_group">
                    <ReactSelectMultiple
                      value={month}
                      options={monthOptions}
                      onChange={e => {
                        setMonth(e.value);
                      }}
                      placeholder="Dec - 2022"
                    />
                  </div>
                </li>
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
                      value={company}
                      options={companyOptions}
                      onChange={e => {
                        setCompany(e.value);
                      }}
                      placeholder="Company"
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
                      value={paymenttype}
                      options={paymenttypeOptions}
                      onChange={e => {
                        setPaymenttype(e.value);
                      }}
                      placeholder="Payment Type"
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
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-lg-4 order-2 order-lg-1">
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
        <div className="col-lg-8 order-1 order-lg-2">
          <div className="text-lg-end d-flex align-items-center justify-content-lg-end mt-2 mt-lg-0">
            <Link to="/payroll/process-payroll" className="btn-secondary me-2">
              Back
            </Link>
            <button type="button" className="btn-border me-2">
              <img className="me-2" src={Export} alt="Export" /> Export
            </button>
            <button type="button" className="btn-border me-2">
              Release Payslip
            </button>
            <button type="button" className="btn-border me-2">
              Send By Mail
            </button>
            <button type="button" className="btn-primary">
              Bulk Generate
            </button>
          </div>
        </div>
      </div>
      <div className="data_table_one">
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
                  <span>Company Name</span>
                </th>
                <th scope="col">
                  <span>Location</span>
                </th>
                <th scope="col">
                  <span>Department</span>
                </th>
                <th scope="col">
                  <span>Designation</span>
                </th>
                <th scope="col">
                  <span>Payment Type</span>
                </th>
                <th scope="col">
                  <span>Month</span>
                </th>
                <th scope="col">
                  <span>Pay slip Released</span>
                </th>
                <th scope="col">
                  <span>Email Sent</span>
                </th>
                <th scope="col">
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ManagePayslip.map(data => {
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
                    <td>{data.companyName}</td>
                    <td>{data.location}</td>
                    <td>{data.department}</td>
                    <td>{data.designation}</td>
                    <td>{data.paymentType}</td>
                    <td>{data.month}</td>
                    <td>{data.paySlipRelease}</td>
                    <td>{data.EmailSend}</td>
                    <td>
                      <ul className="edit_wrap d-flex align-items-center">
                        <li>
                          <img src={File} alt="File" />
                        </li>
                        <li>
                          <img src={Mail} alt="Mail" />
                        </li>
                        <li>
                          <img src={Download} alt="Download" />
                        </li>
                        <li>
                          <img src={Eye} alt="Eye" />
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
    </>
  );
}
