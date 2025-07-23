import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import TextArea from '../Common/TextArea';
import UserImage from '../../Assets/images/user8.png';
import EmployeeImg from '../../Assets/images/user3.png';
import FilterIcon from '../../Assets/images/filter.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import ReactCheckbox from '../Common/ReactCheckbox';
import View from '../../Assets/images/eyes.svg';
import Edit from '../../Assets/images/edit.svg';
import CheckCircle from '../../Assets/images/close-circle.svg';
import cancelIcon from '../../Assets/images/close-circle-two.png';

export default function CompOffApproval() {
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [location, setLocation] = useState([]);
  const [status, setStatus] = useState([]);
  const [checked, setChecked] = useState();
  const [approveCoff, setApproveCoff] = useState(false);
  const [bulkApproveCoff, setBulkApproveCoff] = useState(false);
  const [rejectCoff, setRejectCoff] = useState(false);
  const [bulkRejectCoff, setBulkRejectCoff] = useState(false);
  const [approveddetail, setApprovedDetail] = useState(false);
  const dialogFuncMap = {
    approveddetail: setApprovedDetail,
    bulkApproveCoff: setBulkApproveCoff,
    bulkRejectCoff: setBulkRejectCoff,
    rejectCoff: setRejectCoff,
    approveCoff: setApproveCoff,
  };

  const onClick = name => {
    dialogFuncMap[`${name}`](true);
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
  const statusOptions = [
    { label: 'In Progrees', value: 'In Progrees' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Cancelled', value: 'Cancelled' },
  ];
  const compOffApprovalData = [
    {
      empCode: 1001,
      empName: 'Chintan Raval',
      coffScheme: 'Manager COFF',
      date: '16 Aug 2022',
      day: '1 Day',
      overtimeHours: '04 H : 20 M',
      creditedDays: '0.5',
      expiryDate: '16 Aug 2022',
      expiryDay: '1 Day',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 01 Dec 2022 • 08:59 AM',
      status: 'Approved',
    },
    {
      empCode: 1002,
      empName: 'Chintan Raval',
      coffScheme: 'Manager COFF',
      date: '16 Aug 2022',
      day: '1 Day',
      overtimeHours: '04 H : 20 M',
      creditedDays: '0.5',
      expiryDate: '16 Aug 2022',
      expiryDay: '1 Day',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 01 Dec 2022 • 08:59 AM',
      status: 'Approved',
    },
    {
      empCode: 1003,
      empName: 'Chintan Raval',
      coffScheme: 'Manager COFF',
      date: '16 Aug 2022',
      day: '1 Day',
      overtimeHours: '04 H : 20 M',
      creditedDays: '0.5',
      expiryDate: '16 Aug 2022',
      expiryDay: '1 Day',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 01 Dec 2022 • 08:59 AM',
      status: 'Approved',
    },
    {
      empCode: 1004,
      empName: 'Chintan Raval',
      coffScheme: 'Manager COFF',
      date: '16 Aug 2022',
      day: '1 Day',
      overtimeHours: '04 H : 20 M',
      creditedDays: '0.5',
      expiryDate: '16 Aug 2022',
      expiryDay: '1 Day',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 01 Dec 2022 • 08:59 AM',
      status: 'Approved',
    },
    {
      empCode: 1005,
      empName: 'Chintan Raval',
      coffScheme: 'Manager COFF',
      date: '16 Aug 2022',
      day: '1 Day',
      overtimeHours: '04 H : 20 M',
      creditedDays: '0.5',
      expiryDate: '16 Aug 2022',
      expiryDay: '1 Day',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 01 Dec 2022 • 08:59 AM',
      status: 'Approved',
    },
    {
      empCode: 1006,
      empName: 'Chintan Raval',
      coffScheme: 'Manager COFF',
      date: '16 Aug 2022',
      day: '1 Day',
      overtimeHours: '04 H : 20 M',
      creditedDays: '0.5',
      expiryDate: '16 Aug 2022',
      expiryDay: '1 Day',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 01 Dec 2022 • 08:59 AM',
      status: 'Approved',
    },
    {
      empCode: 1007,
      empName: 'Chintan Raval',
      coffScheme: 'Manager COFF',
      date: '16 Aug 2022',
      day: '1 Day',
      overtimeHours: '04 H : 20 M',
      creditedDays: '0.5',
      expiryDate: '16 Aug 2022',
      expiryDay: '1 Day',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 01 Dec 2022 • 08:59 AM',
      status: 'Approved',
    },
    {
      empCode: 1008,
      empName: 'Chintan Raval',
      coffScheme: 'Manager COFF',
      date: '16 Aug 2022',
      day: '1 Day',
      overtimeHours: '04 H : 20 M',
      creditedDays: '0.5',
      expiryDate: '16 Aug 2022',
      expiryDay: '1 Day',
      actionByName: 'Chirag Sondagar',
      actionByDate: 'On 01 Dec 2022 • 08:59 AM',
      status: 'Approved',
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
            <b>Leave</b>
          </li>
          <li>COFF Approval</li>
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
                    value={status}
                    options={statusOptions}
                    onChange={e => {
                      setStatus(e.value);
                    }}
                    placeholder="Status"
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
            <button
              type="button"
              className="btn-border me-3"
              onClick={() => setBulkApproveCoff(true)}
            >
              Approve
            </button>
            <button
              type="button"
              className="btn-border"
              onClick={() => setBulkRejectCoff(true)}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
      <div className="coff_approval_table">
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
                    <span>COFF Scheme</span>
                  </th>
                  <th scope="col">
                    <span>Date</span>
                  </th>

                  <th scope="col">
                    <span>
                      Overtime/
                      <br /> Extra Work Hours
                    </span>
                  </th>
                  <th scope="col">
                    <span>Credited Days</span>
                  </th>
                  <th scope="col">
                    <span>Expiry Date</span>
                  </th>
                  <th scope="col">
                    <span>Action By</span>
                  </th>
                  <th scope="col">
                    <span>Status</span>
                  </th>
                  <th scope="col">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {compOffApprovalData.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <ReactCheckbox
                          onChange={e => setChecked(e.checked)}
                          checked={checked}
                        />
                        <span className="ms-2">{data.empCode}</span>
                      </td>
                      <td>
                        <div className="name_wrap">
                          <img src={EmployeeImg} alt="UserImage" />
                          <span>{data.empName}</span>
                        </div>
                      </td>
                      <td>{data.coffScheme}</td>
                      <td>
                        {data.date}
                        <br />
                        <span className="text_gray">{data.day}</span>
                      </td>
                      <td>{data.overtimeHours}</td>
                      <td>{data.creditedDays}</td>
                      <td>
                        {data.expiryDate}
                        <br />
                        <span className="text_gray">{data.expiryDay}</span>
                      </td>
                      <td>
                        {data.actionByName} <br />
                        <span className="text_gray">{data.actionByDate}</span>
                      </td>
                      <td>
                        <span className="badge bedge_success">
                          {data.status}
                        </span>
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li>
                            <img
                              src={View}
                              data-inject-svg
                              className=""
                              alt="view"
                              onClick={() => onClick('approveddetail')}
                            />
                          </li>
                          <li>
                            <img
                              src={CheckCircle}
                              data-inject-svg
                              className=""
                              alt="save"
                              onClick={() => setApproveCoff(true)}
                            />
                          </li>
                          <li>
                            <img
                              src={cancelIcon}
                              data-inject-svg
                              className=""
                              alt="cancel"
                              onClick={() => setRejectCoff(true)}
                            />
                          </li>
                          <li>
                            <img
                              src={Edit}
                              data-inject-svg
                              className=""
                              alt="Edit"
                            />
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
        className="small_popup"
        header="Approve COFF Request"
        visible={approveCoff}
        onHide={() => setApproveCoff(false)}
        footer={renderFooter('approveCoff')}
      >
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="form_group">
              <label>Employee Name :</label>
              <p>Chintan Patel</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="form_group">
              <label>Date :</label>
              <p>Wed, 30 Nov 2022</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="form_group">
              <label>Credited Days :</label>
              <p>0.5</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="form_group">
              <label>Expiry Date :</label>
              <p>Thu, 31 Dec 2022</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="form_group">
              <label>Reason :</label>
              <p>Extra Design Work</p>
            </div>
          </div>
          <div className="col-12">
            <div className="form_group">
              <label>Approval Comment :</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        className="small_popup"
        header="Reject COFF Request"
        visible={rejectCoff}
        onHide={() => setRejectCoff(false)}
        footer={renderFooter('rejectCoff')}
      >
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="form_group">
              <label>Employee Name :</label>
              <p>Chintan Patel</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="form_group">
              <label>Date :</label>
              <p>Wed, 30 Nov 2022</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="form_group">
              <label>Credited Days :</label>
              <p>0.5</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="form_group">
              <label>Expiry Date :</label>
              <p>Thu, 31 Dec 2022</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="form_group">
              <label>Reason :</label>
              <p>Extra Design Work</p>
            </div>
          </div>

          <div className="col-12">
            <div className="form_group">
              <label>Reject Comment :</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        className="small_popup"
        header="Bulk Approve COFF Requests"
        visible={bulkApproveCoff}
        onHide={() => setBulkApproveCoff(false)}
        footer={renderFooter('bulkApproveCoff')}
      >
        <p className="text-center">Do You Want to Approve 4 COFF Requests?</p>
      </Dialog>
      <Dialog
        className="small_popup"
        header="Bulk Reject COFF Requests"
        visible={bulkRejectCoff}
        onHide={() => setBulkRejectCoff(false)}
        footer={renderFooter('bulkRejectCoff')}
      >
        <p className="text-center">Do You Want to Reject 4 COFF Requests?</p>
      </Dialog>
      <Dialog
        header="Approved"
        visible={approveddetail}
        draggable={false}
        resizable={false}
        className="medium_popup approve_popup"
        onHide={() => setApprovedDetail(false)}
      >
        <div className="">
          <div className="user_info d-flex align-items-center">
            <img src={EmployeeImg} alt="UserImage" />
            <div className="ms-2 flex-grow-1">
              <h4 className="mb-1">Chintan Raval</h4>
              <span>(Applied by Chintan Raval On 15 jul 2022 • 10:52 AM)</span>
            </div>
          </div>
          <div className="date_leave_type">
            <div className="d-flex flex-wrap">
              <div className="d-flex mb-3">
                <div className="date_box text-center">
                  <div className="month">Aug</div>
                  <div className="date">
                    <p className="mb-0">
                      25 <br /> Mon
                    </p>
                  </div>
                </div>
                <div className="date_box text-center">
                  <div className="month">Aug</div>
                  <div className="date">
                    <p className="mb-0">
                      25 <br /> Mon
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-grow-1">
                <div className="type_info">
                  <h6>Leave Days :</h6>
                  <p>6</p>
                </div>
                <div className="type_info">
                  <h6>Leave Type :</h6>
                  <p>Paid</p>
                </div>
                <div className="type_info">
                  <h6>Leave Name :</h6>
                  <p>Casual Leave</p>
                </div>
              </div>
            </div>
          </div>
          <p className="my-3">No Teammate are on Leave on This Day</p>
          <div className="type_info">
            <h6>Reason :</h6>
            <p>Going to Trip</p>
          </div>
          <div className="approve_user">
            <div className="approve_by d-flex align-items-center">
              <img src={CheckCircle} alt="check" />
              <p className="m-0">Approved by</p>
            </div>
            <div className="user_info d-flex align-items-center mt-3 mb-0">
              <img src={EmployeeImg} width="38" alt="UserImage" />
              <h4 className="mb-0 ps-2">Chintan Raval</h4>
              <span>(Applied by Chintan Raval On 15 jul 2022 • 10:52 AM)</span>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
