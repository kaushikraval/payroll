import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import UserImage from '../../Assets/images/user8.png';
import DownloadIcon from '../../Assets/images/downloadicon-blue.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import EmployeeImg from '../../Assets/images/user3.png';
import Refresh from '../../Assets/images/refresh.svg';
import ReactCheckbox from '../Common/ReactCheckbox';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function ViewPayRegister() {
  const [years, setYears] = useState([]);
  const [month, setMonth] = useState([]);
  const [company, setCompany] = useState([]);
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [location, setLocation] = useState([]);
  const [paymenttype, setPaymenttype] = useState([]);
  const [checked, setChecked] = useState();
  const [deletedetail, setDeleteDetail] = useState(false);
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
  const viewPayRegister = [
    {
      empCode: '1001',
      empProfile: EmployeeImg,
      empName: 'Dhaval Radadiya',
      companyName: 'Cmcreation Pvt Ltd',
      location: 'Station',
      department: 'Web Design',
      designation: 'Executive',
      paymentType: 'Bank',
      monthDay: '31',
      payableDay: '31',
      basic: '12,000.00',
      hra: '8,000.00',
      specialAllowance: '8,79.00',
      overtime: '3,400.00',
      grossEarning: '32,169.00',
      pf: '1,800.00',
      esic: '0.00',
      pt: '200.00',
      tds: '1,400.00',
      otherDeduction: '400.00',
      totalDeduction: '3,800.00',
      netPayableAmount: '28,369.00',
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
          <li>View Pay Register</li>
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
          <div className="text-sm-end d-flex align-items-center justify-content-sm-end">
            <Link to="/payroll/process-payroll" className="btn-secondary me-2">
              Back
            </Link>
            <button type="button" className="btn-border">
              <img className="me-2" src={DownloadIcon} /> Export
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
                  <span>Month Days</span>
                </th>
                <th scope="col">
                  <span>Payable Days</span>
                </th>
                <th scope="col">
                  <span>Basic</span>
                </th>
                <th scope="col">
                  <span>HRA</span>
                </th>
                <th scope="col">
                  <span>Special Allowance</span>
                </th>
                <th scope="col">
                  <span>Overtime</span>
                </th>
                <th scope="col">
                  <span>Gross Earning</span>
                </th>
                <th scope="col">
                  <span>PF</span>
                </th>
                <th scope="col">
                  <span>ESIC</span>
                </th>
                <th scope="col">
                  <span>PT</span>
                </th>
                <th scope="col">
                  <span>TDS</span>
                </th>
                <th scope="col">
                  <span>Other Deduction</span>
                </th>
                <th scope="col">
                  <span>Total Deduction</span>
                </th>
                <th scope="col">
                  <span>Net Payable Amount</span>
                </th>
                <th scope="col">
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {viewPayRegister.map(data => {
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
                    <td>{data.monthDay}</td>
                    <td>{data.payableDay}</td>
                    <td>{data.basic}</td>
                    <td>{data.hra}</td>
                    <td>{data.specialAllowance}</td>
                    <td>{data.overtime}</td>
                    <td>{data.grossEarning}</td>
                    <td>{data.pf}</td>
                    <td>{data.esic}</td>
                    <td>{data.pt}</td>
                    <td>{data.tds}</td>
                    <td>{data.otherDeduction}</td>
                    <td>{data.totalDeduction}</td>
                    <td>{data.netPayableAmount}</td>
                    <td>
                      <ul className="edit_wrap d-flex align-items-center">
                        <li
                          onClick={() => {
                            setDeleteDetail(true);
                          }}
                        >
                          <img src={Refresh} alt="Refresh" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={8}>Total</td>
                <td>223.50</td>
                <td>194.00</td>
                <td>113,000.00</td>
                <td>72,000.00</td>
                <td>78,921.00</td>
                <td>30,600.00</td>
                <td>294,521.00</td>
                <td>16,200.00</td>
                <td>0.00</td>
                <td>1,800.00</td>
                <td>12,600.00</td>
                <td>3,600.00</td>
                <td>34,200.00</td>
                <td colSpan={2}>260,321.00</td>
                {/* <td></td> */}
              </tr>
            </tfoot>
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
      <Dialog
        header="Are You Sure?"
        visible={deletedetail}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deletedetail')}
        onHide={() => onHide('deletedetail')}
      >
        <div className="delate_popup_wrap text-center">
          <p>
            Are you sure you want to Re-Generate salary of Chintan Raval for Aug
            - 2022?
          </p>
          <p>
            If You Re-Generated this salary all remain slary will be removed and
            new salary will be generated.
          </p>
        </div>
      </Dialog>
    </>
  );
}
